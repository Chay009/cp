import React from "react";
import { SummarizedData } from "../../types";
import formatNumberToUSStandard from "../utils/formatNumberToUSStandard";

const getColorFromPositiveRank = (rank: number, maxRank: number): string => {
  const percentage = rank / maxRank;
  const maxBrightness = 225;
  if (percentage < 0.5) {
    const green = Math.floor(percentage * 2 * maxBrightness);
    return `rgb(${green}, ${maxBrightness}, 0)`;
  } else {
    const red = Math.floor((1 - percentage) * 2 * maxBrightness);
    return `rgb(${maxBrightness}, ${red}, 0)`;
  }
};


interface HeatmapProps {
  data: SummarizedData[] | null;
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  const sortedByHour = data?.sort((a, b) => {
    const hourA = parseInt(a.StartTime.split(":")[0], 10);
    const hourB = parseInt(b.StartTime.split(":")[0], 10);
    return hourA - hourB;
  });

  const rankedData =
    sortedByHour &&
    sortedByHour
      .map((item) => {
        const clicks = item.Clicks || 0;
        const totalOrders = item.TotalOrders || 0;
        const cvr = clicks > 0 ? totalOrders / clicks : 0;
        return {
          ...item,
          Hour: parseInt(item.StartTime.split(":")[0], 10),
          CVR: cvr,
        };
      })
      .map((item, _, array) => {
        const rankACOS = [...array].sort((a, b) => a.TotalACOS - b.TotalACOS).indexOf(item) + 1;
        const rankCVR = [...array].sort((a, b) => b.CVR - a.CVR).indexOf(item) + 1;
        const rankSpend = [...array].sort((a, b) => b.Spend - a.Spend).indexOf(item) + 1;
        const rankOrders = [...array].sort((a, b) => b.TotalOrders - a.TotalOrders).indexOf(item) + 1;

        return {
          ...item,
          RankACOS: rankACOS,
          RankCVR: rankCVR,
          RankSpend: rankSpend,
          RankOrders: rankOrders,
          ColorACOS: getColorFromPositiveRank(rankACOS, array.length),
          ColorCVR: getColorFromPositiveRank(rankCVR, array.length),
          ColorSpend: getColorFromPositiveRank(rankSpend, array.length),
          ColorOrders: getColorFromPositiveRank(rankOrders, array.length),
        };
      });

  const finalResult = rankedData?.sort((a, b) => a.Hour - b.Hour); // Sort back by Hour

  return (
    <div className="w-full h-full mx-auto p-4 bg-white flex">
      <div className="flex-1">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-2 py-1">Time Of Day</th>
              <th className="px-2 py-1">Clicks</th>
              <th className="px-2 py-1">Spend</th>
              <th className="px-2 py-1">Orders</th>
              <th className="px-2 py-1">ACOS</th>
              <th className="px-2 py-1">CVR</th>
            </tr>
          </thead>
          <tbody>
            {finalResult?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-2 py-1 text-center" style={{ width: '100px' }}>
                    {item?.Hour}:00
                  </td>
                  <td
                    className="px-2 py-1 text-center"
                  >
                    {formatNumberToUSStandard(item?.Clicks)}
                  </td>
                  <td
                    className="border-x-4 border-white px-2 py-1 text-center"
                    style={{ backgroundColor: item.ColorSpend }}
                  >
                    {formatNumberToUSStandard(item?.Spend?.toFixed(2))}
                  </td>
                  <td
                    className="border-x-4 px-2 border-white py-1 text-center"
                    style={{ backgroundColor: item.ColorOrders }}
                  >
                    {formatNumberToUSStandard(item?.TotalOrders)}
                  </td>
                  <td
                    className="border-x-4 px-2 border-white py-1 text-center"
                    style={{ backgroundColor: item.ColorACOS }}
                  >
                    {item?.TotalACOS.toFixed(2)}%
                  </td>
                  <td
                    className="border-x-4 px-2 border-white py-1 text-center"
                    style={{ backgroundColor: item.ColorCVR }}
                  >
                    {(item?.CVR * 100).toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 text-center">
          <h1 className="text-lg font-bold pl-4 pr-4 p-1">Scale</h1>
        </div>
        <span className="text-sm font-medium text-green-600 mt-2">Positive</span>
        <div
          className="flex-1 w-4 bg-gradient-to-b from-green-600 via-yellow-400 to-red-600"
          style={{ height: '100%' }}
        ></div>
        <span className="text-sm font-medium text-red-600 mb-2">Negative</span>
      </div>
    </div>
  );
};

export default Heatmap;

import React from 'react';
import { calculateFifthTableTotal } from '../utils/calculateFifthTableTotal';
import CampaignQualityTable from './CampaignQualityTable';

interface ThirdDataFilterVal {
  lable: string;
  value: string;
}

interface ForthDataFilterVal {
  lable: string;
  value: string;
}

const thirddatafilterval: ThirdDataFilterVal[] = [
  {
    lable: "SP Campaign",
    value: "sp_value",
  },
  {
    lable: "SB Campaign",
    value: "sb_value",
  },
  {
    lable: "SD Campaign",
    value: "sd_value",
  },
  {
    lable: "All",
    value: "total",
  },
];

const forthdatafilterval: ForthDataFilterVal[] = [
  {
    lable: "Band A : ASINs with top 50% by total sales",
    value: "brandA",
  },
  {
    lable: "Band B : ASINs with middle 30% by total sales ",
    value: "brandB",
  },
  {
    lable: "Band C : ASINs with bottom 20% by total sales",
    value: "brandC",
  },
];

const TableComponent: React.FC<any> = ({ firstReport, secReport, thirdReport, forthReport,filterfourth, setFilterfourth, filterthird, setFilterthird,campaign}) => {
  
  const handlefourthFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterfourth(event.target.value);
  };

  const handlethirdFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterthird(event.target.value);
  };
  

  return (
    <div>
      <h2 className="font-semibold text-[16px] leading-[24px] text-[#64748B] pt-4 pb-2">
        Performance by Campaign Type
      </h2>
      <div className="overflow-x-auto w-full mb-6">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#FEF6FF] border-b">
              <th className="py-2 px-4">Campaign Type</th>
              <th className="py-2 px-4">Total Spends</th>
              <th className="py-2 px-4">Ad sales</th>
              <th className="py-2 px-4">Ad clicks</th>
              <th className="py-2 px-4">Ad orders</th>
              <th className="py-2 px-4">ACOS %</th>
              <th className="py-2 px-4">CVR %</th>
              <th className="py-2 px-4">Spends %</th>
              <th className="py-2 px-4">Sales %</th>
            </tr>
          </thead>
          <tbody>
            {['sp_campaign', 'sb_campaign', 'sd_campaign'].map(campaign => (
              <tr className="border-b" key={campaign}>
                <td className="py-2 px-4">
                  {String(campaign.replace(/_/g, ' ').split(' ').map(word => word.length <= 2 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '))}
                </td>
                {firstReport ? (
                  <>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].totalSpends) &&
                        !isNaN(firstReport[campaign].totalSpends)
                        ? firstReport[campaign].totalSpends.toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].totalSales) &&
                        !isNaN(firstReport[campaign].totalSales)
                        ? firstReport[campaign].totalSales.toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].totalClicks) &&
                        !isNaN(firstReport[campaign].totalClicks)
                        ? firstReport[campaign].totalClicks.toFixed(0)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].totalOrders) &&
                        !isNaN(firstReport[campaign].totalOrders)
                        ? firstReport[campaign].totalOrders.toFixed(0)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].acos) && !isNaN(firstReport[campaign].acos)
                        ? (firstReport[campaign].acos * 100).toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].cvr) && !isNaN(firstReport[campaign].cvr)
                        ? (firstReport[campaign].cvr * 100).toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].spends) && !isNaN(firstReport[campaign].spends)
                        ? firstReport[campaign].spends.toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport[campaign].sales) && !isNaN(firstReport[campaign].sales)
                        ? firstReport[campaign].sales.toFixed(2)
                        : 0}
                    </td>
                  </>
                ) : (
                  <td className="py-2 px-4" colSpan={8}>
                    No data
                  </td>
                )}
              </tr>
            ))}
            <tr className="border-b" key={"total"}>
                <td className="py-2 px-4">
                  {"Total"}
                </td>
                {firstReport ? (
                  <>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].totalSpends) &&
                        !isNaN(firstReport['total'].totalSpends)
                        ? firstReport['total'].totalSpends.toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].totalSales) &&
                        !isNaN(firstReport['total'].totalSales)
                        ? firstReport['total'].totalSales.toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].totalClicks) &&
                        !isNaN(firstReport['total'].totalClicks)
                        ? firstReport['total'].totalClicks.toFixed(0)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].totalOrders) &&
                        !isNaN(firstReport['total'].totalOrders)
                        ? firstReport['total'].totalOrders.toFixed(0)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].acos) && !isNaN(firstReport['total'].acos)
                        ? (firstReport['total'].acos * 100).toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">
                      {isFinite(firstReport['total'].cvr) && !isNaN(firstReport['total'].cvr)
                        ? (firstReport['total'].cvr * 100).toFixed(2)
                        : 0}
                    </td>
                    <td className="py-2 px-4">100</td>
                    <td className="py-2 px-4">100</td>
                  </>
                ) : (
                  <td className="py-2 px-4" colSpan={8}>
                    No data
                  </td>
                )}
              </tr>
          </tbody>
        </table>
      </div>

      {/* Second Table */}
      <h2 className="font-semibold text-[16px] leading-[24px] text-[#64748B] pt-4 pb-6">
        Performance by Placement Type
      </h2>
      <div className="overflow-x-auto w-full mb-6">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#F1FFFA] border-b">
              <th className="py-2 px-4">Placement Type</th>
              <th className="py-2 px-4">Total Spends</th>
              <th className="py-2 px-4">Ad sales</th>
              <th className="py-2 px-4">Ad clicks</th>
              <th className="py-2 px-4">Ad orders</th>
              <th className="py-2 px-4">ACOS %</th>
              <th className="py-2 px-4">CVR %</th>
              <th className="py-2 px-4">Spends %</th>
              <th className="py-2 px-4">Sales %</th>
            </tr>
          </thead>
          <tbody>
            {['top_search', 'rest_search', 'other'].map(search => (
              <tr key={search} className="border-b">
                <td className="py-2 px-4">{String(search.replace(/_/g, ' ')).charAt(0).toUpperCase() + String(search.replace(/_/g, ' ')).slice(1)}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].totalSpends) && !isNaN(secReport[search].totalSpends) ? secReport[search].totalSpends.toFixed(2) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].totalSales) && !isNaN(secReport[search].totalSales) ? secReport[search].totalSales.toFixed(2) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].totalClicks) && !isNaN(secReport[search].totalClicks) ? secReport[search].totalClicks.toFixed(0) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].totalOrders) && !isNaN(secReport[search].totalOrders) ? secReport[search].totalOrders.toFixed(0) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].acos) && !isNaN(secReport[search].acos) ? (secReport[search].acos * 100).toFixed(2) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].cvr) && !isNaN(secReport[search].cvr) ? (secReport[search].cvr * 100).toFixed(2) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].spends) && !isNaN(secReport[search].spends) ? secReport[search].spends.toFixed(2) : 0}</td>
                <td className="py-2 px-4">{isFinite(secReport[search].sales) && !isNaN(secReport[search].sales) ? secReport[search].sales.toFixed(2) : 0}</td>
              </tr>
            ))}
            <tr className="border-b">
              <td className="py-2 px-4">{"Total"}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].totalSpends) && !isNaN(secReport["total"].totalSpends) ? secReport["total"].totalSpends.toFixed(2) : 0}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].totalSales) && !isNaN(secReport["total"].totalSales) ? secReport["total"].totalSales.toFixed(2) : 0}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].totalClicks) && !isNaN(secReport["total"].totalClicks) ? secReport["total"].totalClicks.toFixed(0) : 0}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].totalOrders) && !isNaN(secReport["total"].totalOrders) ? secReport["total"].totalOrders.toFixed(0) : 0}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].acos) && !isNaN(secReport["total"].acos) ? (secReport["total"].acos * 100).toFixed(2) : 0}</td>
              <td className="py-2 px-4">{isFinite(secReport["total"].cvr) && !isNaN(secReport["total"].cvr) ? (secReport["total"].cvr * 100).toFixed(2) : 0}</td>
              <td className="py-2 px-4">100</td>
              <td className="py-2 px-4">100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Third Table */}
      <h2 className="font-semibold text-[16px] leading-[24px] text-[#64748B] pt-4 pb-2">
        Performance by Keyword type
      </h2>
      <div className="table-responsive w-100 mb-6">
        <div className="items-center mb-4">
          <label className="exclude-from-pdf font-semibold mr-2">Filter by Campaign Type:</label>
          <select
            className="exclude-from-pdf mb-2 px-4 py-2 border border-gray-300 rounded"
            onChange={handlethirdFilterChange}
            value={filterthird}
          >
            {thirddatafilterval.map((option) => (
              <option key={option.value} value={option.value}>
                {option.lable}
              </option>
            ))}
          </select>
          <div className="table-responsive w-100 mb-6">
            <table className="table w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#F4FAFF] border-b">
                  <th className="py-2 px-4">Keyword</th>
                  <th className="py-2 px-4">Total Spends</th>
                  <th className="py-2 px-4">Ad Sales</th>
                  <th className="py-2 px-4">Ad Clicks</th>
                  <th className="py-2 px-4">Ad Orders</th>
                  <th className="py-2 px-4">ACOS %</th>
                  <th className="py-2 px-4">CVR %</th>
                  <th className="py-2 px-4">Spends %</th>
                  <th className="py-2 px-4">Sales %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Broad</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.totalSpends[filterthird]) && isFinite(thirdReport?.broad?.totalSpends[filterthird]) && !isNaN(thirdReport?.broad?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.totalSales[filterthird]) && isFinite(thirdReport?.broad?.totalSales[filterthird]) && !isNaN(thirdReport?.broad?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.totalClicks[filterthird]) && isFinite(thirdReport?.broad?.totalClicks[filterthird]) && !isNaN(thirdReport?.broad?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.totalOrders[filterthird]) && isFinite(thirdReport?.broad?.totalOrders[filterthird]) && !isNaN(thirdReport?.broad?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.acos[filterthird]) && isFinite(thirdReport?.broad?.acos[filterthird]) && !isNaN(thirdReport?.broad?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.broad?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.cvr[filterthird]) && isFinite(thirdReport?.broad?.cvr[filterthird]) && !isNaN(thirdReport?.broad?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.broad?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.spends[filterthird]) && isFinite(thirdReport?.broad?.spends[filterthird]) && !isNaN(thirdReport?.broad?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.broad?.sales[filterthird]) && isFinite(thirdReport?.broad?.sales[filterthird]) && !isNaN(thirdReport?.broad?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.broad?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Exact</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.totalSpends[filterthird]) && isFinite(thirdReport?.exact?.totalSpends[filterthird]) && !isNaN(thirdReport?.exact?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.totalSales[filterthird]) && isFinite(thirdReport?.exact?.totalSales[filterthird]) && !isNaN(thirdReport?.exact?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.totalClicks[filterthird]) && isFinite(thirdReport?.exact?.totalClicks[filterthird]) && !isNaN(thirdReport?.exact?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.totalOrders[filterthird]) && isFinite(thirdReport?.exact?.totalOrders[filterthird]) && !isNaN(thirdReport?.exact?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.acos[filterthird]) && isFinite(thirdReport?.exact?.acos[filterthird]) && !isNaN(thirdReport?.exact?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.exact?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.cvr[filterthird]) && isFinite(thirdReport?.exact?.cvr[filterthird]) && !isNaN(thirdReport?.exact?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.exact?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.spends[filterthird]) && isFinite(thirdReport?.exact?.spends[filterthird]) && !isNaN(thirdReport?.exact?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.exact?.sales[filterthird]) && isFinite(thirdReport?.exact?.sales[filterthird]) && !isNaN(thirdReport?.exact?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.exact?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Phrase</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.totalSpends[filterthird]) && isFinite(thirdReport?.phrase?.totalSpends[filterthird]) && !isNaN(thirdReport?.phrase?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.totalSales[filterthird]) && isFinite(thirdReport?.phrase?.totalSales[filterthird]) && !isNaN(thirdReport?.phrase?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.totalClicks[filterthird]) && isFinite(thirdReport?.phrase?.totalClicks[filterthird]) && !isNaN(thirdReport?.phrase?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.totalOrders[filterthird]) && isFinite(thirdReport?.phrase?.totalOrders[filterthird]) && !isNaN(thirdReport?.phrase?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.totalOrders[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.acos[filterthird]) && isFinite(thirdReport?.phrase?.acos[filterthird]) && !isNaN(thirdReport?.phrase?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.phrase?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.cvr[filterthird]) && isFinite(thirdReport?.phrase?.cvr[filterthird]) && !isNaN(thirdReport?.phrase?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.phrase?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.spends[filterthird]) && isFinite(thirdReport?.phrase?.spends[filterthird]) && !isNaN(thirdReport?.phrase?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.phrase?.sales[filterthird]) && isFinite(thirdReport?.phrase?.sales[filterthird]) && !isNaN(thirdReport?.phrase?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.phrase?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Auto</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.totalSpends[filterthird]) && isFinite(thirdReport?.auto?.totalSpends[filterthird]) && !isNaN(thirdReport?.auto?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.totalSales[filterthird]) && isFinite(thirdReport?.auto?.totalSales[filterthird]) && !isNaN(thirdReport?.auto?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.totalClicks[filterthird]) && isFinite(thirdReport?.auto?.totalClicks[filterthird]) && !isNaN(thirdReport?.auto?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.totalOrders[filterthird]) && isFinite(thirdReport?.auto?.totalOrders[filterthird]) && !isNaN(thirdReport?.auto?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.acos[filterthird]) && isFinite(thirdReport?.auto?.acos[filterthird]) && !isNaN(thirdReport?.auto?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.auto?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.cvr[filterthird]) && isFinite(thirdReport?.auto?.cvr[filterthird]) && !isNaN(thirdReport?.auto?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.auto?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.spends[filterthird]) && isFinite(thirdReport?.auto?.spends[filterthird]) && !isNaN(thirdReport?.auto?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.auto?.sales[filterthird]) && isFinite(thirdReport?.auto?.sales[filterthird]) && !isNaN(thirdReport?.auto?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.auto?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Product Category</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.totalSpends[filterthird]) && isFinite(thirdReport?.product_category?.totalSpends[filterthird]) && !isNaN(thirdReport?.product_category?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.totalSales[filterthird]) && isFinite(thirdReport?.product_category?.totalSales[filterthird]) && !isNaN(thirdReport?.product_category?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.totalClicks[filterthird]) && isFinite(thirdReport?.product_category?.totalClicks[filterthird]) && !isNaN(thirdReport?.product_category?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.totalOrders[filterthird]) && isFinite(thirdReport?.product_category?.totalOrders[filterthird]) && !isNaN(thirdReport?.product_category?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.acos[filterthird]) && isFinite(thirdReport?.product_category?.acos[filterthird]) && !isNaN(thirdReport?.product_category?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.product_category?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.cvr[filterthird]) && isFinite(thirdReport?.product_category?.cvr[filterthird]) && !isNaN(thirdReport?.product_category?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.product_category?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.spends[filterthird]) && isFinite(thirdReport?.product_category?.spends[filterthird]) && !isNaN(thirdReport?.product_category?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.product_category?.sales[filterthird]) && isFinite(thirdReport?.product_category?.sales[filterthird]) && !isNaN(thirdReport?.product_category?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.product_category?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Others</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.totalSpends[filterthird]) && isFinite(thirdReport?.others?.totalSpends[filterthird]) && !isNaN(thirdReport?.others?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.others?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.totalSales[filterthird]) && isFinite(thirdReport?.others?.totalSales[filterthird]) && !isNaN(thirdReport?.others?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.others?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.totalClicks[filterthird]) && isFinite(thirdReport?.others?.totalClicks[filterthird]) && !isNaN(thirdReport?.others?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.others?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.totalOrders[filterthird]) && isFinite(thirdReport?.others?.totalOrders[filterthird]) && !isNaN(thirdReport?.others?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.others?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.acos[filterthird]) && isFinite(thirdReport?.others?.acos[filterthird]) && !isNaN(thirdReport?.others?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.others?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.cvr[filterthird]) && isFinite(thirdReport?.others?.cvr[filterthird]) && !isNaN(thirdReport?.others?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.others?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.spends[filterthird]) && isFinite(thirdReport?.others?.spends[filterthird]) && !isNaN(thirdReport?.others?.spends[filterthird]) ?
                      JSON.parse(thirdReport?.others?.spends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.others?.sales[filterthird]) && isFinite(thirdReport?.others?.sales[filterthird]) && !isNaN(thirdReport?.others?.sales[filterthird]) ?
                      JSON.parse(thirdReport?.others?.sales[filterthird].toFixed(2)) : 0}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4">Total</td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.totalSpends[filterthird]) && isFinite(thirdReport?.total?.totalSpends[filterthird]) && !isNaN(thirdReport?.total?.totalSpends[filterthird]) ?
                      JSON.parse(thirdReport?.total?.totalSpends[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.totalSales[filterthird]) && isFinite(thirdReport?.total?.totalSales[filterthird]) && !isNaN(thirdReport?.total?.totalSales[filterthird]) ?
                      JSON.parse(thirdReport?.total?.totalSales[filterthird].toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.totalClicks[filterthird]) && isFinite(thirdReport?.total?.totalClicks[filterthird]) && !isNaN(thirdReport?.total?.totalClicks[filterthird]) ?
                      JSON.parse(thirdReport?.total?.totalClicks[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.totalOrders[filterthird]) && isFinite(thirdReport?.total?.totalOrders[filterthird]) && !isNaN(thirdReport?.total?.totalOrders[filterthird]) ?
                      JSON.parse(thirdReport?.total?.totalOrders[filterthird].toFixed(0)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.acos[filterthird]) && isFinite(thirdReport?.total?.acos[filterthird]) && !isNaN(thirdReport?.total?.acos[filterthird]) ?
                      JSON.parse((thirdReport?.total?.acos[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(thirdReport?.total?.cvr[filterthird]) && isFinite(thirdReport?.total?.cvr[filterthird]) && !isNaN(thirdReport?.total?.cvr[filterthird]) ?
                      JSON.parse((thirdReport?.total?.cvr[filterthird] * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    100
                  </td>
                  <td className="py-2 px-4">
                    100
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* fourth table  */}
      <h2 className="font-semibold text-[16px] leading-[24px] text-[#64748B] pt-4 pb-2">
      Performance by ASIN Type
      </h2>
      <div className="table-responsive w-100 mb-6">
        <div className="items-center mb-4">
          <div className="table-responsive w-100 mb-6">
            <table className="table w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#FFF9EF] border-b">
                  <th className="py-2 px-4">ASIN</th>
                  <th className="py-2 px-4">Total Spends</th>
                  <th className="py-2 px-4">Ad Sales</th>
                  <th className="py-2 px-4">ACOS %</th>
                  <th className="py-2 px-4">Spends %</th>
                  <th className="py-2 px-4">Sales %</th>
                </tr>
              </thead>
              <tbody>
                {/* Band A */}
                <tr>
                  <td className="py-2 px-4">Band A</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandA']?.totalSpends?.total) && isFinite(forthReport['brandA'].totalSpends.total) && !isNaN(forthReport['brandA'].totalSpends.total) ?
                      JSON.parse(forthReport['brandA'].totalSpends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandA']?.totalSales?.total) && isFinite(forthReport['brandA'].totalSales.total) && !isNaN(forthReport['brandA'].totalSales.total) ?
                      JSON.parse(forthReport['brandA'].totalSales.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandA']?.acos?.total) && isFinite(forthReport['brandA'].acos.total) && !isNaN(forthReport['brandA'].acos.total) ?
                      JSON.parse((forthReport['brandA'].acos.total * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandA']?.spends?.total) && isFinite(forthReport['brandA'].spends.total) && !isNaN(forthReport['brandA'].spends.total) ?
                      JSON.parse(forthReport['brandA'].spends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandA']?.sales?.total) && isFinite(forthReport['brandA'].sales.total) && !isNaN(forthReport['brandA'].sales.total) ?
                      JSON.parse(forthReport['brandA'].sales.total.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* Band B */}
                <tr>
                  <td className="py-2 px-4">Band B</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandB']?.totalSpends?.total) && isFinite(forthReport['brandB'].totalSpends.total) && !isNaN(forthReport['brandB'].totalSpends.total) ?
                      JSON.parse(forthReport['brandB'].totalSpends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandB']?.totalSales?.total) && isFinite(forthReport['brandB'].totalSales.total) && !isNaN(forthReport['brandB'].totalSales.total) ?
                      JSON.parse(forthReport['brandB'].totalSales.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandB']?.acos?.total) && isFinite(forthReport['brandB'].acos.total) && !isNaN(forthReport['brandB'].acos.total) ?
                      JSON.parse((forthReport['brandB'].acos.total * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandB']?.spends?.total) && isFinite(forthReport['brandB'].spends.total) && !isNaN(forthReport['brandB'].spends.total) ?
                      JSON.parse(forthReport['brandB'].spends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandB']?.sales?.total) && isFinite(forthReport['brandB'].sales.total) && !isNaN(forthReport['brandB'].sales.total) ?
                      JSON.parse(forthReport['brandB'].sales.total.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* Band C */}
                <tr>
                  <td className="py-2 px-4">Band C</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandC']?.totalSpends?.total) && isFinite(forthReport['brandC'].totalSpends.total) && !isNaN(forthReport['brandC'].totalSpends.total) ?
                      JSON.parse(forthReport['brandC'].totalSpends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandC']?.totalSales?.total) && isFinite(forthReport['brandC'].totalSales.total) && !isNaN(forthReport['brandC'].totalSales.total) ?
                      JSON.parse(forthReport['brandC'].totalSales.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandC']?.acos?.total) && isFinite(forthReport['brandC'].acos.total) && !isNaN(forthReport['brandC'].acos.total) ?
                      JSON.parse((forthReport['brandC'].acos.total * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandC']?.spends?.total) && isFinite(forthReport['brandC'].spends.total) && !isNaN(forthReport['brandC'].spends.total) ?
                      JSON.parse(forthReport['brandC'].spends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['brandC']?.sales?.total) && isFinite(forthReport['brandC'].sales.total) && !isNaN(forthReport['brandC'].sales.total) ?
                      JSON.parse(forthReport['brandC'].sales.total.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* Total */}
                <tr>
                  <td className="py-2 px-4">Total</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['total']?.totalSpends?.total) && isFinite(forthReport['total'].totalSpends.total) && !isNaN(forthReport['total'].totalSpends.total) ?
                      JSON.parse(forthReport['total'].totalSpends.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['total']?.totalSales?.total) && isFinite(forthReport['total'].totalSales.total) && !isNaN(forthReport['total'].totalSales.total) ?
                      JSON.parse(forthReport['total'].totalSales.total.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport['total']?.acos?.total) && isFinite(forthReport['total'].acos.total) && !isNaN(forthReport['total'].acos.total) ?
                      JSON.parse((forthReport['total'].acos.total * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    100
                  </td>
                  <td className="py-2 px-4">
                    100
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* fifth table */}
      <div className="table-responsive w-100 mb-6">
        <div className="items-center mb-4">
          <label className="exclude-from-pdf font-semibold mr-2">Filter by Band:</label>
          <select
            className="exclude-from-pdf mb-2 px-4 py-2 border border-gray-300 rounded"
            onChange={handlefourthFilterChange}
            value={filterfourth}
          >
            {forthdatafilterval.map((option) => (
              <option key={option.value} value={option.value}>
                {option.lable}
              </option>
            ))}
          </select>
          <div className="table-responsive w-100 mb-6">
            <table className="table w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#FFF9EF] border-b">
                  <th className="py-2 px-4">Campaign</th>
                  <th className="py-2 px-4">Total Spends</th>
                  <th className="py-2 px-4">Ad Sales</th>
                  <th className="py-2 px-4">ACOS %</th>
                  <th className="py-2 px-4">Spends %</th>
                  <th className="py-2 px-4">Sales %</th>
                </tr>
              </thead>
              <tbody>
                {/* SP */}
                <tr>
                  <td className="py-2 px-4">SP Campaign</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSpends?.sp_value) && isFinite(forthReport[filterfourth].totalSpends.sp_value) && !isNaN(forthReport[filterfourth].totalSpends.sp_value) ?
                      JSON.parse(forthReport[filterfourth].totalSpends.sp_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSales?.sp_value) && isFinite(forthReport[filterfourth].totalSales.sp_value) && !isNaN(forthReport[filterfourth].totalSales.sp_value) ?
                      JSON.parse(forthReport[filterfourth].totalSales.sp_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.acos?.sp_value) && isFinite(forthReport[filterfourth].acos.sp_value) && !isNaN(forthReport[filterfourth].acos.sp_value) ?
                      JSON.parse((forthReport[filterfourth].acos.sp_value * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.spends?.sp_value) && isFinite(forthReport[filterfourth].spends.sp_value) && !isNaN(forthReport[filterfourth].spends.sp_value) ?
                      JSON.parse(forthReport[filterfourth].spends.sp_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.sales?.sp_value) && isFinite(forthReport[filterfourth].sales.sp_value) && !isNaN(forthReport[filterfourth].sales.sp_value) ?
                      JSON.parse(forthReport[filterfourth].sales.sp_value.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* SB */}
                <tr>
                  <td className="py-2 px-4">SB Campaign</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSpends?.sb_value) && isFinite(forthReport[filterfourth].totalSpends.sb_value) && !isNaN(forthReport[filterfourth].totalSpends.sb_value) ?
                      JSON.parse(forthReport[filterfourth].totalSpends.sb_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSales?.sb_value) && isFinite(forthReport[filterfourth].totalSales.sb_value) && !isNaN(forthReport[filterfourth].totalSales.sb_value) ?
                      JSON.parse(forthReport[filterfourth].totalSales.sb_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.acos?.sb_value) && isFinite(forthReport[filterfourth].acos.sb_value) && !isNaN(forthReport[filterfourth].acos.sb_value) ?
                      JSON.parse((forthReport[filterfourth].acos.sb_value * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.spends?.sb_value) && isFinite(forthReport[filterfourth].spends.sb_value) && !isNaN(forthReport[filterfourth].spends.sb_value) ?
                      JSON.parse(forthReport[filterfourth].spends.sb_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.sales?.sb_value) && isFinite(forthReport[filterfourth].sales.sb_value) && !isNaN(forthReport[filterfourth].sales.sb_value) ?
                      JSON.parse(forthReport[filterfourth].sales.sb_value.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* SD */}
                <tr>
                  <td className="py-2 px-4">SD Campaign</td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSpends?.sd_value) && isFinite(forthReport[filterfourth].totalSpends.sd_value) && !isNaN(forthReport[filterfourth].totalSpends.sd_value) ?
                      JSON.parse(forthReport[filterfourth].totalSpends.sd_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.totalSales?.sd_value) && isFinite(forthReport[filterfourth].totalSales.sd_value) && !isNaN(forthReport[filterfourth].totalSales.sd_value) ?
                      JSON.parse(forthReport[filterfourth].totalSales.sd_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.acos?.sd_value) && isFinite(forthReport[filterfourth].acos.sd_value) && !isNaN(forthReport[filterfourth].acos.sd_value) ?
                      JSON.parse((forthReport[filterfourth].acos.sd_value * 100).toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.spends?.sd_value) && isFinite(forthReport[filterfourth].spends.sd_value) && !isNaN(forthReport[filterfourth].spends.sd_value) ?
                      JSON.parse(forthReport[filterfourth].spends.sd_value.toFixed(2)) : 0}
                  </td>
                  <td className="py-2 px-4">
                    {Boolean(forthReport[filterfourth]?.sales?.sd_value) && isFinite(forthReport[filterfourth].sales.sd_value) && !isNaN(forthReport[filterfourth].sales.sd_value) ?
                      JSON.parse(forthReport[filterfourth].sales.sd_value.toFixed(2)) : 0}
                  </td>
                </tr>

                {/* Total - Fixed hydration error: Wrap in tr tags */}
                <tr>
                  <td className="py-2 px-4">Total</td>
                  <td className="py-2 px-4">
                    {calculateFifthTableTotal(forthReport, filterfourth, 'totalSpends')}
                  </td>
                  <td className="py-2 px-4">
                    {calculateFifthTableTotal(forthReport, filterfourth, 'totalSales')}
                  </td>
                  <td className="py-2 px-4">
                    {calculateFifthTableTotal(forthReport, filterfourth, 'acos')}
                  </td>
                  <td className="py-2 px-4">
                    {calculateFifthTableTotal(forthReport, filterfourth, 'spends')}
                  </td>
                  <td className="py-2 px-4">
                    {calculateFifthTableTotal(forthReport, filterfourth, 'sales')}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Add Campaign Quality Table */}
      <CampaignQualityTable Campaign={campaign} />

    </div>
  );
};

export default TableComponent;

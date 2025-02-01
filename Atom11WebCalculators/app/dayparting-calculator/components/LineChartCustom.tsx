import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { SummarizedData } from "../../types";
import formatNumberToUSStandard from "../utils/formatNumberToUSStandard";

interface LineChartCustomProps {
  data: SummarizedData[] | null;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function getACOSAndSpend(data: SummarizedData[]) {
  // Define all 24 hours of the day
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0") + ":00"
  );

  // Initialize arrays for ACOS and spend with 0s
  const totalACOS = Array(24).fill(0);
  const totalSpend = Array(24).fill(0);

  // Populate the arrays based on available data
  data.forEach((entry) => {
    const hourIndex = hours.indexOf(entry.StartTime); // Find the index of the hour
    if (hourIndex !== -1) {
      totalACOS[hourIndex] = entry.TotalACOS || 0; // Add ACOS, default to 0
      totalSpend[hourIndex] = entry.Spend || 0; // Add Spend, default to 0
    }
  });

  return [totalACOS, totalSpend];
}


const LineChartCustom: React.FC<LineChartCustomProps> = ({ data }) => {
  const [localdata, setlocaldata] = useState({
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "ACOS",
        data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        borderColor: "#1f77b4",
        backgroundColor: "rgba(31, 119, 180, 0.2)",
        yAxisID: "y",
      },
      {
        label: "Spend",
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        borderColor: "#2ca02c",
        backgroundColor: "rgba(44, 160, 44, 0.2)",
        yAxisID: "y1",
      },
    ],
  });

  useEffect(() => {
    if (data) {
      const x = getACOSAndSpend(data);
      setlocaldata({
        labels: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ],
        datasets: [
          {
            label: "ACOS",
            data: x[0],
            borderColor: "#1f77b4",
            backgroundColor: "rgba(31, 119, 180, 0.2)",
            yAxisID: "y",
          },
          {
            label: "Spend",
            data: x[1],
            borderColor: "#2ca02c",
            backgroundColor: "rgba(44, 160, 44, 0.2)",
            yAxisID: "y1",
          },
        ],
      })
    }
  }, [data])

  return (
    <div className="flex justify-center items-center p-4">
      <Line 
        data={localdata}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
              labels: {
                font: {
                  size: 16, // Increase legend size
                },
              },
            },
            title: {
              display: false,
              text: "",
            },
          },
          scales: {
            y: {
              type: "linear" as const,
              position: "left" as const,
              ticks: {
                callback: (value: any) => `${value}%`,
              },
            },
            y1: {
              type: "linear" as const,
              position: "right" as const,
              grid: {
                drawOnChartArea: false,
              },
              ticks: {
                callback: (value: any) => `${value}`,
              },
            },
          },
        }} 
      />
    </div>
  );
};

export default LineChartCustom;

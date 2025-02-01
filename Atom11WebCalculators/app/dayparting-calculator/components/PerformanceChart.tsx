// components/PerformanceChart.tsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { SummarizedData } from '../../types';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface PerformanceChartProps {
  data: SummarizedData[] | null;
}

function getSpendsAndACOS(d: SummarizedData[]) {
  const totalSpends: number[] = [];
  const avgACOS: number[] = [];

  const timeSlots = [
    { timeSlot: '00:00 - 03:59', range: ['00:00', '01:00', '02:00', '03:00'] },
    { timeSlot: '04:00 - 07:59', range: ['04:00', '05:00', '06:00', '07:00'] },
    { timeSlot: '08:00 - 11:59', range: ['08:00', '09:00', '10:00', '11:00'] },
    { timeSlot: '12:00 - 15:59', range: ['12:00', '13:00', '14:00', '15:00'] },
    { timeSlot: '16:00 - 19:59', range: ['16:00', '17:00', '18:00', '19:00'] },
    { timeSlot: '20:00 - 23:59', range: ['20:00', '21:00', '22:00', '23:00'] },
  ];

  const calculateTotalsForTimeSlots = (
    timeRange: string[],
    data: SummarizedData[]
  ): { spends: number; sales: number } => {
    return data.reduce(
      (totals, entry) => {
        if (timeRange.includes(entry.StartTime)) {
          totals.spends += entry.Spend || 0;
          totals.sales += entry.TotalSales || 0; // Ensure sales are used for ACOS
        }
        return totals;
      },
      { spends: 0, sales: 0 }
    );
  };

  timeSlots.forEach((slot) => {
    const { spends, sales } = calculateTotalsForTimeSlots(slot.range, d);
    totalSpends.push(spends);
    avgACOS.push(sales > 0 ? (spends / sales) * 100 : 0); // Avoid division by zero
  });

  return [totalSpends, avgACOS];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  const [localData, setLocalData] = useState<any>({
    labels: [
      '00:00 - 03:59',
      '04:00 - 07:59',
      '08:00 - 11:59',
      '12:00 - 15:59',
      '16:00 - 19:59',
      '20:00 - 23:59',
    ],
    datasets: [
      {
        type: 'line' as const,
        label: 'Average ACOS (%)',
        data: [50, 50, 50, 50, 50, 50],
        borderColor: '#10b981', // Green
        borderWidth: 2,
        fill: false,
        yAxisID: 'yACOS',
      },
      {
        type: 'line' as const,
        label: 'Total Spend',
        data: [30000, 90000, 15000, 80000, 20000, 50000],
        borderColor: '#fbbf24', // Yellow
        borderWidth: 2,
        fill: false,
        yAxisID: 'ySpend',
      },
    ],
  });

  useEffect(() => {
    if (data) {
      const [spends, acos] = getSpendsAndACOS(data);
      setLocalData({
        labels: [
          '00:00 - 03:59',
          '04:00 - 07:59',
          '08:00 - 11:59',
          '12:00 - 15:59',
          '16:00 - 19:59',
          '20:00 - 23:59',
        ],
        datasets: [
          {
            type: 'line' as const,
            label: 'Average ACOS (%)',
            data: acos,
            borderColor: '#10b981',
            borderWidth: 2,
            fill: false,
            yAxisID: 'yACOS',
          },
          {
            type: 'line' as const,
            label: 'Total Spend',
            data: spends,
            borderColor: '#fbbf24',
            borderWidth: 2,
            fill: false,
            yAxisID: 'ySpend',
          },
        ],
      });
    }
  }, [data]);

  const options = {
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
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Time Slot',
        },
      },
      ySpend: {
        type: 'linear' as const,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Spend',
        },
      },
      yACOS: {
        type: 'linear' as const,
        position: 'right' as const,
        title: {
          display: true,
          text: 'ACOS (%)',
        },
        grid: {
          drawOnChartArea: false, // Avoid grid overlap
        },
      },
    },
  };

  return <Line data={localData} options={options} />;
};

export default PerformanceChart;

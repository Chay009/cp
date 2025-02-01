// components/DaypartingTime.tsx
import React, { useEffect, useState } from 'react';
import { SummarizedData } from '../../types';
import formatNumberToUSStandard from '../utils/formatNumberToUSStandard';


interface DaypartingTimeProps {
  data: SummarizedData[] | null;
}

function getAvgData(d: SummarizedData[]) {
  // Define time slots you want to group the data into
  const timeSlots = [
    { timeSlot: '00:00 - 03:59', range: ['00:00', '01:00', '02:00', '03:00'] },
    { timeSlot: '04:00 - 07:59', range: ['04:00', '05:00', '06:00', '07:00'] },
    { timeSlot: '08:00 - 11:59', range: ['08:00', '09:00', '10:00', '11:00'] },
    { timeSlot: '12:00 - 15:59', range: ['12:00', '13:00', '14:00', '15:00'] },
    { timeSlot: '16:00 - 19:59', range: ['16:00', '17:00', '18:00', '19:00'] },
    { timeSlot: '20:00 - 23:59', range: ['20:00', '21:00', '22:00', '23:00'] },
  ];  

  // Function to calculate total clicks, spends, orders, and sales for a group of time slots
  const calculateTotalForTimeSlots = (timeRange: string[], data: SummarizedData[]): { clicks: number; spends: number; orders: number; sales: number } => {
    return data.reduce((totals, entry) => {
      if (timeRange.includes(entry.StartTime)) {
        totals.clicks += entry.Clicks || 0;
        totals.spends += entry.Spend || 0;
        totals.orders += entry.TotalOrders || 0;
        totals.sales += entry.TotalSales || 0; // Accumulate TotalSales
      }
      return totals;
    }, { clicks: 0, spends: 0, orders: 0, sales: 0 });
  };

  // Calculate totals and averages for each time range
  return timeSlots.map(timeSlot => {
    const { clicks, spends, orders, sales } = calculateTotalForTimeSlots(timeSlot.range, d);

    // Calculate average ACOS and CVR
    const avgACOS = sales > 0 ? (spends / sales) * 100 : 0;  // Correct ACOS = (Spend / Total Sales) * 100
    const avgCVR = clicks > 0 ? (orders / clicks) * 100 : 0; // CVR = (Orders / Clicks) * 100

    return {
      timeSlot: timeSlot.timeSlot,
      totalClicks: clicks,
      totalSpends: spends,
      avgACOS: avgACOS,
      avgCVR: avgCVR,
      totalOrders: orders,
    };
  });
}


const DaypartingTime: React.FC<DaypartingTimeProps> = ({ data }) => {

  const [localdata, setlocaldata] = useState<any>([
    {
      timeSlot: 'Morning (6 AM - 12 PM)',
      totalClicks: 0,
      totalSpends: 0,
      avgACOS: 0,
      avgCVR: 0,
      totalOrders: 0,
    },
    {
      timeSlot: 'Afternoon (12 PM - 6 PM)',
      totalClicks: 0,
      totalSpends: 0,
      avgACOS: 0,
      avgCVR: 0,
      totalOrders: 0,
    },
    {
      timeSlot: 'Evening (6 PM - 12 AM)',
      totalClicks: 0,
      totalSpends: 0,
      avgACOS: 0,
      avgCVR: 0,
      totalOrders: 0,
    },
    {
      timeSlot: 'Night (12 AM - 6 AM)',
      totalClicks: 0,
      totalSpends: 0,
      avgACOS: 0,
      avgCVR: 0,
      totalOrders: 0,
    },
  ]);

  useEffect(() => {
    if (data) {
      const x = getAvgData(data);
      setlocaldata(x)
    }
  }, [data])


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left table-auto border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Time Slots</th>
            <th className="px-4 py-2 border-b">Total Clicks</th>
            <th className="px-4 py-2 border-b">Total Spends</th>
            <th className="px-4 py-2 border-b">Total Orders</th>
            <th className="px-4 py-2 border-b">Avg. ACOS</th>
            <th className="px-4 py-2 border-b">Avg. CVR</th>
          </tr>
        </thead>
        <tbody>
          {localdata.map((item:any, index: number) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.timeSlot}</td>
              <td className="px-4 py-2">{formatNumberToUSStandard(item.totalClicks.toFixed(2))}</td>
              <td className="px-4 py-2">{formatNumberToUSStandard(item.totalSpends.toFixed(2))}</td>
              <td className="px-4 py-2">{formatNumberToUSStandard(item.totalOrders)}</td>
              <td className="px-4 py-2">{item.avgACOS.toFixed(2)}%</td>
              <td className="px-4 py-2">{item.avgCVR.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default DaypartingTime;

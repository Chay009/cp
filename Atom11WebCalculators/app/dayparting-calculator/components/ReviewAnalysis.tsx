// components/ReviewAnalysis.tsx
import React from 'react';
import { ReviewAnalysisProps } from '../../types';
import HeatMap from './Heatmap';
import PerformanceChart from './PerformanceChart';
import DaypartingTime from './DaypartingTime';
import LineChartCustom from './LineChartCustom';

const ReviewAnalysis: React.FC<ReviewAnalysisProps> = ({
  summarizedData,
  loading
}) => {
  return (
    <div>
      {
        loading ?
          <div className="flex flex-col items-center">
            <div className="simple-spinner"></div>
            <p className="text-blue-600 mt-4">Please wait while we upload your file</p>
          </div> :
          Boolean(summarizedData) ?
            <>
              <div className="min-h-screen px-4">
                <h1 className="text-2xl font-bold mb-4">Performance heatmap</h1>
                <p className="mb-6">
                  This section provides a visual representation of all the hourly campaign performance data. The heatmap is created in green to red colorscale, where green indicates better performance and red indicates bad performance. For ex. A low conversion or high ACOS event will be shown as red, while a high conversion and low ACOS event will be shown as green.
                </p>
                <div className="min-h-screen flex items-center justify-center">
                  <HeatMap data={summarizedData} />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-semibold mb-4">Campaign spend vs. ACOS (by hour)</h1>
                  <p className="mb-6">
                    This section provides a graphical representation of all spend vs. ACOS on hour by hour basis. This will help you identify hours where ACOS is high and spend is also high, necessitating the need for dayparting. Similarly, high performance time slots where ACOS is low and spend is high can be leveraged to increase sales by increasing spend. 
                  </p>
                  <LineChartCustom data={summarizedData} />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-semibold mb-4">Time Slot Summary</h1>
                  <p className="mb-6">In this section, we have divided all hours into 6 time slots. We have summarized key insights and grouped visualizations based on mid-night, morning, afternoon, evening, and night time slots. Instead of evaluating data for 24 hours, the time slot summary, reduces the data into 6 time slots for easier evaluation.</p>
                  <DaypartingTime data={summarizedData} />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-semibold mb-4">Campaign Spend vs. ACOS (by time slot)</h1>
                  <p className="mb-6">This section provides a graphical representation of spend vs. ACOS on time slot basis. This will help you identify time slots where ACOS is high and spend is also high, necessitating the need for dayparting. Similarly, high performance time slots where ACOS is low and spend is high can be leveraged to increase sales by increasing spend.</p>
                  <PerformanceChart data={summarizedData} />
                </div>
              </div>
            </>
            :
            <div className="flex flex-col items-center justify-center h-[40vh] w-full bg-gray-100 text-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-red-500">Action Required</h2>
              <p className="text-lg mb-6">Please upload a file and perform the analysis before viewing the results.</p>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-sm text-gray-600">You have not uploaded a file yet.</span>
                <span className="font-semibold text-sm text-gray-600">Upload is mandatory for results.</span>
              </div>
            </div>
      }

    </div>
  );
};

export default ReviewAnalysis;

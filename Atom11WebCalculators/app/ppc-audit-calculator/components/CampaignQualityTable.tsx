import React, { useState } from 'react';

interface CampaignQualityTableProps {
  Campaign: {
    Acos_more_than_30: any[];
    Acos_more_than_100: any[];
  };
}

const CampaignQualityTable: React.FC<CampaignQualityTableProps> = ({ Campaign }) => {
  const [acosFilter, setAcosFilter] = useState('30');

  // Filter options
  const filterOptions = [
    { value: '30', label: 'ACOS > 30%' },
    { value: '100', label: 'ACOS > 100%' }
  ];

  // Get filtered data based on selection
  const getFilteredData = () => {
    return acosFilter === '100' ? Campaign.Acos_more_than_100 : Campaign.Acos_more_than_30;
  };

  let filteredData = getFilteredData();
  // filteredData=filteredData.concat(filteredData);
  // filteredData=filteredData.concat(filteredData);
  // filteredData=filteredData.concat(filteredData);

  return (
    <div>
      <h2 className="font-semibold text-[16px] leading-[24px] text-[#64748B] pt-4 pb-2">
        Campaign Quality Analysis
      </h2>
      <div className="items-center mb-4">
        <label className="exclude-from-pdf font-semibold mr-2">Filter by ACOS:</label>
        <select
          className="exclude-from-pdf mb-2 px-4 py-2 border border-gray-300 rounded"
          onChange={(e) => setAcosFilter(e.target.value)}
          value={acosFilter}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto w-full mb-6 max-h-[400px] overflow-y-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead className="sticky top-0 bg-[#FEF6FF]">
            <tr className="border-b">
              <th className="py-2 px-4">Campaign Name</th>
              <th className="py-2 px-4">Total Spends</th>
              <th className="py-2 px-4">Ad Sales</th>
              <th className="py-2 px-4">ACOS %</th>
              <th className="py-2 px-4">Conversion Rate %</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((campaign, index) => (
              <tr 
                key={`acos-${index}`} 
                className={`border-b ${acosFilter === '100' ? 'bg-red-50' : ''}`}
              > 
                <td className="py-2 px-4">{campaign.campaignname}</td>
                <td className="py-2 px-4">{campaign.spend.toFixed(2)}</td>
                <td className="py-2 px-4">{campaign.sales.toFixed(2)}</td>
                <td className={`py-2 px-4 ${acosFilter === '100' ? 'text-red-600' : 'text-purple-600'}`}>
                  {(campaign.acos * 100).toFixed(2)}%
                </td>
                <td className="py-2 px-4">
                  {(campaign.conversionrate * 100).toFixed(2)}%
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
                  No campaigns found for selected filter
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignQualityTable; 
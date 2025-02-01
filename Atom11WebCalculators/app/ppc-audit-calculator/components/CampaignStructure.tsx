// kpm: new Decimal(0),
// adpm: new Decimal(0),
// campaigns_with_no_negative_keywords: new Decimal(0),
// },


import React from "react";
import InfoModal from "./InfoModal";

const CampaignStructure: React.FC<any> = ({ formulaResults }) => {
  console.log(formulaResults,"ccc")
  const {Campaign}=formulaResults;
  
      console.log(Campaign.Campaigns_without_negative_keywords,"with negative keywords")
    
  const [isBidStrategyModalOpen, setIsBidStrategyModalOpen] = React.useState(false);
  const [isNegativeKeywordsModalOpen, setIsNegativeKeywordsModalOpen] = React.useState(false);

  // to test the scrollbar if more details are present
  // Campaign.Bidding_details=Campaign.Bidding_details.concat(Campaign.Bidding_details);
  return (
   
    <div className="p-6">
      {/* Campaign Structure Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">SP Ads Campaign Structure</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-400">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1 0H2.9C1.3 0 0 1.3 0 2.9V17.1C0 18.7 1.3 20 2.9 20H17.1C18.7 20 20 18.7 20 17.1V2.9C20 1.3 18.7 0 17.1 0ZM6 15H4V7H6V15ZM11 15H9V4H11V15ZM16 15H14V10H16V15Z" fill="#AD6D00"/>
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[18px] text-[#64748B] ml-2 break-words">
              Keywords per campaign
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-yellow-600">
                {Campaign.CampaignDetails['kpc'].toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-400">
          <div className="flex items-center">
            <div className="bg-[#FCDCE1] p-3 pl-2.5 pr-2.5 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4H21C21.55 4 22 4.45 22 5V6C22 6.55 21.55 7 21 7H7V4ZM2 2C1.45 2 1 2.45 1 3V4C1 4.55 1.45 5 2 5H6V7H2C0.89 7 0 7.89 0 9V20C0 21.1 0.89 22 2 22H20C21.1 22 22 21.1 22 20V9C22 7.89 21.1 7 20 7H8L6 2H2ZM2 9H20V20H2V9Z" fill="#580815"/>
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              Product ads per campaign
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-red-600">
                {Campaign.CampaignDetails['adpc'].toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-400 cursor-pointer"
          onClick={() => setIsBidStrategyModalOpen(true)}>
          <div className="flex items-center">
            <div className="bg-[#DDF1FF] p-3 pl-2.5 pr-2.5 rounded-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L20 10L10 20L0 10L10 0ZM10 3.515L3.515 10L10 16.485L16.485 10L10 3.515ZM10 6.5C11.93 6.5 13.5 8.07 13.5 10C13.5 11.93 11.93 13.5 10 13.5C8.07 13.5 6.5 11.93 6.5 10C6.5 8.07 8.07 6.5 10 6.5Z" fill="#007CD7"/>
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
             Campaigns with bid strategy up and down
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-inter font-semibold text-[20px] leading-[30px] text-blue-600">
              {Campaign.CampaignDetails['campaigns_With_up_down_strategy'].toFixed(2)}
            </p>
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 2l6 16 2-7 7-2L3 2z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-400 cursor-pointer"
          onClick={() => setIsNegativeKeywordsModalOpen(true)}>
          <div className="flex items-start">
            <div className="bg-[#D6FFF1] p-2.5 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H5V9H15V11Z" fill="#00583B"/>
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[18px] text-[#64748B] ml-2 break-words">
              Campaigns with no negative keywords
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-inter font-semibold text-[20px] leading-[30px] text-green-600">
              {Campaign.CampaignDetails['campaigns_with_no_negative_keywords'].toFixed(2)}
            </p>
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 2l6 16 2-7 7-2L3 2z" />
            </svg>
          </div>
        </div>
      </div>


      <InfoModal
        isOpen={isBidStrategyModalOpen}
        onClose={() => setIsBidStrategyModalOpen(false)}
        title="Bid Strategy Details"
      >
        <div className="overflow-x-auto w-full mb-6 max-h-[400px] overflow-y-auto">
          {Campaign.Bidding_details && Campaign.Bidding_details.length > 0 ? (
            <table className="w-full min-w-[800px] table-auto text-left border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-[#FEF6FF]">
                <tr className="border-b">
                  <th className="py-2 px-4">Campaign Name</th>
                  <th className="py-2 px-4">Spend</th>
                  <th className="py-2 px-4">Sales</th>
                  <th className="py-2 px-4">ACOS %</th>
                  <th className="py-2 px-4">Conversion Rate %</th>
                </tr>
              </thead>
              <tbody>
                {Campaign.Bidding_details.map((campaign, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{campaign.campaignname}</td>
                    <td className="py-2 px-4">{campaign.spend.toFixed(2)}</td>
                    <td className="py-2 px-4">{campaign.sales.toFixed(2)}</td>
                    <td className="py-2 px-4 text-purple-600">{(campaign.acos * 100).toFixed(2)}%</td>
                    <td className="py-2 px-4 text-orange-600">{(campaign.conversionrate * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center p-6 text-gray-600">
              No bid strategy details available
            </div>
          )}
        </div>
      </InfoModal>

      <InfoModal
        isOpen={isNegativeKeywordsModalOpen}
        onClose={() => setIsNegativeKeywordsModalOpen(false)}
        title="Campaigns Without Negative Keywords"
        
      >
        <div className="overflow-x-auto w-full mb-6 max-h-[400px] overflow-y-auto">
          {Campaign.Campaigns_without_negative_keywords && Campaign.Campaigns_without_negative_keywords.length > 0 ? (
            <table className="w-full min-w-[800px] table-auto text-left border-collapse border border-gray-300">
              <thead className="sticky top-0 bg-[#FEF6FF]">
                <tr className="border-b">
                  <th className="py-2 px-4">Campaign Name</th>
                  <th className="py-2 px-4">Spend</th>
                  <th className="py-2 px-4">Sales</th>
                  <th className="py-2 px-4">ACOS %</th>
                  <th className="py-2 px-4">Conversion Rate %</th>
                </tr>
              </thead>
              <tbody>
                {Campaign.Campaigns_without_negative_keywords.map((campaign, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{campaign.campaignname}</td>
                    <td className="py-2 px-4">{campaign.spend.toFixed(2)}</td>
                    <td className="py-2 px-4">{campaign.sales.toFixed(2)}</td>
                    <td className="py-2 px-4 text-purple-600">{(campaign.acos * 100).toFixed(2)}%</td>
                    <td className="py-2 px-4 text-orange-600">{(campaign.conversionrate * 100).toFixed(2)}%</td>
                  </tr>
                ))}

                {Campaign.Campaigns_without_negative_keywords.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
                      All campaigns have negative keywords
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            <div className="text-center p-6 text-gray-600">
              All campaigns have negative keywords
            </div>
          )}
        </div>
      </InfoModal>

     

   
    </div>
  );
};

export default CampaignStructure;

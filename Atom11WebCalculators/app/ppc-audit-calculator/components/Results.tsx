// components/Results.tsx
import React, { useState } from 'react';
import { ResultsScreenProps } from '../../types';
import TableComponent from './TableComponent';
import Metrics from './Metrics';
import exportToExcel from '../utils/exportToExcel';
import CampaignStructure from './CampaignStructure';


const Results: React.FC<ResultsScreenProps> = ({
  firstReport,
  secReport,
  thirdReport,
  forthReport,
  formulaResults,
  handleReUploadfile
}) => {

  const [filterfourth, setFilterfourth] = useState('brandA');
  const [filterthird, setFilterthird] = useState('total');

  const handleExport = () => {
    exportToExcel(
      firstReport,
      secReport,
      thirdReport,
      forthReport,
      filterthird,
      filterfourth
    )
  };

  const handleShareLinkedin = () => {
    const shareText = encodeURIComponent(
      `I just audited an Amazon Ads account using Atom11's free Amazon Ads calculator. It is amazing - it breaks down everything you need to audit an account. AT ZERO COST. They are adding more free features to this calculator, as we speak. 

Check it out here: https://calculator.atom11.co/ppc-audit-calculator`
    );
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${shareText}`;

    window.open(linkedinUrl, "_blank");
  }

  return (
    <div>
      {Boolean(firstReport) ?
        <>
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-2">
            <button onClick={handleReUploadfile} className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition duration-200">
                Clear All
              </button>
              <button onClick={handleExport} className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition duration-200">
                Export
                <div className='pl-2 inline-block'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="#2563eb" />
                  </svg>
                </div>
              </button>
             <button onClick={handleShareLinkedin} className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition duration-200">
                Share
                <svg width="20px" height="20px" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2563eb">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier"> <path d="M9.61109 12.4L10.8183 18.5355C11.0462 19.6939 12.6026 19.9244 13.1565 18.8818L19.0211 7.84263C19.248 7.41555 19.2006 6.94354 18.9737 6.58417M9.61109 12.4L5.22642 8.15534C4.41653 7.37131 4.97155 6 6.09877 6H17.9135C18.3758 6 18.7568 6.24061 18.9737 6.58417M9.61109 12.4L18.9737 6.58417M19.0555 6.53333L18.9737 6.58417" stroke="#2563eb" strokeWidth="2" /> </g>
                </svg>
              </button>
            </div>
          </div>
          <>
            <Metrics
              firstReport={firstReport}
            />
             <CampaignStructure
            formulaResults={formulaResults}/>

            <TableComponent
              firstReport={firstReport}
              secReport={secReport}
              thirdReport={thirdReport}
              forthReport={forthReport}
              filterfourth={filterfourth}
              setFilterfourth={setFilterfourth}
              filterthird={filterthird}
              setFilterthird={setFilterthird}
              campaign={formulaResults.Campaign}
            />
          </>
        </>
        :
        <h2 className="text-xl font-bold text-gray-800 mb-6">Please add file and perform analysis.</h2>
      }

    </div>
  );
};

export default Results;

import { useEffect, useState } from 'react';
import Results from './Results';
import FileUpload from './FileUpload';
import { useProcess } from './ProcessContext';
import processReport from '../utils/processReport';

export default function Tabs() {
  const { 
    setFile, 
    response, 
    setResponse, 
    loading, 
    setLoading, 
    bulkFile, 
    setBulkFile, 
    businessReportFile, 
    setBusinessReportFile 
  } = useProcess();
  
  const [activeTab, setActiveTab] = useState('UploadFile');
 
  const handleProcessData = async () => {
    if (!businessReportFile || !bulkFile) {
      alert("Please upload both required files.");
      return;
    }
  
    setLoading(true);
    setResponse(null);
  
    try {
      // Call the processReport function with both files
      const analysis: any = await processReport(businessReportFile, bulkFile);
      
      // Set the response with the processed analysis
      setResponse(analysis);
    } catch (error) {
      console.error("Error processing data:", error);
      alert("Failed to process files, Try Again!");
    } finally {
      setLoading(false);
    }
  };
  
  const reUpload = () => {
    const confirmReUpload = window.confirm("Warning: You will lose your current data if you proceed with re-upload. Do you want to continue?");
    if (confirmReUpload) {
      setResponse(null);
      setFile(null);
      setBusinessReportFile(null);
      setBulkFile(null);
      setActiveTab("UploadFile");
    }
  }

  useEffect(() => {
    if (response && activeTab === "UploadFile") {
      setActiveTab("Results");
    }
  }, [response]);

  return (
    <div className="p-8 ">
      <h2 className="text-2xl font-bold mb-6">Amazon PPC Spend Audit Calculator</h2>
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${activeTab === 'UploadFile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('UploadFile')}
          >
            Upload your files
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'Results' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Results')}
          >
            Results
          </button>
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === 'UploadFile' &&
          <FileUpload
            handleProcessData={handleProcessData}
            loading={loading}
            setBulkFile={setBulkFile}
            bulkFile={bulkFile}
            setBusinessReportFile={setBusinessReportFile}
            businessReportFile={businessReportFile}
          />
        }
        {activeTab === 'Results' &&
          <Results
            firstReport= {response?.firstReport ? response?.firstReport : null}
            secReport={response?.secReport ? response?.secReport : null}
            thirdReport={response?.thirdReport ? response?.thirdReport : null}  
            forthReport={response?.forthReport ? response?.forthReport : null}
            handleReUploadfile={reUpload}
            formulaResults={response?.formulaResults ? response?.formulaResults : null}
          />
        }
      </div>
    </div>
  );
}

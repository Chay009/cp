import { useState } from 'react';
import FileUpload from './FileUpload';
import { useProcess } from './ProcessContext';
import parseExcelFile from '../utils/parseExcelFile';
import BasicCalculatorComponent from './BasicCalculatorComponent';
import exportToExcel from '../utils/exportToExcel';

export default function Tabs() {
  const { 
    setFile, 
    loading, 
    setLoading, 
    file
  } = useProcess();
  
  const [activeTab, setActiveTab] = useState('BasicCalculator');

  const handleProcessData = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const analysis: any = await parseExcelFile(file);
      exportToExcel(analysis)
      setActiveTab('UploadFile')
      return;
    } catch (error) {
      console.error("Error processing data:", error);
      alert("Failed to process file, Try Again!");
    } finally {
      setLoading(false);
    }
  };
  
  const reUpload = () => {
    setFile(null);
    setActiveTab("UploadFile");
  }

  return (
    <div className="p-8 ">
      <h2 className="text-2xl font-bold mb-6">Real Bid Calculator</h2>
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${activeTab === 'BasicCalculator' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('BasicCalculator')}
          >
            Real Bid Calculator
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'UploadFile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('UploadFile')}
          >
            Upload your files
          </button>
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === "BasicCalculator" &&
          <BasicCalculatorComponent
            setActiveTab={setActiveTab}
          />
        }
        {activeTab === 'UploadFile' &&
          <FileUpload
            handleProcessData={handleProcessData}
            loading={loading}
            handleUploadFile={setFile}
            file={file}
            handleReUploadfile={reUpload}
          />
        }
      </div>
    </div>
  );
}

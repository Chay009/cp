import { useEffect, useState } from 'react';
import Results from './Results';
import FileUpload from './FileUpload';
import { useProcess } from './ProcessContext';
import exportToPDF from '../utils/exportToPDF';
import ReviewAnalysis from './ReviewAnalysis';
import parseCSVFile from '../utils/summarizeData';
import bestAndWorstHours from '../utils/bestAndWorstHours';

export default function Tabs() {
  const { file, setFile, response, setResponse, loading, setLoading, setSummarizedData, summarizedData, email, setEmail, emailSubmitted, setEmailSubmitted } = useProcess();
  const [activeTab, setActiveTab] = useState('UploadFile');

  const handleFileUpload = (uploadedFile: File) => {
    if (!uploadedFile) return;
    if (!uploadedFile.name.endsWith(".csv")) {
      alert("Please upload a valid CSV file.");
      return;
    }
    setFile(uploadedFile);
  };

  const handleProcessData = async () => {
    if (!file) return;

    setLoading(true);
    setResponse(null);

    try {
      const sumraziedData = await parseCSVFile(file);
      if (!sumraziedData) {
        alert("Failed to upload file, Try Again!")
        return;
      }
      setSummarizedData(sumraziedData)
      const resultResponse = bestAndWorstHours(sumraziedData)
      
      setResponse(resultResponse);
    } catch (error) {
      console.error("Error processing data:", error);
      alert("Failed to upload file, Try Again!")
    } finally {
      setLoading(false);
    }
  };

  const reUpload = () => {
    const confirmReUpload = window.confirm("Warning: You will lose your previous data if you proceed with re-upload. Do you want to continue?");
    if (confirmReUpload) {
      setActiveTab("UploadFile");
      setResponse(null);
      setFile(null);
    }
  }

  const handleShareLinkedin = () => {
    const shareText = encodeURIComponent(
      `🚀 Optimize Your Ad Campaigns with Dayparting Insights!
  
  Have you ever wondered when your advertising budget delivers the best ROI? 🕒 Using data-driven dayparting analysis, we uncovered key performance trends like:  
  
  ✅ Peak Spend Hours: Maximizing impressions and visibility.  
  ✅ Optimal ACOS (%): Achieving efficient ad spend for better returns.  
  
  📊 With visualized insights, you can now allocate your budget smarter, reduce waste, and amplify results during high-performance hours.  
  
  Data isn't just numbers—it's the key to unlocking smarter strategies. Let’s redefine how campaigns perform!  
  
  Curious about the process or want to know more? Let's connect and discuss how dayparting can transform your advertising strategy!  
  
  #DataDrivenMarketing #Dayparting #AdvertisingInsights #ACOSOptimization #DigitalMarketing
  
  Check it out here: https://calculator.atom11.co/dayparting-calculator`
    );
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${shareText}`;

    window.open(linkedinUrl, "_blank");
  };

  useEffect(() => {
    if (response && activeTab == "UploadFile") {
      setActiveTab("Review");
    }
  }, [response]);

  return (
    <div className="p-8 ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Dayparting Calculator</h2>
        <button
          onClick={handleShareLinkedin}
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
        >
          Share
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M9.61109 12.4L10.8183 18.5355C11.0462 19.6939 12.6026 19.9244 13.1565 18.8818L19.0211 7.84263C19.248 7.41555 19.2006 6.94354 18.9737 6.58417M9.61109 12.4L5.22642 8.15534C4.41653 7.37131 4.97155 6 6.09877 6H17.9135C18.3758 6 18.7568 6.24061 18.9737 6.58417M9.61109 12.4L18.9737 6.58417M19.0555 6.53333L18.9737 6.58417"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 ${
              activeTab === 'UploadFile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('UploadFile')}
          >
            Upload your CSV file
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'Review' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Review')}
          >
            Review Analysis
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'Results' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Results')}
          >
            Results and Recommendations
          </button>
        </nav>
      </div>
      <div className="mt-4">
        {activeTab === 'UploadFile' && 
          <FileUpload handleProcessData={handleProcessData} handleUploadFile={handleFileUpload} file={file} loading={loading} />
        }
        {activeTab === 'Review' && 
          <ReviewAnalysis summarizedData={summarizedData} loading={loading} />
        }
        {activeTab === 'Results' && 
          <Results
            bestTimeSlots={response?.bestTimeSlots || { label: "", timeRanges: [], reason: "" }}
            worstTimeSlots={response?.worstTimeSlots || { label: "", timeRanges: [], reason: "" }}
            recommendations={response?.recommendations || []}
            handleReUploadfile={()=> reUpload()}
            handleExportData={()=>exportToPDF(response)}
            loading={loading}
            email={email}
            setEmail={setEmail}
            emailSubmitted={emailSubmitted}
            setEmailSubmitted={setEmailSubmitted}
          />
        }
      </div>
    </div>
  );
}

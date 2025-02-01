import React, { useCallback } from 'react';
import { FileUploadBidProps } from '../../types';

const FileUpload: React.FC<FileUploadBidProps> = ({ handleProcessData, handleUploadFile, file, loading, handleReUploadfile }) => {

  // Handle file upload from input
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    // Validate file type
    if (!uploadedFile.name.endsWith('.csv') && !uploadedFile.name.endsWith('.xlsx')) {
      alert('Please upload a valid CSV or XLSX file.');
      return;
    }

    handleUploadFile(uploadedFile);
  };

  // Handle file upload from drag-and-drop
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];

    if (!uploadedFile) return;

    // Validate file type
    if (!uploadedFile.name.endsWith('.csv') && !uploadedFile.name.endsWith('.xlsx')) {
      alert('Please upload a valid CSV or XLSX file.');
      return;
    }

    handleUploadFile(uploadedFile);
  }, [handleUploadFile]);

  // Prevent default drag behaviors
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };
  

  return (
    <div className="bg-white">
      <div>
        <ul className="list-disc list-inside text-gray-700 mb-4 leading-8">
          <li>
            Upload your Bulk report in the second block. Bulk report can be found here:
            <h2 className="font-bold ml-6">
              <a
                href="https://advertising.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Amazon Ad Campaign Manager
              </a>
              {" "}&gt; Sponsored Ads &gt; Bulk Operations &gt; Select Date Range &gt; Download
            </h2>
          </li>
          <li>Click on Proceed to generate results.</li>
        </ul>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver} // Prevent default drag behavior
        >
          {
            !loading ?
              <>
                <p className="text-gray-500 mb-2">Drag & drop your documents or</p>

                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    accept=".csv, .xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex cursor-pointer bg-blue-500 text-white font-bold px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-blue-700"
                  >
                    Upload File
                  </label>
                  {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
                </div>
                <p className="text-gray-400 text-sm mt-2">(.csv, .xlsx | Max 10 MB)</p>
              </>
              :
              <div className="flex flex-col items-center">
                <div className="simple-spinner"></div>
                <p className="text-blue-600 mt-4">Please wait while we upload your file</p>
              </div>
          }
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleProcessData}
            disabled={!file || loading}
            className={`py-2 px-4 m-2 rounded-md ${!file || loading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium`}
          >
            {loading ? 'Processing...' : 'Download'}
          </button>
          {file && (
            <button
              onClick={handleReUploadfile}
              className="py-2 px-4 m-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition duration-200"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

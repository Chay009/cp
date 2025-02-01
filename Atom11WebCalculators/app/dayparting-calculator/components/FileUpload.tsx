import React, { useCallback } from 'react';
import { FileUploadDayPartingProps } from '../../types';

const FileUpload: React.FC<FileUploadDayPartingProps> = ({ handleProcessData, handleUploadFile, file, loading }) => {

  // Handle file upload from input
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    // Validate file type
    if (!uploadedFile.name.endsWith('.csv')) {
      alert('Please upload a valid CSV file.');
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
    if (!uploadedFile.name.endsWith('.csv')) {
      alert('Please upload a valid CSV file.');
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
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            This is a Dayparting Analytics Calculator Upload your Sponsored Campaigns hourly data file and analyze dayparting like a pro!
          </p>
          <h3 className="text-gray-700 font-semibold mb-2">
            Where to find the Sponsored Campaigns hourly data file:
          </h3>
          <ul className="list-decimal list-inside text-gray-700 leading-7">
            <li>
              <span className="font-medium">Step 1:</span> Sign into your
              <a
                href="https://advertising.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-bold ml-1"
              >
                Amazon Advertising Console.
              </a>
            </li>
            <li>
              <span className="font-medium">Step 2:</span> Navigate to
              <strong> Measurements and Reporting &gt; Sponsored Ad Reports</strong>.
            </li>
            <li>
              <span className="font-medium">Step 3:</span> Click on the
              <strong>“Create Report” button &gt; Sponsored Products &gt; Campaigns &gt; Hourly</strong>.
            </li>
            <li>
              <span className="font-medium">Step 4:</span> Select your desired date range and click
              <strong> Download</strong>.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Finally, click on <strong>Proceed</strong> to view results.
          </p>
        </div>


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
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex cursor-pointer bg-blue-500 text-white font-bold px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-blue-700"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <mask id="mask0_2776_15963" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="5" y="5" width="37" height="36">
                        <rect x="5.5" y="5" width="36" height="36" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2776_15963)">
                        <path
                          d="M23.5 29.0001C23.075 29.0001 22.7188 28.8563 22.4312 28.5688C22.1438 28.2813 22 27.9251 22 27.5001V16.7751L19.1875 19.5876C18.8875 19.8876 18.5375 20.0376 18.1375 20.0376C17.7375 20.0376 17.375 19.8751 17.05 19.5501C16.75 19.2501 16.6063 18.8938 16.6188 18.4813C16.6313 18.0688 16.775 17.7251 17.05 17.4501L22.45 12.0501C22.6 11.9001 22.7625 11.7938 22.9375 11.7313C23.1125 11.6688 23.3 11.6376 23.5 11.6376C23.7 11.6376 23.8875 11.6688 24.0625 11.7313C24.2375 11.7938 24.4 11.9001 24.55 12.0501L29.95 17.4501C30.25 17.7501 30.3938 18.1063 30.3813 18.5188C30.3688 18.9313 30.225 19.2751 29.95 19.5501C29.65 19.8501 29.2938 20.0063 28.8813 20.0188C28.4688 20.0313 28.1125 19.8876 27.8125 19.5876L25 16.7751V27.5001C25 27.9251 24.8563 28.2813 24.5688 28.5688C24.2813 28.8563 23.925 29.0001 23.5 29.0001ZM14.5 35.0001C13.675 35.0001 12.9688 34.7063 12.3813 34.1188C11.7938 33.5313 11.5 32.8251 11.5 32.0001V29.0001C11.5 28.5751 11.6437 28.2188 11.9312 27.9313C12.2188 27.6438 12.575 27.5001 13 27.5001C13.425 27.5001 13.7812 27.6438 14.0687 27.9313C14.3563 28.2188 14.5 28.5751 14.5 29.0001V32.0001H32.5V29.0001C32.5 28.5751 32.6438 28.2188 32.9313 27.9313C33.2188 27.6438 33.575 27.5001 34 27.5001C34.425 27.5001 34.7812 27.6438 35.0688 27.9313C35.3563 28.2188 35.5 28.5751 35.5 29.0001V32.0001C35.5 32.8251 35.2063 33.5313 34.6188 34.1188C34.0312 34.7063 33.325 35.0001 32.5 35.0001H14.5Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    Upload File
                  </label>
                  {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
                </div>
                <p className="text-gray-400 text-sm mt-2">(.csv | Max 10 MB)</p>
              </>
              :
              <div className="flex flex-col items-center">
                <div className="simple-spinner"></div>
                <p className="text-blue-600 mt-4">Please wait while we upload your file</p>
              </div>
          }
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleProcessData}
            disabled={!file || loading}
            className={`mt-6 py-2 px-4 rounded-md ${!file || loading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium`}
          >
            {loading ? 'Processing...' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

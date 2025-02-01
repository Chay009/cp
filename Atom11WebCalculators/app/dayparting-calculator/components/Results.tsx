// components/Results.tsx
import React from 'react';
import { ResultsScreenDayPartingProps } from '../../types';

const Results: React.FC<ResultsScreenDayPartingProps> = ({
  // bestDaySlots,
  // worstDaySlots,
  bestTimeSlots,
  worstTimeSlots,
  recommendations,
  handleExportData,
  handleReUploadfile,
  loading,
  email,
  setEmail,
  emailSubmitted,
  setEmailSubmitted
}) => {

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(e.currentTarget);

    // Convert FormData to URLSearchParams for easier submission
    const data = new URLSearchParams(formData as any);

    if (email && emailRegex.test(email)) {
      try {
        await fetch("https://submit-form.com/ztWvONjoV", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        }).then(() => {
          // alert("Email submitted successfully!");
          setEmailSubmitted(true);
          setEmail(""); // Clear the email input
        }).catch(() => {
          setEmailSubmitted(true);
          setEmail(""); // Clear the email input
        })
      } catch (error) {
        console.error("Error submitting email:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (

    <div>
      {loading ?
        <div className="flex flex-col items-center">
          <div className="simple-spinner"></div>
          <p className="text-blue-600 mt-4">Please wait while we upload your file</p>
        </div>
        :
        Boolean(recommendations.length != 0) ?
          <div>
            {!emailSubmitted ? (
              <div className="flex justify-center items-center py-8">
                <form
                  className="flex flex-col items-center max-w-md w-full bg-white p-6"
                  onSubmit={handleEmailSubmit}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Enter your email to proceed
                  </h2>
                  <p className="text-sm text-gray-600 mb-6 text-center">
                    Please enter your email to access the results section. In this section, you will find a recommendation on peak and low performing hours
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </form>
              </div>

            ) : (
              <div>
                <div className="flex justify-between items-center py-4">
                  <h2 className="text-lg font-semibold text-gray-800">Summary</h2>

                  <div className="flex space-x-2">
                    <button onClick={handleExportData} className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
                      Export
                      <div className='pl-2'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="white" />
                        </svg>
                      </div>
                    </button>
                    <button onClick={handleReUploadfile} className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition duration-200">
                      Clear All
                    </button>
                  </div>
                </div>
                {/* Days in Weeks Analysis */}

                {/* <div className="mb-8">
                  <h3 className="text-m font-semibold text-gray-500 mb-4">Days in Weeks Analysis</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2 p-2">
                        <div className='bg-[#DEE5FD] p-2 rounded-3xl'>
                          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="#0B34C5" />

                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-600">{bestDaySlots.label}</h4>
                      </div>
                      <p className="text-gray-600 mb-2 p-2">{bestDaySlots.reason}</p>
                      <div className="border-t border-gray-200 p-2" />
                      <p className="text-gray-800 font-medium p-2">{bestDaySlots.dayRanges.join(', ')}</p>
                    </div>
                    <div className="border p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2 p-2">
                        <div className='bg-[#FCDCE1] p-2 rounded-3xl'>
                          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.7 16.7L5.3 15.3L7.6 13L5.3 10.7L6.7 9.3L9 11.6L11.3 9.3L12.7 10.7L10.4 13L12.7 15.3L11.3 16.7L9 14.4L6.7 16.7ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z" fill="#CD1230" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-600 mb-2 p-2">{worstDaySlots.label}</h4>
                      </div>
                      <p className="text-gray-600 p-2 mb-2">{worstDaySlots.reason}</p>
                      <div className="border-t border-gray-200 p-2" />
                      <p className="text-gray-800 font-medium p-2">{worstDaySlots.dayRanges.join(', ')}</p>
                    </div>
                  </div>
                </div> */}

                {/* Time Slots Analysis */}
                <div className="mb-8">
                  <h3 className="text-m font-semibold text-gray-500 mb-4">Time Slots Analysis</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2 p-2">
                        <div className='bg-[#DEE5FD] p-2 rounded-3xl'>
                          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18H12V15C12 13.9 11.6083 12.9583 10.825 12.175C10.0417 11.3917 9.1 11 8 11C6.9 11 5.95833 11.3917 5.175 12.175C4.39167 12.9583 4 13.9 4 15V18ZM8 9C9.1 9 10.0417 8.60833 10.825 7.825C11.6083 7.04167 12 6.1 12 5V2H4V5C4 6.1 4.39167 7.04167 5.175 7.825C5.95833 8.60833 6.9 9 8 9ZM0 20V18H2V15C2 13.9833 2.2375 13.0292 2.7125 12.1375C3.1875 11.2458 3.85 10.5333 4.7 10C3.85 9.46667 3.1875 8.75417 2.7125 7.8625C2.2375 6.97083 2 6.01667 2 5V2H0V0H16V2H14V5C14 6.01667 13.7625 6.97083 13.2875 7.8625C12.8125 8.75417 12.15 9.46667 11.3 10C12.15 10.5333 12.8125 11.2458 13.2875 12.1375C13.7625 13.0292 14 13.9833 14 15V18H16V20H0Z" fill="#0B34C5" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-600 p-2 mb-2">{bestTimeSlots.label}</h4>
                      </div>
                      <p className="text-gray-600 p-2 mb-2">{bestTimeSlots.reason}</p>
                      <div className="border-t border-gray-200 p-2" />
                      <p className="text-gray-800 p-2 font-medium ">{bestTimeSlots.timeRanges.join(', ')}</p>
                    </div>
                    <div className="border p-4 rounded-md">
                      <div className="flex items-center space-x-2 mb-2 p-2">
                        <div className='bg-[#FCDCE1] p-2 rounded-3xl'>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4748 21.3L19.1748 20H3.9998V18H5.9998V15C5.9998 13.9833 6.2373 13.0292 6.7123 12.1375C7.1873 11.2458 7.84981 10.5333 8.69981 10C8.16647 9.66667 7.7123 9.26667 7.3373 8.8C6.9623 8.33333 6.65814 7.81667 6.4248 7.25L0.674805 1.5L2.0998 0.075L21.8998 19.875L20.4748 21.3ZM15.0498 10.15L13.5498 8.675C14.2998 8.35833 14.8956 7.86667 15.3373 7.2C15.779 6.53333 15.9998 5.8 15.9998 5V2H7.9998V3.125L4.8748 0H19.9998V2H17.9998V5C17.9998 6.06667 17.7415 7.05833 17.2248 7.975C16.7081 8.89167 15.9831 9.61667 15.0498 10.15ZM7.9998 18H15.9998V16.825L10.4748 11.3C9.7248 11.6167 9.1248 12.1083 8.6748 12.775C8.2248 13.4417 7.9998 14.1833 7.9998 15V18Z" fill="#CD1230" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-600 mb-2 p-2">{worstTimeSlots.label}</h4>
                      </div>
                      <p className="text-gray-600 mb-2 p-2">{worstTimeSlots.reason}</p>
                      <div className="border-t border-gray-200 p-2" />
                      <p className="text-gray-800 font-medium p-2">{worstTimeSlots.timeRanges.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations & Reasonings */}
                <div>
                  <h3 className="text-m font-semibold text-gray-500 mb-4">Recommendations & Reasonings</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendations.map((recommendation, index) => (
                      <div key={index} className="bg-[#F4F6FE] p-4 rounded-md">
                        <h4 className="text-lg font-semibold text-gray-600 mb-2 p-2">{recommendation.heading}</h4>
                        <p className="text-gray-600 mb-2 p-2">{recommendation.description}</p>
                        <div className="border-t border-gray-200 p-2" />
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-gray-800 font-semibold">Hour Range</th>
                              <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-gray-800 font-semibold">Multiplier</th>
                              <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-gray-800 font-semibold">Performance Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={index}>
                              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                                {recommendation.timeRanges.join(", ")}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                                {recommendation.multiplier}
                              </td>
                              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                                {(recommendation.performanceScore * 100).toFixed(2)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
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

export default Results;

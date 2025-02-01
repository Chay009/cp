import React from "react";

const Metrics: React.FC<any> = ({ firstReport }) => {
  console.log(firstReport,"firstReport");
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {/* Ad Sales */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-400">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4H14C14.55 4 15.0208 4.19583 15.4125 4.5875C15.8042 4.97917 16 5.45 16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM2 18H14V6H12V8C12 8.28333 11.9042 8.52083 11.7125 8.7125C11.5208 8.90417 11.2833 9 11 9C10.7167 9 10.4792 8.90417 10.2875 8.7125C10.0958 8.52083 10 8.28333 10 8V6H6V8C6 8.28333 5.90417 8.52083 5.7125 8.7125C5.52083 8.90417 5.28333 9 5 9C4.71667 9 4.47917 8.90417 4.2875 8.7125C4.09583 8.52083 4 8.28333 4 8V6H2V18ZM6 4H10C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4Z" fill="#AD6D00" />
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              Ad Sales
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-yellow-600">
                {firstReport['total'].totalSales.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-400">
          <div className="flex items-start">
            <div className="bg-red-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.24994 16.0001V5.10008L0.699944 1.75008C0.583277 1.50008 0.574944 1.24591 0.674944 0.987577C0.774944 0.729243 0.949944 0.541743 1.19994 0.425077C1.44994 0.30841 1.70411 0.29591 1.96244 0.387577C2.22078 0.479243 2.40828 0.650077 2.52494 0.900077L4.44994 5.05008H16.0499L17.9749 0.900077C18.0916 0.650077 18.2791 0.475077 18.5374 0.375077C18.7958 0.275077 19.0499 0.291743 19.2999 0.425077C19.5499 0.541743 19.7249 0.729243 19.8249 0.987577C19.9249 1.24591 19.9166 1.50008 19.7999 1.75008L18.2499 5.10008V16.0001C18.2499 16.5501 18.0541 17.0209 17.6624 17.4126C17.2708 17.8042 16.7999 18.0001 16.2499 18.0001H4.24994C3.69994 18.0001 3.22911 17.8042 2.83744 17.4126C2.44578 17.0209 2.24994 16.5501 2.24994 16.0001ZM8.24994 11.0001H12.2499C12.5333 11.0001 12.7708 10.9042 12.9624 10.7126C13.1541 10.5209 13.2499 10.2834 13.2499 10.0001C13.2499 9.71674 13.1541 9.47924 12.9624 9.28758C12.7708 9.09591 12.5333 9.00008 12.2499 9.00008H8.24994C7.96661 9.00008 7.72911 9.09591 7.53744 9.28758C7.34578 9.47924 7.24994 9.71674 7.24994 10.0001C7.24994 10.2834 7.34578 10.5209 7.53744 10.7126C7.72911 10.9042 7.96661 11.0001 8.24994 11.0001ZM4.24994 16.0001H16.2499V7.05008H4.24994V16.0001Z" fill="#580815" />
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              Ad Orders
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-red-600">
                {firstReport['total'].totalOrders.toFixed(0)}
              </p>
            </div>
          </div>
        </div>

        {/* Ad Spends */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-400">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 10H11.5L13.5 8H5.5C5.21667 8 4.97917 8.09583 4.7875 8.2875C4.59583 8.47917 4.5 8.71667 4.5 9C4.5 9.28333 4.59583 9.52083 4.7875 9.7125C4.97917 9.90417 5.21667 10 5.5 10ZM5.5 6H9.5C9.78333 6 10.0208 5.90417 10.2125 5.7125C10.4042 5.52083 10.5 5.28333 10.5 5C10.5 4.71667 10.4042 4.47917 10.2125 4.2875C10.0208 4.09583 9.78333 4 9.5 4H5.5C5.21667 4 4.97917 4.09583 4.7875 4.2875C4.59583 4.47917 4.5 4.71667 4.5 5C4.5 5.28333 4.59583 5.52083 4.7875 5.7125C4.97917 5.90417 5.21667 6 5.5 6ZM7.5 14H2.5C1.95 14 1.47917 13.8042 1.0875 13.4125C0.695833 13.0208 0.5 12.55 0.5 12V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H18.5C19.05 0 19.5208 0.195833 19.9125 0.5875C20.3042 0.979167 20.5 1.45 20.5 2V3H18.5V2H2.5V12H9.5L7.5 14ZM21.4 7.3C21.4833 7.38333 21.525 7.475 21.525 7.575C21.525 7.675 21.4833 7.76667 21.4 7.85L20.5 8.75L18.75 7L19.65 6.1C19.7333 6.01667 19.825 5.975 19.925 5.975C20.025 5.975 20.1167 6.01667 20.2 6.1L21.4 7.3ZM19.9 9.35L13.55 15.7C13.45 15.8 13.3375 15.875 13.2125 15.925C13.0875 15.975 12.9583 16 12.825 16H12C11.8667 16 11.75 15.95 11.65 15.85C11.55 15.75 11.5 15.6333 11.5 15.5V14.675C11.5 14.5417 11.525 14.4125 11.575 14.2875C11.625 14.1625 11.7 14.05 11.8 13.95L18.15 7.6L19.9 9.35Z" fill="#007CD7" />
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              Ad Spends
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-blue-600">
                {firstReport['total'].totalSpends.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* CVR */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-400">
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7C3AED"/>
                <path d="M2 17L12 22L22 17" fill="#7C3AED"/>
                <path d="M2 12L12 17L22 12" fill="#7C3AED"/>
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              CVR
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-purple-600">
                {(firstReport['total'].cvr * 100).toFixed(2)} %
              </p>
            </div>
          </div>
        </div>

        {/* Acos */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-400">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 pl-2.5 pr-2.5 rounded-full shrink-0">
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 7H2.75C3.03333 7 3.27083 7.09583 3.4625 7.2875C3.65417 7.47917 3.75 7.71667 3.75 8C3.75 8.28333 3.65417 8.52083 3.4625 8.7125C3.27083 8.90417 3.03333 9 2.75 9H1.75C1.46667 9 1.22917 8.90417 1.0375 8.7125C0.845833 8.52083 0.75 8.28333 0.75 8C0.75 7.71667 0.845833 7.47917 1.0375 7.2875C1.22917 7.09583 1.46667 7 1.75 7ZM3.45 12.4L4.15 11.7C4.35 11.5 4.58333 11.4042 4.85 11.4125C5.11667 11.4208 5.35 11.5167 5.55 11.7C5.75 11.9 5.85417 12.1375 5.8625 12.4125C5.87083 12.6875 5.775 12.925 5.575 13.125L4.875 13.825C4.675 14.025 4.4375 14.1208 4.1625 14.1125C3.8875 14.1042 3.65 14 3.45 13.8C3.26667 13.6 3.17083 13.3667 3.1625 13.1C3.15417 12.8333 3.25 12.6 3.45 12.4ZM4.15 4.3L3.45 3.6C3.25 3.4 3.15417 3.16667 3.1625 2.9C3.17083 2.63333 3.26667 2.4 3.45 2.2C3.65 2 3.8875 1.89583 4.1625 1.8875C4.4375 1.87917 4.675 1.975 4.875 2.175L5.575 2.875C5.775 3.075 5.87083 3.3125 5.8625 3.5875C5.85417 3.8625 5.75 4.1 5.55 4.3C5.35 4.48333 5.11667 4.57917 4.85 4.5875C4.58333 4.59583 4.35 4.5 4.15 4.3ZM16.05 16.3L12 12.25L11.25 14.5C11.2167 14.6167 11.1542 14.7042 11.0625 14.7625C10.9708 14.8208 10.875 14.85 10.775 14.85C10.675 14.85 10.5792 14.8167 10.4875 14.75C10.3958 14.6833 10.3333 14.5917 10.3 14.475L8.15 7.325C8.11667 7.19167 8.12083 7.05833 8.1625 6.925C8.20417 6.79167 8.26667 6.68333 8.35 6.6C8.43333 6.51667 8.54167 6.45417 8.675 6.4125C8.80833 6.37083 8.94167 6.36667 9.075 6.4L16.275 8.55C16.3917 8.58333 16.4792 8.64583 16.5375 8.7375C16.5958 8.82917 16.625 8.925 16.625 9.025C16.625 9.125 16.6 9.22083 16.55 9.3125C16.5 9.40417 16.4167 9.46667 16.3 9.5L14.05 10.3L18.05 14.3C18.25 14.5 18.35 14.7333 18.35 15C18.35 15.2667 18.25 15.5 18.05 15.7L17.45 16.3C17.25 16.5 17.0167 16.6 16.75 16.6C16.4833 16.6 16.25 16.5 16.05 16.3ZM8.75 2V1C8.75 0.716667 8.84583 0.479167 9.0375 0.2875C9.22917 0.0958333 9.46667 0 9.75 0C10.0333 0 10.2708 0.0958333 10.4625 0.2875C10.6542 0.479167 10.75 0.716667 10.75 1V2C10.75 2.28333 10.6542 2.52083 10.4625 2.7125C10.2708 2.90417 10.0333 3 9.75 3C9.46667 3 9.22917 2.90417 9.0375 2.7125C8.84583 2.52083 8.75 2.28333 8.75 2ZM13.925 2.875L14.65 2.15C14.8333 1.96667 15.0625 1.87083 15.3375 1.8625C15.6125 1.85417 15.85 1.95 16.05 2.15C16.2333 2.33333 16.3292 2.5625 16.3375 2.8375C16.3458 3.1125 16.2583 3.35 16.075 3.55L15.35 4.3C15.1667 4.5 14.9375 4.59583 14.6625 4.5875C14.3875 4.57917 14.15 4.48333 13.95 4.3C13.75 4.1 13.6458 3.8625 13.6375 3.5875C13.6292 3.3125 13.725 3.075 13.925 2.875Z" fill="#00583B" />
              </svg>
            </div>
            <p className="font-inter font-medium text-[14px] leading-[21px] text-[#64748B] ml-2">
              ACOS
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <p className="font-inter font-semibold text-[20px] leading-[30px] text-green-600">
                {(firstReport['total'].acos * 100).toFixed(2)} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;

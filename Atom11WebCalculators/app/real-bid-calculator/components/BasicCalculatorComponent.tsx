import React, { useState } from "react";

const BasicCalculatorComponent = ({setActiveTab}) => {
  const [bid, setBid] = useState("");
  const [placementAdjustment, setPlacementAdjustment] = useState("");
  const [biddingStrategy, setBiddingStrategy] = useState("1");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const realBid =
      parseFloat(bid) *
      (1 + parseFloat(placementAdjustment) / 100) *
      (1 + parseFloat(biddingStrategy));
    setResult({
      realBid: realBid.toFixed(2),
      bid: parseFloat(bid).toFixed(2),
      placementAdjustment: parseFloat(placementAdjustment),
      biddingStrategy,
    });
  };

  //@ts-ignore
  const isCalculateDisabled = !bid || !placementAdjustment || isNaN(bid) || isNaN(placementAdjustment);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Keyword Bid:
          </label>
          <input
            type="number"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your bid"
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Campaign Placement Adjustment (TOS):
          </label>
          <input
            type="number"
            value={placementAdjustment}
            onChange={(e) => setPlacementAdjustment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter adjustment (e.g., 10 for 10%)"
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Bidding Strategy:
          </label>
          <select
            value={biddingStrategy}
            onChange={(e) => setBiddingStrategy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">Up and Down (Score: 1)</option>
            <option value="0">Down Only (Score: 0)</option>
            <option value="0">Fixed Bids (Score: 0)</option>
          </select>
        </div>
      </div>
      {result && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Calculation Results
          </h2>
          <p className="text-gray-800">
            <strong>Real Bid:</strong> {result.realBid}
          </p>
          <p className="text-gray-800">
            <strong>Bid:</strong> {result.bid}
          </p>
          <p className="text-gray-800">
            <strong>Bidding Strategy:</strong>{" "}
            {result.biddingStrategy === "1"
              ? "Up and Down (Score: 1)"
              : "Down Only / Fixed Bids (Score: 0)"}
          </p>
          <p className="text-gray-800">
            <strong>Placement Adjustment:</strong> {result.placementAdjustment}%
          </p>
          <p className="text-gray-800">
            <strong>Formula:</strong>{" "}
            {`${result.bid} * (1 + ${result.placementAdjustment / 100}) * (1 + ${
              result.biddingStrategy
            }) = ${result.realBid}`}
          </p>
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button
          onClick={()=> setActiveTab('UploadFile')}
          className="py-2 px-4 m-2 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition duration-200"
        >
          Reupload
        </button>
        <button
          onClick={handleCalculate}
          disabled={isCalculateDisabled}
          className={`py-2 px-4 m-2 rounded-md text-white font-medium ${
            isCalculateDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BasicCalculatorComponent;

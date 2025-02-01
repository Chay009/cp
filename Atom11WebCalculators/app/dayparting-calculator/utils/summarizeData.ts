import { CSVRow, SummarizedData } from "../../types";
import { parse } from "csv-parse/sync";

// Function to parse CSV file content
const parseCSVFile = async (file: File): Promise<SummarizedData[]> => {
  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsText(file);
    });
  };

  try {
    const fileContent = await readFileContent(file);
    const options = {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      cast: true,
      mapHeaders: ({ header } : any) => header.trim(), // Trim whitespace in headers
    };
    return summarizeData(parse(fileContent, options));
  } catch (error) {
    console.error("Error parsing CSV:", error);
    throw new Error("Failed to parse CSV file");
  }
};

// Summarize CSV data
const summarizeData = (data: CSVRow[]): SummarizedData[] => {
  const summarizedData: { [key: string]: SummarizedData } = {};

  // First pass to accumulate data and store min/max values for normalization
  data.forEach((row) => {
    try {
      // Normalize the "Start Time" to HH:MM format
      let startTime = row["Start Time"] || "00:00";
      const timeParts = startTime.split(":");
      if (timeParts.length === 2) {
        const hour = timeParts[0].padStart(2, "0"); // Add a leading zero if hour is single digit
        const minutes = timeParts[1].padStart(2, "0"); // Ensure minutes also have 2 digits
        startTime = `${hour}:${minutes}`;
      }

      const key = `${startTime}`;

      if (!summarizedData[key]) {
        summarizedData[key] = {
          StartTime: startTime,
          PortfolioName: row["Portfolio name"] || "Unknown",
          CampaignType: row["Campaign Type"] || "Unknown",
          CampaignName: row["Campaign Name"] || "Unknown",
          Country: row["Country"] || "Unknown",
          Status: row["Status"] || "Unknown",
          Currency: row["Currency"] || "Unknown",
          Budget: parseFloat((row["Budget"] || "0").replace(/[^\d.-]/g, "")) || 0,
          TargetingType: row["Targeting Type"] || "Unknown",
          BiddingStrategy: row["Bidding strategy"] || "Unknown",
          Impressions: 0,
          Clicks: 0,
          ClickThruRate: 0,
          Spend: 0,
          CostPerClick: 0,
          TotalOrders: 0,
          TotalACOS: 0,
          ROAS: 0,
          TotalSales: 0,
          Count: 0,
          ACOSCount: 0, 
          minACOS: Infinity,
          maxACOS: -Infinity,
          minSales: Infinity,
          maxSales: -Infinity,
          minSpend: Infinity,
          maxSpend: -Infinity,
          minCVR: Infinity,
          maxCVR: -Infinity,
          acosValues: [],
          salesValues: [],
          spendValues: [],
          cvrValues: [],
        };
      }

      // Accumulate totals and store values for later normalization
      summarizedData[key].Impressions += parseInt(row["Impressions"]) || 0;
      summarizedData[key].Clicks += parseInt(row["Clicks"]) || 0;
      summarizedData[key].Spend += parseFloat((row["Spend"] || "0").replace(/[^\d.-]/g, "")) || 0;
      summarizedData[key].CostPerClick += parseFloat((row["Cost Per Click (CPC)"] || "0").replace(/[^\d.-]/g, "")) || 0;
      summarizedData[key].TotalOrders += parseInt(row["14 Day Total Orders (#)"]) || 0;
      summarizedData[key].ROAS += parseFloat(row["Total Return on Advertising Spend (ROAS)"]) || 0;
      summarizedData[key].TotalSales += parseFloat((row["14 Day Total Sales"] || "0").replace(/[^\d.-]/g, "")) || 0;

      // Handle ACOS: Only accumulate if it's a valid value
      const acosValue = parseFloat((row["Total Advertising Cost of Sales (ACOS)"] || "0").replace(/%/g, ""));
      if (!isNaN(acosValue) && acosValue > 0) {
        summarizedData[key].TotalACOS += acosValue;
        summarizedData[key].ACOSCount += 1;
        summarizedData[key].acosValues.push(acosValue);
        summarizedData[key].minACOS = Math.min(summarizedData[key].minACOS, acosValue);
        summarizedData[key].maxACOS = Math.max(summarizedData[key].maxACOS, acosValue);
      }

      summarizedData[key].salesValues.push(summarizedData[key].TotalSales);
      summarizedData[key].minSales = Math.min(summarizedData[key].minSales, summarizedData[key].TotalSales);
      summarizedData[key].maxSales = Math.max(summarizedData[key].maxSales, summarizedData[key].TotalSales);

      summarizedData[key].spendValues.push(summarizedData[key].Spend);
      summarizedData[key].minSpend = Math.min(summarizedData[key].minSpend, summarizedData[key].Spend);
      summarizedData[key].maxSpend = Math.max(summarizedData[key].maxSpend, summarizedData[key].Spend);

      // Calculate CVR (Conversion Rate)
      const cvr = summarizedData[key].Clicks > 0 ? summarizedData[key].TotalOrders / summarizedData[key].Clicks : 0;
      summarizedData[key].cvrValues.push(cvr);
      summarizedData[key].minCVR = Math.min(summarizedData[key].minCVR, cvr);
      summarizedData[key].maxCVR = Math.max(summarizedData[key].maxCVR, cvr);

      summarizedData[key].Count += 1;
    } catch (error) {
      console.warn(`Error processing row: ${JSON.stringify(row)} - ${error}`);
    }
  });

  // Normalize and compute average normalized values
  Object.values(summarizedData).forEach((item) => {
    if (item.acosValues.length > 0) {
      //@ts-ignore
      item.normalizedACOS = item.acosValues.map(
        (acosValue) => (acosValue - item.minACOS) / (item.maxACOS - item.minACOS)
      );
      //@ts-ignore
      item.normalizedACOS = item.normalizedACOS.reduce((acc, value) => acc + value, 0) / item.normalizedACOS.length;
    } else {
      item.normalizedACOS = 0;
    }
  
    // Normalizing Total Sales
    item.normalizedSales = item.salesValues.length > 0
      ? item.salesValues.map(
        (salesValue) => (salesValue - item.minSales) / (item.maxSales - item.minSales)
      ).reduce((acc, value) => acc + value, 0) / item.salesValues.length
      : 0;

    // Normalizing Spend
    item.normalizedSpend = item.spendValues.length > 0
      ? item.spendValues.map(
        (spendValue) => (spendValue - item.minSpend) / (item.maxSpend - item.minSpend)
      ).reduce((acc, value) => acc + value, 0) / item.spendValues.length
      : 0;

    if (item.cvrValues.length > 0) {
      //@ts-ignore
      item.normalizedCVR = item.cvrValues.map(
        (cvrValue) => (cvrValue - item.minCVR) / (item.maxCVR - item.minCVR)
      );
      //@ts-ignore
      item.normalizedCVR = item.normalizedCVR.reduce((acc, value) => acc + value, 0) / item.normalizedCVR.length;
    } else {
      item.normalizedCVR = 0;
    }
  });
  

  Object.values(summarizedData).forEach((item) => {
    if (item.ACOSCount > 0) {
      item.TotalACOS /= item.ACOSCount; // Average ACOS
    } else {
      item.TotalACOS = 0; // If no valid ACOS, set it to 0
    }
  });

  return Object.values(summarizedData);
};

export default parseCSVFile;

import { read, utils, WorkBook, WorkSheet } from "xlsx";
import { CSVRow, RealBidData, KeywordBidData } from "../../types";

// Function to parse Excel file content
const parseExcelFile = async (file: File) => {
    const readFileContent = (file: File): Promise<ArrayBuffer> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as ArrayBuffer);
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsArrayBuffer(file);
        });
    };

    try {
        const fileContent = await readFileContent(file);
        const workbook: WorkBook = read(fileContent, { type: "array" });
        const sheetName = "Sponsored Products Campaigns";
        const sheet: WorkSheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found in the file.`);
        }

        const jsonData: CSVRow[] = utils.sheet_to_json(sheet);
        const realBidData = summarizeDatafun(jsonData);
        const keywordBidData = calculateKeywordBids(jsonData, realBidData);

        const final_data = Object.values(keywordBidData);
        return { final_data };
    } catch (error) {
        console.error("Error parsing Excel file:", error);
        throw new Error("Failed to parse Excel file");
    }
};

// Round to two decimal places utility function
const roundToTwo = (value: number): number => {
    return Math.round(value * 100) / 100;
};

const summarizeDatafun = (data: CSVRow[]): RealBidData[] => {
    if (data.length === 0) {
        console.log("No data available for 'Sponsored Products Campaigns'.");
        return [];
    }

    const campaignDataMap: { [key: string]: RealBidData } = {};

    data.forEach((row) => {
        const campaignId = row["Campaign ID"] || "0";
        const campaignName = row["Campaign Name (Informational only)"] || "";
        const biddingStrategy = row["Bidding Strategy"] || "";
        const placement = row["Placement"] || "";
        const percentage = roundToTwo(parseFloat(row["Percentage"] || "0"));

        const biddingStrategyScore = biddingStrategy === "Dynamic bids - up and down" ? 1 : 0;
        const placement_adjustment = placement === "Placement Top" ? percentage : 0;

        if (campaignDataMap[campaignId]) {
            //@ts-ignore
            campaignDataMap[campaignId].biddingStrategyScore = Math.max(biddingStrategyScore, campaignDataMap[campaignId].biddingStrategyScore);
            //@ts-ignore
            campaignDataMap[campaignId].placement_adjustment = Math.max(placement_adjustment, campaignDataMap[campaignId].placement_adjustment);
        } else {
            campaignDataMap[campaignId] = {
                campaignId: campaignId,
                campaign: campaignName,
                biddingStrategy: biddingStrategy,
            //@ts-ignore
                biddingStrategyScore: biddingStrategyScore,
                placement_adjustment: placement_adjustment
            };
        }
    });

    return Object.values(campaignDataMap);
};

const calculateKeywordBids = (data: CSVRow[], realBidData: RealBidData[]): KeywordBidData[] => {
    const keywordBidData: KeywordBidData[] = [];
    const campaignDataMap: { [key: string]: RealBidData } = {};
    realBidData.forEach(campaign => {
        campaignDataMap[campaign.campaignId] = campaign;
    });

    data.forEach((row) => {
        const entity = row["Entity"] || "";
        const keywordId = row["Keyword ID"] || "";
        const bid = roundToTwo(parseFloat(row["Bid"] || "0"));
        const campaignId = row["Campaign ID"] || "";

        if (entity === "Keyword" && keywordId && campaignId) {
            const campaignData = campaignDataMap[campaignId];

            if (campaignData) {
            //@ts-ignore
                const { biddingStrategyScore, placement_adjustment } = campaignData;
                const adjustedPlacementAdjustment = roundToTwo(placement_adjustment / 100);
                const realBid = roundToTwo(bid * (1 + adjustedPlacementAdjustment) * (1 + biddingStrategyScore));

                const campaign = row["Campaign Name (Informational only)"] || "";
                const adGroupId = row["Ad Group ID"] || "";
                const adGroup = row["Ad Group Name (Informational only)"] || "";
                const keyword = row["Keyword Text"] || "";
                const matchType = row["Match Type"] || "";
                const impressions = roundToTwo(parseFloat(row["Impressions"] || "0"));
                const clicks = roundToTwo(parseFloat(row["Clicks"] || "0"));
                const spend = roundToTwo(parseFloat(row["Spend"] || "0"));
                const sales = roundToTwo(parseFloat(row["Sales"] || "0"));
                const orders = parseInt(row["Orders"] || "0", 10);
                const acos = roundToTwo(parseFloat(row["ACOS"] || "0"));
                const cpc = roundToTwo(parseFloat(row["CPC"] || "0"));

                const cpcPerBid = bid !== 0 ? roundToTwo(cpc / bid) : 0;
                const cpcPerRealBid = realBid !== 0 ? roundToTwo(cpc / realBid) : 0;

                keywordBidData.push({
                    campaignId: campaignId,
                    campaign: campaign,
                    adGroupId: adGroupId,
                    adGroup: adGroup,
                    keywordId: keywordId,
                    keyword: keyword,
                    bid: bid,
                    matchType: matchType,
                    placement_adjustment: placement_adjustment,
                    biddingStrategy: campaignData.biddingStrategy,
                    biddingStrategyScore: biddingStrategyScore,
                    realBid: realBid,
                    impressions: impressions,
                    clicks: clicks,
                    spend: spend,
                    sales: sales,
                    orders: orders,
                    acos: acos,
                    cpc: cpc,
                    cpcPerBid: cpcPerBid,
                    cpcPerRealBid: cpcPerRealBid
                });
            }
        }
    });

    return keywordBidData;
};

export default parseExcelFile;

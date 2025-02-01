import ExcelJS from "exceljs";
import { KeywordBidData } from "../../types";

// Handle download of processed data
const exportToExcel = async (finalVdata: KeywordBidData[]) => {
    //@ts-ignore
    const processedData = finalVdata?.final_data;

    // Check if processedData is valid and not empty
    if (!Array.isArray(processedData) || processedData.length === 0) {
        alert("No processed data available to download.");
        return;
    }

    try {
        // Define the full list of headers and map to proper English
        const headersMap = {
            campaignId: "Campaign ID",
            campaign: "Campaign",
            adGroupId: "Ad Group ID",
            adGroup: "Ad Group",
            keywordId: "Keyword ID",
            keyword: "Keyword",
            bid: "Bid",
            matchType: "Match Type",
            placement_adjustment: "Placement Adjustment",
            biddingStrategy: "Bidding Strategy",
            biddingStrategyScore: "Bidding Strategy Score",
            realBid: "Real Bid",
            impressions: "Impressions",
            clicks: "Clicks",
            spend: "Spend",
            sales: "Sales",
            orders: "Orders",
            acos: "ACOS",
            cpc: "CPC",
            cpcPerBid: "CPC Per Bid",
            cpcPerRealBid: "CPC Per Real Bid",
        };

        // Highlighted columns
        const highlightedColumns = [
            "CPC Per Bid",
            "CPC Per Real Bid",
            "Bidding Strategy Score",
            "Real Bid",
        ];

        // Initialize a new workbook and worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Processed Data");

        // Add headers to the worksheet
        const headers = Object.values(headersMap);
        worksheet.addRow(headers);

        // Apply styling to headers
        headers.forEach((header, index) => {
            const column = worksheet.getColumn(index + 1);
            column.width = highlightedColumns.includes(header) ? 20 : 15; // Wider for highlighted columns

            // Style the header row
            worksheet.getCell(1, index + 1).style = {
                font: { bold: true, color: { argb: highlightedColumns.includes(header) ? "FF0000FF" : "FF000000" } },
                alignment: { vertical: "middle", horizontal: "center" },
                fill: {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: { argb: highlightedColumns.includes(header) ? "FFFFE699" : "FFFFFFFF" },
                },
            };
        });

        // Add data to the worksheet
        processedData.forEach((row) => {
            const transformedRow = Object.entries(row).reduce((acc, [key, value]) => {
                const header = headersMap[key] || key;
                acc[header] = value;
                return acc;
            }, {});

            const rowData = Object.values(transformedRow);
            const newRow = worksheet.addRow(rowData);

            // Apply styles to specific columns in the data rows
            headers.forEach((header, index) => {
                if (highlightedColumns.includes(header)) {
                    newRow.getCell(index + 1).style = {
                        font: { color: { argb: "FF0000FF" } },
                        fill: {
                            type: "pattern",
                            pattern: "solid",
                            fgColor: { argb: "FFE8F5E9" },
                        },
                    };
                }
            });
        });

        // Trigger the download
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "processed_data.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        console.error("Error exporting data to Excel:", error);
        alert("Failed to export data to Excel. Please check the console for details.");
    }
};

export default exportToExcel;

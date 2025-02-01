import jsPDF from "jspdf";
import autoTable, { UserOptions } from "jspdf-autotable";
import { ResultsDayPartingProps } from "../../types";

const exportToPDF = (data: ResultsDayPartingProps | null): void => {

  if (!data) {
    alert("No data available for export");
    return;
  }

  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Define the logo image details
  const logoUrl = "https://framerusercontent.com/assets/rPxzXX6SLkvePv07TWveOgHq4.png"; // Replace with your logo path or base64 string
  const imgWidth = 20; // Width of the logo
  const imgHeight = 20; // Height of the logo
  const pageWidth = doc.internal.pageSize.width; // Get the page width
  const imgX = pageWidth - imgWidth - 10; // Position the image 10 units from the right edge
  const imgY = 10; // Position the image 10 units from the top edge

  // Add Logo Image at the top right of the header
  doc.addImage(logoUrl, "PNG", imgX, imgY, imgWidth, imgHeight);

  // Title
  doc.setFontSize(18);
  doc.text("Dayparting Data", 10, 20);
  doc.setFontSize(12);

  // Add Best Performing Time Slots Table
  doc.text(data.bestTimeSlots.label, 10, 40);
  autoTable(doc, {
    startY: 45,
    head: [["Time Ranges", "Reason"]],
    body: [
      [
        data.bestTimeSlots.timeRanges.join(", "),
        data.bestTimeSlots.reason,
      ],
    ],
  } as UserOptions);

  // Add Worst Performing Time Slots Table
  doc.text(data.worstTimeSlots.label, 10, (doc as any).lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 15,
    head: [["Time Ranges", "Reason"]],
    body: [
      [
        data.worstTimeSlots.timeRanges.join(", "),
        data.worstTimeSlots.reason,
      ],
    ],
  } as UserOptions);

  data.recommendations.forEach((recommendation, index) => {
    // Add Recommendation Heading and Description
    doc.text(recommendation.heading, 10, (doc as any).lastAutoTable.finalY + 10);
    doc.text(recommendation.description, 10, (doc as any).lastAutoTable.finalY + 15);
  
    // Add Time Range and Multiplier Table
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 25,
      head: [["Time Range", "Multiplier"]],
      body: recommendation.timeRanges.map((range) => [
        range, // time range
        recommendation.multiplier.toString(), // multiplier
      ]),
    } as UserOptions);
  });
  // Save the PDF
  doc.save("dayparting_data.pdf");

};

export default exportToPDF;

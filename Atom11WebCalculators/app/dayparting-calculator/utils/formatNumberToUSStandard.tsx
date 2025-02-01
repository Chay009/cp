export default function formatNumberToUSStandard(num) {
  if (num === null || num === undefined) {
    throw new Error("Invalid input: Number is required.");
  }

  // Convert to string to handle Decimal.js or other types
  const numString = num.toString();

  // Check if it's a valid number
  if (isNaN(Number(numString))) {
    throw new Error("Invalid input: Not a valid number.");
  }

  // Use Intl.NumberFormat for US formatting
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(Number(numString));
}
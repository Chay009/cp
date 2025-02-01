
function getValidatedValue(value: any) {
  return Boolean(value) && isFinite(value) && !isNaN(value) ? parseFloat(value.toFixed(2)) : 0;
}

export function calculateFifthTableTotal(report: any, filterKey: any, field: any) {
  const spValue = getValidatedValue(report[filterKey]?.[field]?.sp_value);
  const sbValue = getValidatedValue(report[filterKey]?.[field]?.sb_value);
  const sdValue = getValidatedValue(report[filterKey]?.[field]?.sd_value);
  return (spValue + sbValue + sdValue).toFixed(2);
}
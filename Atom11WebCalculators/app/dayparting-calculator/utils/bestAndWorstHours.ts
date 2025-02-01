import { ResultsDayPartingProps, SummarizedData, Recommendation } from "../../types";

const multiplierGuide = [
  {
    timeSlot: "00:00 - 03:59",
    performanceRanges: [
      {
        scoreRange: "0.8-1",
        scenario: "High performance (good ACoS and conversions)",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0-0.8",
        scenario: "Poor performance (high CPC, low conversions)",
        action: "Decrease budget",
        multiplier: 0.5,
      },
    ],
  },
  {
    timeSlot: "04:00 - 07:59",
    performanceRanges: [
      {
        scoreRange: "0.8-1",
        scenario: "Excellent ACoS and conversions, budget depletion risk",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0.2-0.8",
        scenario: "Stable performance (acceptable ACoS and sales)",
        action: "Slight decrease in budget",
        multiplier: 0.6,
      },
      {
        scoreRange: "0-0.2",
        scenario: "Poor performance (low conversions, high CPC)",
        action: "Decrease budget",
        multiplier: 0.5,
      },
    ],
  },
  {
    timeSlot: "08:00 - 11:59",
    performanceRanges: [
      {
        scoreRange: "0.8-1",
        scenario: "Excellent ACoS and conversions, budget depletion risk",
        action: "Slight budget increase",
        multiplier: 1.1,
      },
      {
        scoreRange: "0.2-0.8",
        scenario: "Stable performance (acceptable ACoS and sales)",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0-0.2",
        scenario: "Poor performance (low conversions, high CPC)",
        action: "Decrease budget",
        multiplier: 0.75,
      },
    ],
  },
  {
    timeSlot: "12:00 - 15:59",
    performanceRanges: [
      {
        scoreRange: "0.7-1",
        scenario: "Excellent ACoS and conversions, budget depletion risk",
        action: "Slight budget increase",
        multiplier: 1.1,
      },
      {
        scoreRange: "0.2-0.7",
        scenario: "Stable performance (acceptable ACoS and sales)",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0-0.2",
        scenario: "Poor performance (low conversions, high CPC)",
        action: "Decrease budget",
        multiplier: 0.75,
      },
    ],
  },
  {
    timeSlot: "16:00 - 19:59",
    performanceRanges: [
      {
        scoreRange: "0.6-1",
        scenario: "Good performance (high conversions, low spend tapering)",
        action: "Slight budget increase",
        multiplier: 1.15,
      },
      {
        scoreRange: "0.1-0.6",
        scenario: "Stable but average performance",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0-0.1",
        scenario: "Poor performance (low conversions, high ACoS)",
        action: "Decrease budget",
        multiplier: 0.75,
      },
    ],
  },
  {
    timeSlot: "20:00 - 23:59",
    performanceRanges: [
      {
        scoreRange: "0.5-1",
        scenario: "Good performance (high conversions, low spend tapering)",
        action: "Slight budget increase",
        multiplier: 1.15,
      },
      {
        scoreRange: "0.1-0.5",
        scenario: "Stable but average performance",
        action: "No change in budget",
        multiplier: 1.0,
      },
      {
        scoreRange: "0-0.1",
        scenario: "Poor performance (low conversions, high ACoS)",
        action: "Decrease budget",
        multiplier: 0.75,
      },
    ],
  },
];


const bestAndWorstHours = (data: SummarizedData[]): ResultsDayPartingProps => {

  if (!data || data.length === 0) {
    throw new Error("Data array is empty or invalid.");
  }

  // Define weights
  const WEIGHTS = {
    TotalACOS: 0.4,
    TotalSales: 0.2,
    CVR: 0.3,
    Spend: 0.1,
  };

  // Calculate performance scores
  const performanceScores = data.map((_, i) => {
    const score =
      WEIGHTS.TotalACOS * (1 - data[i].normalizedACOS) +
      WEIGHTS.TotalSales * data[i].normalizedSales +
      WEIGHTS.CVR * data[i].normalizedCVR -
      WEIGHTS.Spend * data[i].normalizedSpend;
    return score;
  });

  // Define slots with time ranges in 24-hour format
  const slots = [
    { label: "00:00 - 03:59", timeRange: [0, 3] },
    { label: "04:00 - 07:59", timeRange: [4, 7] },
    { label: "08:00 - 11:59", timeRange: [8, 11] },
    { label: "12:00 - 15:59", timeRange: [12, 15] },
    { label: "16:00 - 19:59", timeRange: [16, 19] },
    { label: "20:00 - 23:59", timeRange: [20, 23] },
  ];  
  
  // Aggregate scores for slots
  const slotScores = slots.map((slot) => {
    const slotData = data.filter((row) => {
      const hour = parseInt(row.StartTime, 10);
      return hour >= slot.timeRange[0] && hour <= slot.timeRange[1];
    });
  
    const totalScore = slotData.reduce(
      (sum, row) => sum + performanceScores[data.indexOf(row)],
      0
    );
    const averageScore = slotData.length > 0 ? totalScore / slotData.length : 0;
    return { label: slot.label, score: averageScore };
  });

  // Sort slots by scores in descending order
  const sortedSlots = slotScores.sort((a, b) => b.score - a.score);
  // Extract best and worst two slots
  const bestSlots = sortedSlots.slice(0, 1);
  const worstSlots = sortedSlots.slice(-1).reverse();


  // recommendation

  const getRecommendation = (timeSlot: string, score: number): Recommendation | null => {
    const slotPerformance = multiplierGuide.find((item) => item.timeSlot === timeSlot);
    if (!slotPerformance) return null;
  
    const recommendation = slotPerformance.performanceRanges.find((range) => {
      const [min, max] = range.scoreRange.split("-").map((str) => parseFloat(str));
      if (score >= min && (max === undefined || score <= max)) {
        return true;
      }
      return false;
    });
  
    return recommendation
      ? {
          heading: recommendation.action,
          description: recommendation.scenario,
          timeRanges: [timeSlot],
          multiplier: recommendation.multiplier,
          performanceScore: score
        }
      : null;
  };
  
  const recommendations: Recommendation[] = [
    getRecommendation(bestSlots[0].label, bestSlots[0].score), 
    getRecommendation(worstSlots[0].label, worstSlots[0].score)
  ]
  
  return {
    bestTimeSlots: {
      label: "Top Performing Time Slots",
      timeRanges: [bestSlots[0].label],
      reason: "These time slots have the highest conversion rates and lowest ACOS.",
    },
    worstTimeSlots: {
      label: "Underperforming Performing Time Slots",
      timeRanges: [worstSlots[0].label],
      reason: "These time slots show minimal activity and high wasted spend.",
    },
    recommendations: recommendations,
  };
};

export default bestAndWorstHours
import Decimal from "decimal.js";

export interface CsvRow {
    [key: string]: string;
}

export interface GptResponse {
    row: CsvRow;
    response: string;
}
export interface AnalyzeCSVResponse {
    analysis: string; // Change this type based on what your API returns
}

export interface CSVRow {
    'Start Time': string;
    'Portfolio name': string;
    'Campaign Type': string;
    'Campaign Name': string;
    'Country': string;
    'Status': string;
    'Currency': string;
    'Budget': string;
    'Targeting Type': string;
    'Bidding strategy': string;
    'Impressions': string;
    'Clicks': string;
    'Spend': string;
    'Cost Per Click (CPC)': string;
    '14 Day Total Orders (#)': string;
    'Total Advertising Cost of Sales (ACOS)': string;
    'Total Return on Advertising Spend (ROAS)': string;
    '14 Day Total Sales': string;
}

export interface SummarizedData {
    StartTime: string;
    PortfolioName: string;
    CampaignType: string;
    CampaignName: string;
    Country: string;
    Status: string;
    Currency: string;
    Budget: number;
    TargetingType: string;
    BiddingStrategy: string;
    Impressions: number;
    Clicks: number;
    ClickThruRate: number;
    Spend: number;
    CostPerClick: number;
    TotalOrders: number;
    TotalACOS: number;
    ROAS: number;
    TotalSales: number;
    Count: number;
    ACOSCount: number;
    minACOS: number;
    maxACOS: number;
    minSales: number;
    maxSales: number;
    minSpend: number;
    maxSpend: number;
    minCVR: number;
    maxCVR: number;
    normalizedACOS?: number;
    normalizedSales?: number;
    normalizedSpend?: number;
    normalizedCVR?: number;
    normalizedROAS?: number;
    normalizedCPC?: number;
    acosValues: number[];
    salesValues: number[];
    spendValues: number[];
    cvrValues: number[];
}


export interface FileUploadProps {
    handleProcessData: (businessReportFile: File, bulkFile: File) => void;
    loading: boolean;
    setBulkFile: React.Dispatch<React.SetStateAction<File | null>>;
    bulkFile: File | null;
    setBusinessReportFile: React.Dispatch<React.SetStateAction<File | null>>;
    businessReportFile: File | null;
}

export interface firstReport {
    sp_campaign: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    sb_campaign: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    sd_campaign: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    total: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
    }
}
export interface secReport {
    top_search: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    rest_search: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    other: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
        spends: Decimal,
        sales: Decimal
    },
    total: {
        totalSpends: Decimal,
        totalSales: Decimal,
        totalClicks: Decimal,
        totalOrders: Decimal,
        acos: Decimal,
        cvr: Decimal,
    }
}
export interface thirdReport {
    broad: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    exact: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    phrase: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    auto: {
        totalSpends: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sb: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sd: {
                value: Decimal,
                loos: Decimal,
                close: Decimal,
                complements: Decimal,
                substitutes: Decimal,
            },
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
    },
    product_category: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
    },
    others: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    total: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalClicks: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        totalOrders: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        cvr: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
}
export interface forthReport {
    totalOrderedSales: Decimal,
    brandA: {
        asins: [],
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    brandB: {
        asins: [],
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    brandC: {
        asins: [],
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
    total: {
        totalSpends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal
        },
        totalSales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        acos: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        spends: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        },
        sales: {
            total: Decimal,
            sp_value: Decimal,
            sb_value: Decimal,
            sd_value: Decimal,
        }
    },
}

export interface ResultsProps {
    firstReport?: firstReport | null;
    secReport?: secReport | null;
    thirdReport?: thirdReport | null;
    forthReport?: forthReport | null;
    formulaResults: any; // need to add formulaResults type
}

export interface ResultsScreenProps {
    firstReport?: firstReport | null;
    secReport?: secReport | null;
    thirdReport?: thirdReport | null;
    forthReport?: forthReport | null;
    handleReUploadfile: () => void;
}


export interface CSVRow {
    'Start Time': string;
    'Portfolio name': string;
    'Campaign Type': string;
    'Campaign Name': string;
    'Country': string;
    'Status': string;
    'Currency': string;
    'Budget': string;
    'Targeting Type': string;
    'Bidding strategy': string;
    'Impressions': string;
    'Clicks': string;
    'Spend': string;
    'Cost Per Click (CPC)': string;
    '14 Day Total Orders (#)': string;
    'Total Advertising Cost of Sales (ACOS)': string;
    'Total Return on Advertising Spend (ROAS)': string;
    '14 Day Total Sales': string;
}

export interface SummarizedData {
    StartTime: string;
    PortfolioName: string;
    CampaignType: string;
    CampaignName: string;
    Country: string;
    Status: string;
    Currency: string;
    Budget: number;
    TargetingType: string;
    BiddingStrategy: string;
    Impressions: number;
    Clicks: number;
    ClickThruRate: number;
    Spend: number;
    CostPerClick: number;
    TotalOrders: number;
    TotalACOS: number;
    ROAS: number;
    TotalSales: number;
    Count: number;
    AverageROAS?: number;
    AverageCPC?: number;
    ACOSCount: number;
}

export interface FileUploadDayPartingProps {
    handleProcessData: () => void;
    handleUploadFile: (file: File) => void;
    file: File | null;
    loading: boolean;
}

export interface DaysTypes {
    label: string;
    dayRanges: string[];
    reason: string;
}

export interface TimeSlot {
    label: string;
    timeRanges: string[];
    reason: string;
}

export interface Recommendation {
    heading: string;
    description: string;
    timeRanges: string[];
    multiplier: number;
    performanceScore: number;
  }

export interface ResultsDayPartingProps {
    // bestDaySlots: DaysTypes;
    // worstDaySlots: DaysTypes;
    bestTimeSlots: TimeSlot;
    worstTimeSlots: TimeSlot;
    recommendations: Recommendation[];
}

export interface ResultsScreenDayPartingProps {
    bestTimeSlots: TimeSlot;
    worstTimeSlots: TimeSlot;
    recommendations: Recommendation[];
    handleExportData: () => void;
    handleReUploadfile: () => void;
    loading: boolean;
    email: string;
    setEmail: (email: string) => void,
    emailSubmitted: boolean,
    setEmailSubmitted: (emailSubmitted: boolean) => void 
}

export interface ReviewAnalysisProps {
    summarizedData: SummarizedData[] | null;
    loading: boolean;
}

export interface FileUploadBidProps {
    handleProcessData: () => void;
    handleUploadFile: (file: File) => void;
    file: File | null;
    loading: boolean;
    handleReUploadfile: () => void;
}

export interface RealBidData {
    campaignId: string;
    campaign: string;
    adGroup: string;
    keyword: string;
    bid: number;
    matchType: string;
    placementAdjustment: number;
    biddingStrategy: string;
    realBid: number;
    impressions: number;
    clicks: number;
    spend: number;
    cpc: number;
    sales: number;
    orders: number;
    acos: number;
}

export interface KeywordBidData {
    campaignId: string;
    campaign: string;
    adGroupId: string;
    adGroup: string;
    keywordId: string;
    keyword: string;
    bid: number;
    matchType: string;
    placement_adjustment: number;
    biddingStrategy: string;
    biddingStrategyScore: number;
    realBid: number;
    impressions: number;
    clicks: number;
    spend: number;
    sales: number;
    orders: number;
    acos: number;
    cpc: number;
    cpcPerBid: number;
    cpcPerRealBid: number;
}

export interface Campaign {
    CampaignDetails: {
        kpc: Decimal,
        adpc: Decimal,
        campaigns_with_no_negative_keywords: Decimal,
        campaigns_With_up_down_strategy: Decimal
    },
    Bidding_details: any[] // Array of filtered bidding rows
    Acos_more_than_30:any[],
    Acos_more_than_100:any[],
}

export interface FormulaResults {
  Campaign: Campaign;
}

export interface ResultsScreenProps {
  firstReport?: firstReport | null;
  secReport?: secReport | null;
  thirdReport?: thirdReport | null;
  forthReport?: forthReport | null;
  formulaResults: FormulaResults;
  handleReUploadfile: () => void;
}
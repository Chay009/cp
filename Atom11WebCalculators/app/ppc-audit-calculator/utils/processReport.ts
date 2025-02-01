import Decimal from "decimal.js";
import { read, utils, WorkBook, WorkSheet } from 'xlsx';

let firstReport = {
    sp_campaign: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    sb_campaign: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    sd_campaign: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    total: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
    }
}
let secReport = {
    top_search: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    rest_search: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    other: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
        spends: new Decimal(0),
        sales: new Decimal(0)
    },
    total: {
        totalSpends: new Decimal(0),
        totalSales: new Decimal(0),
        totalClicks: new Decimal(0),
        totalOrders: new Decimal(0),
        acos: new Decimal(0),
        cvr: new Decimal(0),
    }
}
let thirdReport = {
    broad: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    exact: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    phrase: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    auto: {
        totalSpends: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sb: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sd: {
                value: new Decimal(0),
                loos: new Decimal(0),
                close: new Decimal(0),
                complements: new Decimal(0),
                substitutes: new Decimal(0),
            },
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
    },
    product_category: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
    },
    others: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    total: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalClicks: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        totalOrders: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        cvr: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
}
let forthReport = {
    totalOrderedSales: new Decimal(0),
    brandA: {
        asins: [],
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0)
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    brandB: {
        asins: [],
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0)
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    brandC: {
        asins: [],
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0)
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
    total: {
        totalSpends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0)
        },
        totalSales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        acos: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        spends: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        },
        sales: {
            total: new Decimal(0),
            sp_value: new Decimal(0),
            sb_value: new Decimal(0),
            sd_value: new Decimal(0),
        }
    },
}

let main_data = "";
let sales_data = "";


// Remove individual metric functions as they're now integrated into the main formula function
// the reports are tables here 
let CampaignDetails={
    kpc: new Decimal(0),
    adpc: new Decimal(0),
    campaigns_with_no_negative_keywords: new Decimal(0),
    campaigns_With_up_down_strategy:new Decimal(0)

}

export async function formula(workbook: any, type: string) {
    const sheetNames = workbook.SheetNames;
    const chunkSize = 2000;

    // Reset the metrics for each new calculation
   CampaignDetails = {
        kpc: new Decimal(0),
        adpc: new Decimal(0),
        campaigns_with_no_negative_keywords: new Decimal(0),
        campaigns_With_up_down_strategy: new Decimal(0),
    };

    const filteredRows_bidding: any[] = []; // Store rows matching the filter
    const filteredRows_acos_30: any[] = []; // For ACOS > 30%
    const filteredRows_acos_100: any[] = []; // For ACOS > 100%
    const filteredRows_no_negatives: any[] = []; // For campaigns with no negative keywords

    // Add sets to track unique campaign IDs
    const allCampaignIds = new Set();
    const campaignsWithNegativeKeywords = new Set();
    const campaignDetails = new Map(); // Store campaign details for later reference

    for (const sheetName of sheetNames) {
        if (type === 'main' && sheetName.toLowerCase() === 'sponsored products campaigns') {
            const sheetData = utils.sheet_to_json(workbook.Sheets[sheetName])
                .map(convertKeysToLowercaseAndRemoveSpaces);

            let totalEnabledKeywords = 0;
            let totalProductAds = 0;
            let campaigns_With_up_down_strategy = 0;

            // First pass: collect all campaign details
            for (const row of sheetData) {
                if (row['entity']?.toLowerCase() === 'campaign' &&
                    row['campaignstate(informationalonly)']?.toLowerCase().includes('enabled') &&
                    row['state']?.toLowerCase().includes('enabled')) {
                    campaignDetails.set(row['campaignid'], row);
                }
            }

            // Process in chunks for memory efficiency but maintain overall counts
            for (let i = 0; i < sheetData.length; i += chunkSize) {
                const chunk = sheetData.slice(i, i + chunkSize);

                for (const row of chunk) {
                    
                    if (
                        row['campaignstate(informationalonly)']?.toLowerCase().includes('enabled') &&
                        row['state']?.toLowerCase().includes('enabled')
                    ) {
                        const entity = row['entity']?.toLowerCase().replaceAll(' ', '');
                        const campaignId = row['campaignid'];

                        switch (entity) {
                            case 'campaign':
                                allCampaignIds.add(campaignId);
                            
                                const biddingStrategy = row['biddingstrategy']?.toLowerCase().replaceAll(' ', '');
                            
                                console.log(row['biddingstrategy'],"row")

                                
                                if (biddingStrategy === 'dynamicbids-upanddown') {
                                    campaigns_With_up_down_strategy++;
                                    filteredRows_bidding.push(row); // Add to filtered rows for bidding strategy
                                }
                            
                                const acosValue = parseFloat(row['acos']); // Ensure acos is treated as a number
                            
                                if (acosValue > 0.3) {
                                    filteredRows_acos_30.push(row); // Add rows where ACOS > 30%
                                }
                            
                                if (acosValue > 1.0) {
                                    filteredRows_acos_100.push(row); // Add rows where ACOS > 100%
                                }
                            
                                break;
                            
                            case 'keyword':
                            case 'producttargeting':  // Added this case to count product targeting
                                totalEnabledKeywords++;
                                break;
                            case 'productad':
                                totalProductAds++;
                                break;
                            case 'negativekeyword':
                                campaignsWithNegativeKeywords.add(campaignId);
                                break;
                        }
                    }
                }
            }

            // Calculate campaigns with no negative keywords using Set difference
            const totalEnabledCampaigns = allCampaignIds.size;
            const campaignsWithNoNegatives = totalEnabledCampaigns - campaignsWithNegativeKeywords.size;

            // After processing all rows, add campaigns with no negatives to filtered rows
            for (const campaignId of allCampaignIds) {
                if (!campaignsWithNegativeKeywords.has(campaignId)) {
                    const campaignRow = campaignDetails.get(campaignId);
                    if (campaignRow) {
                        filteredRows_no_negatives.push(campaignRow);
                    }
                }
            }

            // Calculate final metrics using totals
           CampaignDetails.kpc = new Decimal(
                totalEnabledCampaigns > 0 ? totalEnabledKeywords / totalEnabledCampaigns : 0
            );
           CampaignDetails.adpc = new Decimal(
                totalEnabledCampaigns > 0 ? totalProductAds / totalEnabledCampaigns : 0
            );
            CampaignDetails.campaigns_with_no_negative_keywords = new Decimal(campaignsWithNoNegatives);
            CampaignDetails.campaigns_With_up_down_strategy = new Decimal(campaigns_With_up_down_strategy);
        }
    }

    console.log('Filtered Rows bidding:', filteredRows_bidding); // Log the filtered rows
    console.log('Final Results:', {
        kpc: CampaignDetails.kpc.toString(),
        adpc: CampaignDetails.adpc.toString(),
        campaigns_with_no_negative_keywords: CampaignDetails.campaigns_with_no_negative_keywords.toString(),
        campaigns_With_up_down_strategy: CampaignDetails.campaigns_With_up_down_strategy.toString(),
    });

    return {Campaign:{
        CampaignDetails:CampaignDetails,
        Bidding_details:filteredRows_bidding,
        Acos_more_than_30:filteredRows_acos_30,
        Acos_more_than_100:filteredRows_acos_100,
        Campaigns_without_negative_keywords:filteredRows_no_negatives,
    },}
}




function readExcelFile(file: File): Promise<WorkBook> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = (event) => {
            if (event.target?.result) {
                const data = new Uint8Array(event.target.result as ArrayBuffer);
                const workbook = read(data, { type: 'array' }); // Read as ArrayBuffer
                resolve(workbook);
            } else {
                reject(new Error("Failed to read file."));
            }
        };

        reader.onerror = () => {
            reject(new Error("Failed to read file."));
        };
    });
}

// Function to convert keys of an object to lowercase and remove spaces
function convertKeysToLowercaseAndRemoveSpaces<T extends Record<string, any>>(obj: T): T {
    const newObj: Record<string, any> = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = key.toLowerCase().replace(/\s/g, '');
            newObj[newKey] = obj[key];
        }
    }
    return newObj as T;
}

function proccessMianReports(sheetData: any[], sheetName: string) {
    sheetData = sheetData.map(convertKeysToLowercaseAndRemoveSpaces);
    switch (sheetName.toLowerCase()) {
        case "sponsored products campaigns":
            for (let i = 0; i < sheetData.length; i++) {
                
                if (!sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                    && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                    if (sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "campaign") {
                        // FirstReport.sp_campaign.totalSpends += sheetData[i]["spend"]
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        firstReport.sp_campaign.totalSpends = firstReport.sp_campaign.totalSpends.plus(spend)
                        firstReport.sp_campaign.totalSales = firstReport.sp_campaign.totalSales.plus(sale)
                        firstReport.sp_campaign.totalClicks = firstReport.sp_campaign.totalClicks.plus(clicks)
                        firstReport.sp_campaign.totalOrders = firstReport.sp_campaign.totalOrders.plus(orders)
                    }
                }
                
                if (!sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                    && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                    
                    //thirdReport
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "broad") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.broad.totalSpends.sp_value = thirdReport.broad.totalSpends.sp_value.plus(spend)
                        thirdReport.broad.totalSales.sp_value = thirdReport.broad.totalSales.sp_value.plus(sale)
                        thirdReport.broad.totalClicks.sp_value = thirdReport.broad.totalClicks.sp_value.plus(clicks)
                        thirdReport.broad.totalOrders.sp_value = thirdReport.broad.totalOrders.sp_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "exact") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.exact.totalSpends.sp_value = thirdReport.exact.totalSpends.sp_value.plus(spend)
                        thirdReport.exact.totalSales.sp_value = thirdReport.exact.totalSales.sp_value.plus(sale)
                        thirdReport.exact.totalClicks.sp_value = thirdReport.exact.totalClicks.sp_value.plus(clicks)
                        thirdReport.exact.totalOrders.sp_value = thirdReport.exact.totalOrders.sp_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "phrase") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.phrase.totalSpends.sp_value = thirdReport.phrase.totalSpends.sp_value.plus(spend)
                        thirdReport.phrase.totalSales.sp_value = thirdReport.phrase.totalSales.sp_value.plus(sale)
                        thirdReport.phrase.totalClicks.sp_value = thirdReport.phrase.totalClicks.sp_value.plus(clicks)
                        thirdReport.phrase.totalOrders.sp_value = thirdReport.phrase.totalOrders.sp_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && (sheetData[i]["producttargetingexpression"].toLowerCase().includes("asin") || sheetData[i]["producttargetingexpression"].toLowerCase().includes("category"))) {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.product_category.totalSpends.sp_value = thirdReport.product_category.totalSpends.sp_value.plus(spend)
                        thirdReport.product_category.totalSales.sp_value = thirdReport.product_category.totalSales.sp_value.plus(sale)
                        thirdReport.product_category.totalClicks.sp_value = thirdReport.product_category.totalClicks.sp_value.plus(clicks)
                        thirdReport.product_category.totalOrders.sp_value = thirdReport.product_category.totalOrders.sp_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && (sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "loose-match" || sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "close-match" || sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "complements" || sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "substitutes")) {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        if (sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "loose-match") {
                            thirdReport.auto.totalSpends.sp.loos = thirdReport.auto.totalSpends.sp.loos.plus(spend)
                            thirdReport.auto.totalSales.sp.loos = thirdReport.auto.totalSales.sp.loos.plus(sale)
                            thirdReport.auto.totalClicks.sp.loos = thirdReport.auto.totalClicks.sp.loos.plus(clicks)
                            thirdReport.auto.totalOrders.sp.loos = thirdReport.auto.totalOrders.sp.loos.plus(orders)
                        }
                        if (sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "close-match") {
                            thirdReport.auto.totalSpends.sp.close = thirdReport.auto.totalSpends.sp.close.plus(spend)
                            thirdReport.auto.totalSales.sp.close = thirdReport.auto.totalSales.sp.close.plus(sale)
                            thirdReport.auto.totalClicks.sp.close = thirdReport.auto.totalClicks.sp.close.plus(clicks)
                            thirdReport.auto.totalOrders.sp.close = thirdReport.auto.totalOrders.sp.close.plus(orders)
                        }
                        if (sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "substitutes") {
                            thirdReport.auto.totalSpends.sp.substitutes = thirdReport.auto.totalSpends.sp.substitutes.plus(spend)
                            thirdReport.auto.totalSales.sp.substitutes = thirdReport.auto.totalSales.sp.substitutes.plus(sale)
                            thirdReport.auto.totalClicks.sp.substitutes = thirdReport.auto.totalClicks.sp.substitutes.plus(clicks)
                            thirdReport.auto.totalOrders.sp.substitutes = thirdReport.auto.totalOrders.sp.substitutes.plus(orders)
                        }
                        if (sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") == "complements") {
                            thirdReport.auto.totalSpends.sp.complements = thirdReport.auto.totalSpends.sp.complements.plus(spend)
                            thirdReport.auto.totalSales.sp.complements = thirdReport.auto.totalSales.sp.complements.plus(sale)
                            thirdReport.auto.totalClicks.sp.complements = thirdReport.auto.totalClicks.sp.complements.plus(clicks)
                            thirdReport.auto.totalOrders.sp.complements = thirdReport.auto.totalOrders.sp.complements.plus(orders)
                        }
                        thirdReport.auto.totalSpends.sp.value = thirdReport.auto.totalSpends.sp.value.plus(spend)
                        thirdReport.auto.totalSales.sp.value = thirdReport.auto.totalSales.sp.value.plus(sale)
                        thirdReport.auto.totalClicks.sp.value = thirdReport.auto.totalClicks.sp.value.plus(clicks)
                        thirdReport.auto.totalOrders.sp.value = thirdReport.auto.totalOrders.sp.value.plus(orders)

                        thirdReport.auto.totalSpends.sp_value = thirdReport.auto.totalSpends.sp_value.plus(spend)
                        thirdReport.auto.totalSales.sp_value = thirdReport.auto.totalSales.sp_value.plus(sale)
                        thirdReport.auto.totalClicks.sp_value = thirdReport.auto.totalClicks.sp_value.plus(clicks)
                        thirdReport.auto.totalOrders.sp_value = thirdReport.auto.totalOrders.sp_value.plus(orders)
                    }

                    // if (!sheetData[i]["producttargetingexpression"].toLowerCase().includes("asin") && !sheetData[i]["producttargetingexpression"].toLowerCase().includes("category") && sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") != "loose-match" && sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") != "close-match" && sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") != "complements" && sheetData[i]["producttargetingexpression"].toLowerCase().replaceAll(" ", "") != "substitutes") {
                    //     let spend = new Decimal(sheetData[i]["spend"])
                    //     let sale = new Decimal(sheetData[i]["sales"])
                    //     let clicks = new Decimal(sheetData[i]["clicks"])
                    //     let orders = new Decimal(sheetData[i]["orders"])

                    //     thirdReport.others.totalSpends.sp_value = thirdReport.others.totalSpends.sp_value.plus(spend)
                    //     thirdReport.others.totalSales.sp_value = thirdReport.others.totalSales.sp_value.plus(sale)
                    //     thirdReport.others.totalClicks.sp_value = thirdReport.others.totalClicks.sp_value.plus(clicks)
                    //     thirdReport.others.totalOrders.sp_value = thirdReport.others.totalOrders.sp_value.plus(orders)
                    // }
                    //endThirdReport

                    //forthReport

                    //brandA

                    for (let x = 0; x < forthReport.brandA.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandA.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandA.asins[x].sp_value = forthReport.brandA.asins[x].sp_value.plus(spend.div(asins.length))
                            forthReport.brandA.totalSpends.sp_value = forthReport.brandA.totalSpends.sp_value.plus(spend.div(asins.length))
                            forthReport.brandA.totalSales.sp_value = forthReport.brandA.totalSales.sp_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandB
                    for (let x = 0; x < forthReport.brandB.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandB.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandB.asins[x].sp_value = forthReport.brandB.asins[x].sp_value.plus(spend.div(asins.length))
                            forthReport.brandB.totalSpends.sp_value = forthReport.brandB.totalSpends.sp_value.plus(spend.div(asins.length))
                            forthReport.brandB.totalSales.sp_value = forthReport.brandB.totalSales.sp_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandC
                    for (let x = 0; x < forthReport.brandC.asins.length; x++) {
                        // @ts-ignore
                        if(sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandC.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandC.asins[x].sp_value = forthReport.brandC.asins[x].sp_value.plus(spend.div(asins.length))
                            forthReport.brandC.totalSpends.sp_value = forthReport.brandC.totalSpends.sp_value.plus(spend.div(asins.length))
                            forthReport.brandC.totalSales.sp_value = forthReport.brandC.totalSales.sp_value.plus(sale.div(asins.length))
                        }
                    }
                }

                //secReport
                if (sheetData[i]["placement"].toLowerCase().replaceAll(" ", "") == "placementrestofsearch"
                ) {
                    let spend = new Decimal(sheetData[i]["spend"])
                    let sale = new Decimal(sheetData[i]["sales"])
                    let clicks = new Decimal(sheetData[i]["clicks"])
                    let orders = new Decimal(sheetData[i]["orders"])
                    secReport.rest_search.totalSpends = secReport.rest_search.totalSpends.plus(spend)
                    secReport.rest_search.totalSales = secReport.rest_search.totalSales.plus(sale)
                    secReport.rest_search.totalClicks = secReport.rest_search.totalClicks.plus(clicks)
                    secReport.rest_search.totalOrders = secReport.rest_search.totalOrders.plus(orders)
                }
                if (sheetData[i]["placement"].toLowerCase().replaceAll(" ", "") == "placementtop"
                ) {
                    let spend = new Decimal(sheetData[i]["spend"])
                    let sale = new Decimal(sheetData[i]["sales"])
                    let clicks = new Decimal(sheetData[i]["clicks"])
                    let orders = new Decimal(sheetData[i]["orders"])
                    secReport.top_search.totalSpends = secReport.top_search.totalSpends.plus(spend)
                    secReport.top_search.totalSales = secReport.top_search.totalSales.plus(sale)
                    secReport.top_search.totalClicks = secReport.top_search.totalClicks.plus(clicks)
                    secReport.top_search.totalOrders = secReport.top_search.totalOrders.plus(orders)
                }
                if (sheetData[i]["placement"].toLowerCase().replaceAll(" ", "") != "" && sheetData[i]["placement"].toLowerCase().replaceAll(" ", "") != "placementrestofsearch" && sheetData[i]["placement"].toLowerCase().replaceAll(" ", "") != "placementtop") {
                    let spend = new Decimal(sheetData[i]["spend"])
                    let sale = new Decimal(sheetData[i]["sales"])
                    let clicks = new Decimal(sheetData[i]["clicks"])
                    let orders = new Decimal(sheetData[i]["orders"])
                    secReport.other.totalSpends = secReport.other.totalSpends.plus(spend)
                    secReport.other.totalSales = secReport.other.totalSales.plus(sale)
                    secReport.other.totalClicks = secReport.other.totalClicks.plus(clicks)
                    secReport.other.totalOrders = secReport.other.totalOrders.plus(orders)
                }
                //endSecReport
            }
            //secReport
            secReport.other.acos = secReport.other.totalSpends.div(secReport.other.totalSales)
            secReport.other.cvr = secReport.other.totalOrders.div(secReport.other.totalClicks)
            secReport.top_search.acos = secReport.top_search.totalSpends.div(secReport.top_search.totalSales)
            secReport.top_search.cvr = secReport.top_search.totalOrders.div(secReport.top_search.totalClicks)
            secReport.rest_search.acos = secReport.rest_search.totalSpends.div(secReport.rest_search.totalSales)
            secReport.rest_search.cvr = secReport.rest_search.totalOrders.div(secReport.rest_search.totalClicks)
            //endSecReport
            //firstReport
            firstReport.sp_campaign.acos = firstReport.sp_campaign.totalSpends.div(firstReport.sp_campaign.totalSales)
            firstReport.sp_campaign.cvr = firstReport.sp_campaign.totalOrders.div(firstReport.sp_campaign.totalClicks)
            //endfirstReport
            //thirdReport

            thirdReport.broad.acos.sp_value = thirdReport.broad.totalSpends.sp_value.div(thirdReport.broad.totalSales.sp_value)
            thirdReport.broad.cvr.sp_value = thirdReport.broad.totalOrders.sp_value.div(thirdReport.broad.totalClicks.sp_value)

            thirdReport.exact.acos.sp_value = thirdReport.exact.totalSpends.sp_value.div(thirdReport.exact.totalSales.sp_value)
            thirdReport.exact.cvr.sp_value = thirdReport.exact.totalOrders.sp_value.div(thirdReport.exact.totalClicks.sp_value)

            thirdReport.phrase.acos.sp_value = thirdReport.phrase.totalSpends.sp_value.div(thirdReport.phrase.totalSales.sp_value)
            thirdReport.phrase.cvr.sp_value = thirdReport.phrase.totalOrders.sp_value.div(thirdReport.phrase.totalClicks.sp_value)

            thirdReport.product_category.acos.sp_value = thirdReport.product_category.totalSpends.sp_value.div(thirdReport.product_category.totalSales.sp_value)
            thirdReport.product_category.cvr.sp_value = thirdReport.product_category.totalOrders.sp_value.div(thirdReport.product_category.totalClicks.sp_value)

            thirdReport.auto.acos.sp.value = thirdReport.auto.totalSpends.sp.value.div(thirdReport.auto.totalSales.sp.value)
            thirdReport.auto.cvr.sp.value = thirdReport.auto.totalOrders.sp.value.div(thirdReport.auto.totalClicks.sp.value)
            thirdReport.auto.acos.sp.loos = thirdReport.auto.totalSpends.sp.loos.div(thirdReport.auto.totalSales.sp.loos)
            thirdReport.auto.cvr.sp.loos = thirdReport.auto.totalOrders.sp.loos.div(thirdReport.auto.totalClicks.sp.loos)
            thirdReport.auto.acos.sp.close = thirdReport.auto.totalSpends.sp.close.div(thirdReport.auto.totalSales.sp.close)
            thirdReport.auto.cvr.sp.close = thirdReport.auto.totalOrders.sp.close.div(thirdReport.auto.totalClicks.sp.close)
            thirdReport.auto.acos.sp.substitutes = thirdReport.auto.totalSpends.sp.substitutes.div(thirdReport.auto.totalSales.sp.substitutes)
            thirdReport.auto.cvr.sp.substitutes = thirdReport.auto.totalOrders.sp.substitutes.div(thirdReport.auto.totalClicks.sp.substitutes)
            thirdReport.auto.acos.sp.complements = thirdReport.auto.totalSpends.sp.complements.div(thirdReport.auto.totalSales.sp.complements)
            thirdReport.auto.cvr.sp.complements = thirdReport.auto.totalOrders.sp.complements.div(thirdReport.auto.totalClicks.sp.complements)

            //endThirdReport

            //forthReport 
            forthReport.brandA.acos.sp_value = forthReport.brandA.totalSpends.sp_value.div(forthReport.brandA.totalSales.sp_value)
            forthReport.brandB.acos.sp_value = forthReport.brandB.totalSpends.sp_value.div(forthReport.brandB.totalSales.sp_value)
            forthReport.brandC.acos.sp_value = forthReport.brandC.totalSpends.sp_value.div(forthReport.brandC.totalSales.sp_value)
            break;
        case "sponsored brands campaigns":
            for (let i = 0; i < sheetData.length; i++) {
                //firstReport
                if (!sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                    && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                    if (sheetData[i]["entity"].toLowerCase() == "campaign") {
                        // FirstReport.sb_campaign.totalSpends += sheetData[i]["spend"]
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        firstReport.sb_campaign.totalSpends = firstReport.sb_campaign.totalSpends.plus(spend)
                        firstReport.sb_campaign.totalSales = firstReport.sb_campaign.totalSales.plus(sale)
                        firstReport.sb_campaign.totalClicks = firstReport.sb_campaign.totalClicks.plus(clicks)
                        firstReport.sb_campaign.totalOrders = firstReport.sb_campaign.totalOrders.plus(orders)
                    }
                }
                if (!sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                    && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                    //thirdReport
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "broad") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.broad.totalSpends.sb_value = thirdReport.broad.totalSpends.sb_value.plus(spend)
                        thirdReport.broad.totalSales.sb_value = thirdReport.broad.totalSales.sb_value.plus(sale)
                        thirdReport.broad.totalClicks.sb_value = thirdReport.broad.totalClicks.sb_value.plus(clicks)
                        thirdReport.broad.totalOrders.sb_value = thirdReport.broad.totalOrders.sb_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "exact") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.exact.totalSpends.sb_value = thirdReport.exact.totalSpends.sb_value.plus(spend)
                        thirdReport.exact.totalSales.sb_value = thirdReport.exact.totalSales.sb_value.plus(sale)
                        thirdReport.exact.totalClicks.sb_value = thirdReport.exact.totalClicks.sb_value.plus(clicks)
                        thirdReport.exact.totalOrders.sb_value = thirdReport.exact.totalOrders.sb_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["matchtype"].toLowerCase().replaceAll(" ", "") == "phrase") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.phrase.totalSpends.sb_value = thirdReport.phrase.totalSpends.sb_value.plus(spend)
                        thirdReport.phrase.totalSales.sb_value = thirdReport.phrase.totalSales.sb_value.plus(sale)
                        thirdReport.phrase.totalClicks.sb_value = thirdReport.phrase.totalClicks.sb_value.plus(clicks)
                        thirdReport.phrase.totalOrders.sb_value = thirdReport.phrase.totalOrders.sb_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["producttargetingexpression"].toLowerCase().includes("asin") || sheetData[i]["producttargetingexpression"].toLowerCase().includes("category")) {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.product_category.totalSpends.sb_value = thirdReport.product_category.totalSpends.sb_value.plus(spend)
                        thirdReport.product_category.totalSales.sb_value = thirdReport.product_category.totalSales.sb_value.plus(sale)
                        thirdReport.product_category.totalClicks.sb_value = thirdReport.product_category.totalClicks.sb_value.plus(clicks)
                        thirdReport.product_category.totalOrders.sb_value = thirdReport.product_category.totalOrders.sb_value.plus(orders)
                    }
                    if ((sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "keyword" || sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "producttargeting") && sheetData[i]["producttargetingexpression"].toLowerCase() == "loose-match" || sheetData[i]["producttargetingexpression"].toLowerCase() == "close-match" || sheetData[i]["producttargetingexpression"].toLowerCase() == "complements" || sheetData[i]["producttargetingexpression"].toLowerCase() == "substitutes") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.auto.totalSpends.sb_value = thirdReport.auto.totalSpends.sb_value.plus(spend)
                        thirdReport.auto.totalSales.sb_value = thirdReport.auto.totalSales.sb_value.plus(sale)
                        thirdReport.auto.totalClicks.sb_value = thirdReport.auto.totalClicks.sb_value.plus(clicks)
                        thirdReport.auto.totalOrders.sb_value = thirdReport.auto.totalOrders.sb_value.plus(orders)
                    }
                    // if (!sheetData[i]["producttargetingexpression"].toLowerCase().includes("asin") && !sheetData[i]["producttargetingexpression"].toLowerCase().includes("category") &&
                    //     sheetData[i]["producttargetingexpression"].toLowerCase() != "loose-match" && sheetData[i]["producttargetingexpression"].toLowerCase() != "close-match" && sheetData[i]["producttargetingexpression"].toLowerCase() != "complements" && sheetData[i]["producttargetingexpression"].toLowerCase() != "substitutes") {
                    //     let spend = new Decimal(sheetData[i]["spend"])
                    //     let sale = new Decimal(sheetData[i]["sales"])
                    //     let clicks = new Decimal(sheetData[i]["clicks"])
                    //     let orders = new Decimal(sheetData[i]["orders"])
                    //     thirdReport.others.totalSpends.sb_value = thirdReport.others.totalSpends.sb_value.plus(spend)
                    //     thirdReport.others.totalSales.sb_value = thirdReport.others.totalSales.sb_value.plus(sale)
                    //     thirdReport.others.totalClicks.sb_value = thirdReport.others.totalClicks.sb_value.plus(clicks)
                    //     thirdReport.others.totalOrders.sb_value = thirdReport.others.totalOrders.sb_value.plus(orders)
                    // }

                    //endThirdReport

                    //forthReport

                    //brandA
                    for (let x = 0; x < forthReport.brandA.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["creativeasins"].toLowerCase().includes(forthReport.brandA.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["creativeasins"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandA.asins[x].totalSpends_SB = forthReport.brandA.asins[x].totalSpends_SB.plus(spend.div(asins.length))
                            forthReport.brandA.totalSpends.sb_value = forthReport.brandA.totalSpends.sb_value.plus(spend.div(asins.length))
                            forthReport.brandA.totalSales.sb_value = forthReport.brandA.totalSales.sb_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandB
                    for (let x = 0; x < forthReport.brandB.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["creativeasins"].toLowerCase().includes(forthReport.brandB.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["creativeasins"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandB.asins[x].totalSpends_SB = forthReport.brandB.asins[x].totalSpends_SB.plus(spend.div(asins.length))
                            forthReport.brandB.totalSpends.sb_value = forthReport.brandB.totalSpends.sb_value.plus(spend.div(asins.length))
                            forthReport.brandB.totalSales.sb_value = forthReport.brandB.totalSales.sb_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandC
                    for (let x = 0; x < forthReport.brandC.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["creativeasins"].toLowerCase().includes(forthReport.brandC.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["creativeasins"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandC.asins[x].totalSpends_SB = forthReport.brandC.asins[x].totalSpends_SB.plus(spend.div(asins.length))
                            forthReport.brandC.totalSpends.sb_value = forthReport.brandC.totalSpends.sb_value.plus(spend.div(asins.length))
                            forthReport.brandC.totalSales.sb_value = forthReport.brandC.totalSales.sb_value.plus(sale.div(asins.length))
                        }
                    }
                }
            }
            //endfirstReport
            //firstReport
            firstReport.sb_campaign.acos = firstReport.sb_campaign.totalSpends.div(firstReport.sb_campaign.totalSales)
            firstReport.sb_campaign.cvr = firstReport.sb_campaign.totalOrders.div(firstReport.sb_campaign.totalClicks)
            //endfirstReport
            //thirdReport


            thirdReport.broad.acos.sb_value = thirdReport.broad.totalSpends.sb_value.div(thirdReport.broad.totalSales.sb_value)
            thirdReport.broad.cvr.sb_value = thirdReport.broad.totalOrders.sb_value.div(thirdReport.broad.totalClicks.sb_value)

            thirdReport.exact.acos.sb_value = thirdReport.exact.totalSpends.sb_value.div(thirdReport.exact.totalSales.sb_value)
            thirdReport.exact.cvr.sb_value = thirdReport.exact.totalOrders.sb_value.div(thirdReport.exact.totalClicks.sb_value)

            thirdReport.phrase.acos.sb_value = thirdReport.phrase.totalSpends.sb_value.div(thirdReport.phrase.totalSales.sb_value)
            thirdReport.phrase.cvr.sb_value = thirdReport.phrase.totalOrders.sb_value.div(thirdReport.phrase.totalClicks.sb_value)


            thirdReport.product_category.acos.sb_value = thirdReport.product_category.totalSpends.sb_value.div(thirdReport.product_category.totalSales.sb_value)
            thirdReport.product_category.cvr.sb_value = thirdReport.product_category.totalOrders.sb_value.div(thirdReport.product_category.totalClicks.sb_value)


            thirdReport.auto.acos.sb_value = thirdReport.auto.totalSpends.sb_value.div(thirdReport.auto.totalSales.sb_value)
            thirdReport.auto.cvr.sb_value = thirdReport.auto.totalOrders.sb_value.div(thirdReport.auto.totalClicks.sb_value)

            //endThirdReport
            //forthReport 
            forthReport.brandA.acos.sb_value = forthReport.brandA.totalSpends.sb_value.div(forthReport.brandA.totalSales.sb_value)
            forthReport.brandB.acos.sb_value = forthReport.brandB.totalSpends.sb_value.div(forthReport.brandB.totalSales.sb_value)
            forthReport.brandC.acos.sb_value = forthReport.brandC.totalSpends.sb_value.div(forthReport.brandC.totalSales.sb_value)
            break;
        case "sponsored display campaigns":
            for (let i = 0; i < sheetData.length; i++) {
                if (!sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                    && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                    if (sheetData[i]["entity"].toLowerCase() == "campaign") {
                        // FirstReport.sd_campaign.totalSpends += sheetData[i]["spend"]
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        firstReport.sd_campaign.totalSpends = firstReport.sd_campaign.totalSpends.plus(spend)
                        firstReport.sd_campaign.totalSales = firstReport.sd_campaign.totalSales.plus(sale)
                        firstReport.sd_campaign.totalClicks = firstReport.sd_campaign.totalClicks.plus(clicks)
                        firstReport.sd_campaign.totalOrders = firstReport.sd_campaign.totalOrders.plus(orders)
                    }
                    //brandA
                    for (let x = 0; x < forthReport.brandA.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandA.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandA.asins[x].totalSpends_SD = forthReport.brandA.asins[x].totalSpends_SD.plus(spend.div(asins.length))
                            forthReport.brandA.totalSpends.sd_value = forthReport.brandA.totalSpends.sd_value.plus(spend.div(asins.length))
                            forthReport.brandA.totalSales.sd_value = forthReport.brandA.totalSales.sd_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandB
                    for (let x = 0; x < forthReport.brandB.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandB.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandB.asins[x].totalSpends_SD = forthReport.brandB.asins[x].totalSpends_SD.plus(spend.div(asins.length))
                            forthReport.brandB.totalSpends.sd_value = forthReport.brandB.totalSpends.sd_value.plus(spend.div(asins.length))
                            forthReport.brandB.totalSales.sd_value = forthReport.brandB.totalSales.sd_value.plus(sale.div(asins.length))
                        }
                    }
                    //brandC
                    for (let x = 0; x < forthReport.brandC.asins.length; x++) {
                        // @ts-ignore
                        if (sheetData[i]["asin(informationalonly)"].toLowerCase().includes(forthReport.brandC.asins[x].name.toLowerCase())
                            && !sheetData[i]["campaignstate(informationalonly)"].toLowerCase().includes("paused")
                            && sheetData[i]["state"].toLowerCase().includes("enabled")) {
                            let asins = sheetData[i]["asin(informationalonly)"].split(",");
                            let spend = new Decimal(sheetData[i]["spend"])
                            let sale = new Decimal(sheetData[i]["sales"])
                            // @ts-ignore
                            forthReport.brandC.asins[x].totalSpends_SD = forthReport.brandC.asins[x].totalSpends_SD.plus(spend.div(asins.length))
                            forthReport.brandC.totalSpends.sd_value = forthReport.brandC.totalSpends.sd_value.plus(spend.div(asins.length))
                            forthReport.brandC.totalSales.sd_value = forthReport.brandC.totalSales.sd_value.plus(sale.div(asins.length))
                        }
                    }
                    if (sheetData[i]["entity"].toLowerCase().replaceAll(" ", "") == "contextualtargeting") {
                        let spend = new Decimal(sheetData[i]["spend"])
                        let sale = new Decimal(sheetData[i]["sales"])
                        let clicks = new Decimal(sheetData[i]["clicks"])
                        let orders = new Decimal(sheetData[i]["orders"])
                        thirdReport.others.totalSpends.sd_value = thirdReport.others.totalSpends.sd_value.plus(spend)
                        thirdReport.others.totalSales.sd_value = thirdReport.others.totalSales.sd_value.plus(sale)
                        thirdReport.others.totalClicks.sd_value = thirdReport.others.totalClicks.sd_value.plus(clicks)
                        thirdReport.others.totalOrders.sd_value = thirdReport.others.totalOrders.sd_value.plus(orders)
                    }
                }
            }
            firstReport.sd_campaign.acos = firstReport.sd_campaign.totalSpends.div(firstReport.sd_campaign.totalSales)
            firstReport.sd_campaign.cvr = firstReport.sd_campaign.totalOrders.div(firstReport.sd_campaign.totalClicks)
            //forthReport 
            forthReport.brandA.acos.sd_value = forthReport.brandA.totalSpends.sd_value.div(forthReport.brandA.totalSales.sd_value)
            forthReport.brandB.acos.sd_value = forthReport.brandB.totalSpends.sd_value.div(forthReport.brandB.totalSales.sd_value)
            forthReport.brandC.acos.sd_value = forthReport.brandC.totalSpends.sd_value.div(forthReport.brandC.totalSales.sd_value)
            break;
    }
}

// Function to handle the brand data
function handleBrand(count: number, sheetData: any[], type: string, limit: boolean = true): void {
    let total = new Decimal(0);

    for (let i = count; i < sheetData.length; i++) {
        let sales = new Decimal(
            typeof sheetData[i]["orderedproductsales"] === "number" 
            ? sheetData[i]["orderedproductsales"] 
            : sheetData[i]["orderedproductsales"].replace(/[^0-9.,]/g, '').replace(/,/g, '')
        );
        
        total = total.plus(sales);

        // @ts-ignore
        if ((total.lessThanOrEqualTo(forthReport[type]["value"]) || limit === false)) {
            // @ts-ignore
            let indexA = forthReport["brandA"]["asins"].findIndex((asin: ASIN) => asin.name === sheetData[i]["(child)asin"]);
            // @ts-ignore
            let indexB = forthReport["brandB"]["asins"].findIndex((asin: ASIN) => asin.name === sheetData[i]["(child)asin"]);
            // @ts-ignore
            let indexC = forthReport["brandC"]["asins"].findIndex((asin: ASIN) => asin.name === sheetData[i]["(child)asin"]);

            if (indexA === -1 && indexB === -1 && indexC === -1) {
                // @ts-ignore
                forthReport[type]["asins"].push({
                    name: sheetData[i]["(child)asin"],
                    sp_value: new Decimal(0),
                    totalSpends_SB: new Decimal(0),
                    totalSpends_SD: new Decimal(0),
                });
            }
        } else {
            break;
        }
    }
    // console.log(forthReport);
}

// Function to process sales reports
function processSalesReports(sheetData: any[], sheetName: string): void {
    sheetData = sheetData.map(convertKeysToLowercaseAndRemoveSpaces);

    sheetData.sort((a, b) => 
        new Decimal(
            typeof b.orderedproductsales === "number" 
            ? b.orderedproductsales 
            : b.orderedproductsales.replace(/[^0-9.,]/g, '').replace(/,/g, '')
        ).minus(
            typeof a.orderedproductsales === "number" 
            ? a.orderedproductsales 
            : a.orderedproductsales.replace(/[^0-9.,]/g, '').replace(/,/g, '')
        ).toNumber()
    );
    
    for (let i = 0; i < sheetData.length; i++) {
        let sales = new Decimal(
            typeof sheetData[i]["orderedproductsales"] === "number" 
            ? sheetData[i]["orderedproductsales"] 
            : sheetData[i]["orderedproductsales"].replace(/[^0-9.,]/g, '').replace(/,/g, '')
        );
        forthReport.totalOrderedSales = forthReport.totalOrderedSales.plus(sales);
    }

    // @ts-ignore
    forthReport.brandA.value = forthReport.totalOrderedSales.mul(0.5);
    // @ts-ignore
    forthReport.brandB.value = forthReport.totalOrderedSales.mul(0.3);
    // @ts-ignore
    forthReport.brandC.value = forthReport.totalOrderedSales.mul(0.2);

    let count = 0;
    handleBrand(0, sheetData, "brandA");
    count = forthReport.brandA.asins.length;
    handleBrand(count, sheetData, "brandB");
    count += forthReport.brandB.asins.length;
    handleBrand(count, sheetData, "brandC", false);
}



// @ts-ignore
async function analyseReport(workbook, type: string) {
    // Get the first sheet
    const sheetNames = workbook.SheetNames;
    // Process the data in chunks to avoid blocking the UI
    const chunkSize = 2000; // Process 1000 rows at a time
    for (const sheetName of sheetNames) {
        const sheetData = utils.sheet_to_json(workbook.Sheets[sheetName]);
        for (let i = 0; i < sheetData.length; i += chunkSize) {
            const chunk = sheetData.slice(i, i + chunkSize);
            if (type == "main") {
                proccessMianReports(chunk, sheetName);
            }
            if (type == "sales") {
                processSalesReports(chunk, sheetName);
            }
            await new Promise(resolve => setTimeout(resolve, 0)); // Yield to the event loop
        }

    }
    if (type == "main") {
        //firstReport
        //totalSpends
        firstReport.total.totalSpends = firstReport.total.totalSpends.plus(firstReport.sp_campaign.totalSpends).plus(firstReport.sb_campaign.totalSpends).plus(firstReport.sd_campaign.totalSpends)
        //totalSales
        firstReport.total.totalSales = firstReport.total.totalSales.plus(firstReport.sp_campaign.totalSales).plus(firstReport.sb_campaign.totalSales).plus(firstReport.sd_campaign.totalSales)
        //totalClicks
        firstReport.total.totalClicks = firstReport.total.totalClicks.plus(firstReport.sp_campaign.totalClicks).plus(firstReport.sb_campaign.totalClicks).plus(firstReport.sd_campaign.totalClicks)
        //totalOrders
        firstReport.total.totalOrders = firstReport.total.totalOrders.plus(firstReport.sp_campaign.totalOrders).plus(firstReport.sb_campaign.totalOrders).plus(firstReport.sd_campaign.totalOrders)
        //acos
        firstReport.total.acos = firstReport.total.totalSpends.div(firstReport.total.totalSales)
        //cvr
        firstReport.total.cvr = firstReport.total.totalOrders.div(firstReport.total.totalClicks)

        /// spends for every compaine %
        firstReport.sb_campaign.spends = firstReport.sb_campaign.totalSpends.mul(100).div(firstReport.total.totalSpends)
        firstReport.sp_campaign.spends = firstReport.sp_campaign.totalSpends.mul(100).div(firstReport.total.totalSpends)
        firstReport.sd_campaign.spends = firstReport.sd_campaign.totalSpends.mul(100).div(firstReport.total.totalSpends)
        /// sales for every compaine %
        firstReport.sb_campaign.sales = firstReport.sb_campaign.totalSales.mul(100).div(firstReport.total.totalSales)
        firstReport.sp_campaign.sales = firstReport.sp_campaign.totalSales.mul(100).div(firstReport.total.totalSales)
        firstReport.sd_campaign.sales = firstReport.sd_campaign.totalSales.mul(100).div(firstReport.total.totalSales)

        //endfirstReport



        //secReport
        //totalSpends
        secReport.total.totalSpends = secReport.total.totalSpends.plus(secReport.top_search.totalSpends).plus(secReport.rest_search.totalSpends).plus(secReport.other.totalSpends)
        //totalSales
        secReport.total.totalSales = secReport.total.totalSales.plus(secReport.top_search.totalSales).plus(secReport.rest_search.totalSales).plus(secReport.other.totalSales)
        //totalClicks
        secReport.total.totalClicks = secReport.total.totalClicks.plus(secReport.top_search.totalClicks).plus(secReport.rest_search.totalClicks).plus(secReport.other.totalClicks)
        //totalOrders
        secReport.total.totalOrders = secReport.total.totalOrders.plus(secReport.top_search.totalOrders).plus(secReport.rest_search.totalOrders).plus(secReport.other.totalOrders)
        //acos
        secReport.total.acos = secReport.total.totalSpends.div(secReport.total.totalSales)
        //cvr
        secReport.total.cvr = secReport.total.totalOrders.div(secReport.total.totalClicks)

        /// spends for every compaine %
        secReport.top_search.spends = secReport.top_search.totalSpends.mul(100).div(secReport.total.totalSpends)
        secReport.rest_search.spends = secReport.rest_search.totalSpends.mul(100).div(secReport.total.totalSpends)
        secReport.other.spends = secReport.other.totalSpends.mul(100).div(secReport.total.totalSpends)
        /// sales for every compaine %
        secReport.top_search.sales = secReport.top_search.totalSales.mul(100).div(secReport.total.totalSales)
        secReport.rest_search.sales = secReport.rest_search.totalSales.mul(100).div(secReport.total.totalSales)
        secReport.other.sales = secReport.other.totalSales.mul(100).div(secReport.total.totalSales)

        //endsecReport

        //thirdReport
        //totalSpends
        //SP
        thirdReport.total.totalSpends.sp_value = thirdReport.total.totalSpends.sp_value.plus(thirdReport.broad.totalSpends.sp_value).plus(thirdReport.exact.totalSpends.sp_value).plus(thirdReport.phrase.totalSpends.sp_value).plus(thirdReport.auto.totalSpends.sp.value).plus(thirdReport.product_category.totalSpends.sp_value)
        //totalSales
        thirdReport.total.totalSales.sp_value = thirdReport.total.totalSales.sp_value.plus(thirdReport.broad.totalSales.sp_value).plus(thirdReport.exact.totalSales.sp_value).plus(thirdReport.phrase.totalSales.sp_value).plus(thirdReport.auto.totalSales.sp.value).plus(thirdReport.product_category.totalSales.sp_value)
        //totalClicks
        thirdReport.total.totalClicks.sp_value = thirdReport.total.totalClicks.sp_value.plus(thirdReport.broad.totalClicks.sp_value).plus(thirdReport.exact.totalClicks.sp_value).plus(thirdReport.phrase.totalClicks.sp_value).plus(thirdReport.auto.totalClicks.sp.value).plus(thirdReport.product_category.totalClicks.sp_value)
        //totalOrders
        thirdReport.total.totalOrders.sp_value = thirdReport.total.totalOrders.sp_value.plus(thirdReport.broad.totalOrders.sp_value).plus(thirdReport.exact.totalOrders.sp_value).plus(thirdReport.phrase.totalOrders.sp_value).plus(thirdReport.auto.totalOrders.sp.value).plus(thirdReport.product_category.totalOrders.sp_value)
        //acos
        thirdReport.total.acos.sp_value = thirdReport.total.totalSpends.sp_value.div(thirdReport.total.totalSales.sp_value)
        //cvr
        thirdReport.total.cvr.sp_value = thirdReport.total.totalOrders.sp_value.div(thirdReport.total.totalClicks.sp_value)

        /// spends for every compaine %
        thirdReport.broad.spends.sp_value = thirdReport.broad.totalSpends.sp_value.mul(100).div(thirdReport.total.totalSpends.sp_value)
        thirdReport.exact.spends.sp_value = thirdReport.exact.totalSpends.sp_value.mul(100).div(thirdReport.total.totalSpends.sp_value)
        thirdReport.phrase.spends.sp_value = thirdReport.phrase.totalSpends.sp_value.mul(100).div(thirdReport.total.totalSpends.sp_value)

        thirdReport.auto.spends.sp.value = thirdReport.auto.totalSpends.sp.value.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.auto.spends.sp.loos = thirdReport.auto.totalSpends.sp.loos.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.auto.spends.sp.close = thirdReport.auto.totalSpends.sp.close.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.auto.spends.sp.complements = thirdReport.auto.totalSpends.sp.complements.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.auto.spends.sp.substitutes = thirdReport.auto.totalSpends.sp.substitutes.mul(100).div(thirdReport.total.totalSpends.total)

        thirdReport.product_category.spends.sp_value = thirdReport.product_category.totalSpends.sp_value.mul(100).div(thirdReport.total.totalSpends.sp_value)
        /// sales for every compaine %
        thirdReport.broad.sales.sp_value = thirdReport.broad.totalSales.sp_value.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.exact.sales.sp_value = thirdReport.exact.totalSales.sp_value.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.phrase.sales.sp_value = thirdReport.phrase.totalSales.sp_value.mul(100).div(thirdReport.total.totalSales.sp_value)

        thirdReport.auto.sales.sp.value = thirdReport.auto.totalSales.sp.value.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.auto.sales.sp.loos = thirdReport.auto.totalSales.sp.loos.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.auto.sales.sp.close = thirdReport.auto.totalSales.sp.close.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.auto.sales.sp.complements = thirdReport.auto.totalSales.sp.complements.mul(100).div(thirdReport.total.totalSales.sp_value)
        thirdReport.auto.sales.sp.substitutes = thirdReport.auto.totalSales.sp.substitutes.mul(100).div(thirdReport.total.totalSales.sp_value)

        thirdReport.product_category.sales.sp_value = thirdReport.product_category.totalSales.sp_value.mul(100).div(thirdReport.total.totalSales.sp_value)

        // others 
        thirdReport.others.totalSpends.total = thirdReport.others.totalSpends.total.plus(thirdReport.others.totalSpends.sd_value)
        thirdReport.others.totalSales.total = thirdReport.others.totalSales.total.plus(thirdReport.others.totalSales.sd_value)
        thirdReport.others.totalClicks.total = thirdReport.others.totalClicks.total.plus(thirdReport.others.totalClicks.sd_value)
        thirdReport.others.totalOrders.total = thirdReport.others.totalOrders.total.plus(thirdReport.others.totalOrders.sd_value)

        thirdReport.total.totalSpends.sd_value = thirdReport.total.totalSpends.sd_value.plus(thirdReport.others.totalSpends.sd_value)
        thirdReport.total.totalSales.sd_value = thirdReport.total.totalSales.sd_value.plus(thirdReport.others.totalSales.sd_value)
        thirdReport.total.totalClicks.sd_value = thirdReport.total.totalClicks.sd_value.plus(thirdReport.others.totalClicks.sd_value)
        thirdReport.total.totalOrders.sd_value = thirdReport.total.totalOrders.sd_value.plus(thirdReport.others.totalOrders.sd_value)


        // console.log(thirdReport.others.totalSales.sd_value, "thirdReport.others.totalSales.sd_value")
        // console.log(thirdReport.total.totalSales.sd_value, "thirdReport.total.totalSales.sd_value")
        thirdReport.others.spends.sd_value = thirdReport.others.totalSpends.sd_value.mul(100).div(thirdReport.total.totalSpends.sd_value)
        thirdReport.others.sales.sd_value = thirdReport.others.totalSales.sd_value.mul(100).div(thirdReport.total.totalSales.sd_value)
        thirdReport.others.acos.sd_value = thirdReport.others.totalSpends.sd_value.div(thirdReport.others.totalSales.sd_value)
        thirdReport.others.cvr.sd_value = thirdReport.others.totalOrders.sd_value.div(thirdReport.others.totalClicks.sd_value)

        thirdReport.others.acos.total = thirdReport.others.totalSpends.total.div(thirdReport.others.totalSales.total)
        thirdReport.others.cvr.total = thirdReport.others.totalOrders.total.div(thirdReport.others.totalClicks.total)

        //SB
        thirdReport.total.totalSpends.sb_value = thirdReport.total.totalSpends.sb_value.plus(thirdReport.broad.totalSpends.sb_value).plus(thirdReport.exact.totalSpends.sb_value).plus(thirdReport.phrase.totalSpends.sb_value).plus(thirdReport.auto.totalSpends.sb_value).plus(thirdReport.product_category.totalSpends.sb_value)
        //totalSales
        thirdReport.total.totalSales.sb_value = thirdReport.total.totalSales.sb_value.plus(thirdReport.broad.totalSales.sb_value).plus(thirdReport.exact.totalSales.sb_value).plus(thirdReport.phrase.totalSales.sb_value).plus(thirdReport.auto.totalSales.sb_value).plus(thirdReport.product_category.totalSales.sb_value)
        //totalClicks
        thirdReport.total.totalClicks.sb_value = thirdReport.total.totalClicks.sb_value.plus(thirdReport.broad.totalClicks.sb_value).plus(thirdReport.exact.totalClicks.sb_value).plus(thirdReport.phrase.totalClicks.sb_value).plus(thirdReport.auto.totalClicks.sb_value).plus(thirdReport.product_category.totalClicks.sb_value)
        //totalOrders
        thirdReport.total.totalOrders.sb_value = thirdReport.total.totalOrders.sb_value.plus(thirdReport.broad.totalOrders.sb_value).plus(thirdReport.exact.totalOrders.sb_value).plus(thirdReport.phrase.totalOrders.sb_value).plus(thirdReport.auto.totalOrders.sb_value).plus(thirdReport.product_category.totalOrders.sb_value)
        //acos
        thirdReport.total.acos.sb_value = thirdReport.total.totalSpends.sb_value.div(thirdReport.total.totalSales.sb_value)
        //cvr
        thirdReport.total.cvr.sb_value = thirdReport.total.totalOrders.sb_value.div(thirdReport.total.totalClicks.sb_value)

        /// spends for every compaine %
        thirdReport.broad.spends.sb_value = thirdReport.broad.totalSpends.sb_value.mul(100).div(thirdReport.total.totalSpends.sb_value)
        thirdReport.exact.spends.sb_value = thirdReport.exact.totalSpends.sb_value.mul(100).div(thirdReport.total.totalSpends.sb_value)
        thirdReport.phrase.spends.sb_value = thirdReport.phrase.totalSpends.sb_value.mul(100).div(thirdReport.total.totalSpends.sb_value)
        thirdReport.auto.spends.sb_value = thirdReport.auto.totalSpends.sb_value.mul(100).div(thirdReport.total.totalSpends.sb_value)
        thirdReport.product_category.spends.sb_value = thirdReport.product_category.totalSpends.sb_value.mul(100).div(thirdReport.total.totalSpends.sb_value)
        /// sales for every compaine %
        thirdReport.broad.sales.sb_value = thirdReport.broad.totalSales.sb_value.mul(100).div(thirdReport.total.totalSales.sb_value)
        thirdReport.exact.sales.sb_value = thirdReport.exact.totalSales.sb_value.mul(100).div(thirdReport.total.totalSales.sb_value)
        thirdReport.phrase.sales.sb_value = thirdReport.phrase.totalSales.sb_value.mul(100).div(thirdReport.total.totalSales.sb_value)
        thirdReport.auto.sales.sb_value = thirdReport.auto.totalSales.sb_value.mul(100).div(thirdReport.total.totalSales.sb_value)
        thirdReport.product_category.sales.sb_value = thirdReport.product_category.totalSales.sb_value.mul(100).div(thirdReport.total.totalSales.sb_value)

        // 
        thirdReport.broad.totalSpends.total = thirdReport.broad.totalSpends.total.plus(thirdReport.broad.totalSpends.sp_value)
        thirdReport.broad.totalSales.total = thirdReport.broad.totalSales.total.plus(thirdReport.broad.totalSales.sp_value)
        thirdReport.broad.totalClicks.total = thirdReport.broad.totalClicks.total.plus(thirdReport.broad.totalClicks.sp_value)
        thirdReport.broad.totalOrders.total = thirdReport.broad.totalOrders.total.plus(thirdReport.broad.totalOrders.sp_value)

        thirdReport.exact.totalSpends.total = thirdReport.exact.totalSpends.total.plus(thirdReport.exact.totalSpends.sp_value)
        thirdReport.exact.totalSales.total = thirdReport.exact.totalSales.total.plus(thirdReport.exact.totalSales.sp_value)
        thirdReport.exact.totalClicks.total = thirdReport.exact.totalClicks.total.plus(thirdReport.exact.totalClicks.sp_value)
        thirdReport.exact.totalOrders.total = thirdReport.exact.totalOrders.total.plus(thirdReport.exact.totalOrders.sp_value)

        thirdReport.phrase.totalSpends.total = thirdReport.phrase.totalSpends.total.plus(thirdReport.phrase.totalSpends.sp_value)
        thirdReport.phrase.totalSales.total = thirdReport.phrase.totalSales.total.plus(thirdReport.phrase.totalSales.sp_value)
        thirdReport.phrase.totalClicks.total = thirdReport.phrase.totalClicks.total.plus(thirdReport.phrase.totalClicks.sp_value)
        thirdReport.phrase.totalOrders.total = thirdReport.phrase.totalOrders.total.plus(thirdReport.phrase.totalOrders.sp_value)

        thirdReport.auto.totalSpends.total = thirdReport.auto.totalSpends.total.plus(thirdReport.auto.totalSpends.sp.value)
        thirdReport.auto.totalSales.total = thirdReport.auto.totalSales.total.plus(thirdReport.auto.totalSales.sp.value)
        thirdReport.auto.totalClicks.total = thirdReport.auto.totalClicks.total.plus(thirdReport.auto.totalClicks.sp.value)
        thirdReport.auto.totalOrders.total = thirdReport.auto.totalOrders.total.plus(thirdReport.auto.totalOrders.sp.value)

        thirdReport.product_category.totalSpends.total = thirdReport.product_category.totalSpends.total.plus(thirdReport.product_category.totalSpends.sp_value)
        thirdReport.product_category.totalSales.total = thirdReport.product_category.totalSales.total.plus(thirdReport.product_category.totalSales.sp_value)
        thirdReport.product_category.totalClicks.total = thirdReport.product_category.totalClicks.total.plus(thirdReport.product_category.totalClicks.sp_value)
        thirdReport.product_category.totalOrders.total = thirdReport.product_category.totalOrders.total.plus(thirdReport.product_category.totalOrders.sp_value)


        //
        thirdReport.broad.totalSpends.total = thirdReport.broad.totalSpends.total.plus(thirdReport.broad.totalSpends.sb_value)
        thirdReport.broad.totalSales.total = thirdReport.broad.totalSales.total.plus(thirdReport.broad.totalSales.sb_value)
        thirdReport.broad.totalClicks.total = thirdReport.broad.totalClicks.total.plus(thirdReport.broad.totalClicks.sb_value)
        thirdReport.broad.totalOrders.total = thirdReport.broad.totalOrders.total.plus(thirdReport.broad.totalOrders.sb_value)
        thirdReport.broad.acos.total = thirdReport.broad.totalSpends.total.div(thirdReport.broad.totalSales.total)
        thirdReport.broad.cvr.total = thirdReport.broad.totalOrders.total.div(thirdReport.broad.totalClicks.total)

        thirdReport.exact.totalSpends.total = thirdReport.exact.totalSpends.total.plus(thirdReport.exact.totalSpends.sb_value)
        thirdReport.exact.totalSales.total = thirdReport.exact.totalSales.total.plus(thirdReport.exact.totalSales.sb_value)
        thirdReport.exact.totalClicks.total = thirdReport.exact.totalClicks.total.plus(thirdReport.exact.totalClicks.sb_value)
        thirdReport.exact.totalOrders.total = thirdReport.exact.totalOrders.total.plus(thirdReport.exact.totalOrders.sb_value)
        thirdReport.exact.acos.total = thirdReport.exact.totalSpends.total.div(thirdReport.exact.totalSales.total)
        thirdReport.exact.cvr.total = thirdReport.exact.totalOrders.total.div(thirdReport.exact.totalClicks.total)

        thirdReport.phrase.totalSpends.total = thirdReport.phrase.totalSpends.total.plus(thirdReport.phrase.totalSpends.sb_value)
        thirdReport.phrase.totalSales.total = thirdReport.phrase.totalSales.total.plus(thirdReport.phrase.totalSales.sb_value)
        thirdReport.phrase.totalClicks.total = thirdReport.phrase.totalClicks.total.plus(thirdReport.phrase.totalClicks.sb_value)
        thirdReport.phrase.totalOrders.total = thirdReport.phrase.totalOrders.total.plus(thirdReport.phrase.totalOrders.sb_value)
        thirdReport.phrase.acos.total = thirdReport.phrase.totalSpends.total.div(thirdReport.phrase.totalSales.total)
        thirdReport.phrase.cvr.total = thirdReport.phrase.totalOrders.total.div(thirdReport.phrase.totalClicks.total)

        thirdReport.product_category.totalSpends.total = thirdReport.product_category.totalSpends.total.plus(thirdReport.product_category.totalSpends.sb_value)
        thirdReport.product_category.totalSales.total = thirdReport.product_category.totalSales.total.plus(thirdReport.product_category.totalSales.sb_value)
        thirdReport.product_category.totalClicks.total = thirdReport.product_category.totalClicks.total.plus(thirdReport.product_category.totalClicks.sb_value)
        thirdReport.product_category.totalOrders.total = thirdReport.product_category.totalOrders.total.plus(thirdReport.product_category.totalOrders.sb_value)
        thirdReport.product_category.acos.total = thirdReport.product_category.totalSpends.total.div(thirdReport.product_category.totalSales.total)
        thirdReport.product_category.cvr.total = thirdReport.product_category.totalOrders.total.div(thirdReport.product_category.totalClicks.total)

        thirdReport.auto.totalSpends.total = thirdReport.auto.totalSpends.total.plus(thirdReport.auto.totalSpends.sb_value)
        thirdReport.auto.totalSales.total = thirdReport.auto.totalSales.total.plus(thirdReport.auto.totalSales.sb_value)
        thirdReport.auto.totalClicks.total = thirdReport.auto.totalClicks.total.plus(thirdReport.auto.totalClicks.sb_value)
        thirdReport.auto.totalOrders.total = thirdReport.auto.totalOrders.total.plus(thirdReport.auto.totalOrders.sb_value)
        thirdReport.auto.acos.total = thirdReport.auto.totalSpends.total.div(thirdReport.auto.totalSales.total)
        thirdReport.auto.cvr.total = thirdReport.auto.totalOrders.total.div(thirdReport.auto.totalClicks.total)


        //
        thirdReport.broad.acos.sp_value = thirdReport.broad.totalSpends.sp_value.div(thirdReport.broad.totalSales.total)
        thirdReport.broad.cvr.sp_value = thirdReport.broad.totalOrders.sp_value.div(thirdReport.broad.totalClicks.total)

        thirdReport.exact.acos.sp_value = thirdReport.exact.totalSpends.sp_value.div(thirdReport.exact.totalSales.total)
        thirdReport.exact.cvr.sp_value = thirdReport.exact.totalOrders.sp_value.div(thirdReport.exact.totalClicks.total)

        thirdReport.phrase.acos.sp_value = thirdReport.phrase.totalSpends.sp_value.div(thirdReport.phrase.totalSales.total)
        thirdReport.phrase.cvr.sp_value = thirdReport.phrase.totalOrders.sp_value.div(thirdReport.phrase.totalClicks.total)

        thirdReport.product_category.acos.sp_value = thirdReport.product_category.totalSpends.sp_value.div(thirdReport.product_category.totalSales.total)
        thirdReport.product_category.cvr.sp_value = thirdReport.product_category.totalOrders.sp_value.div(thirdReport.product_category.totalClicks.total)

        thirdReport.auto.acos.sp.value = thirdReport.auto.totalSpends.sp.value.div(thirdReport.auto.totalSales.total)
        thirdReport.auto.cvr.sp.value = thirdReport.auto.totalOrders.sp.value.div(thirdReport.auto.totalClicks.total)


        thirdReport.broad.acos.sb_value = thirdReport.broad.totalSpends.sb_value.div(thirdReport.broad.totalSales.total)
        thirdReport.broad.cvr.sb_value = thirdReport.broad.totalOrders.sb_value.div(thirdReport.broad.totalClicks.total)

        thirdReport.exact.acos.sb_value = thirdReport.exact.totalSpends.sb_value.div(thirdReport.exact.totalSales.total)
        thirdReport.exact.cvr.sb_value = thirdReport.exact.totalOrders.sb_value.div(thirdReport.exact.totalClicks.total)

        thirdReport.phrase.acos.sb_value = thirdReport.phrase.totalSpends.sb_value.div(thirdReport.phrase.totalSales.total)
        thirdReport.phrase.cvr.sb_value = thirdReport.phrase.totalOrders.sb_value.div(thirdReport.phrase.totalClicks.total)

        thirdReport.product_category.acos.sb_value = thirdReport.product_category.totalSpends.sb_value.div(thirdReport.product_category.totalSales.total)
        thirdReport.product_category.cvr.sb_value = thirdReport.product_category.totalOrders.sb_value.div(thirdReport.product_category.totalClicks.total)

        thirdReport.auto.acos.sb_value = thirdReport.auto.totalSpends.sb_value.div(thirdReport.auto.totalSales.total)
        thirdReport.auto.cvr.sb_value = thirdReport.auto.totalOrders.sb_value.div(thirdReport.auto.totalClicks.total)

        //total
        thirdReport.total.totalSpends.total = thirdReport.total.totalSpends.total.plus(thirdReport.broad.totalSpends.total).plus(thirdReport.exact.totalSpends.total).plus(thirdReport.phrase.totalSpends.total).plus(thirdReport.auto.totalSpends.total).plus(thirdReport.product_category.totalSpends.total).plus(thirdReport.others.totalSpends.total)
        //totalSales
        thirdReport.total.totalSales.total = thirdReport.total.totalSales.total.plus(thirdReport.broad.totalSales.total).plus(thirdReport.exact.totalSales.total).plus(thirdReport.phrase.totalSales.total).plus(thirdReport.auto.totalSales.total).plus(thirdReport.product_category.totalSales.total).plus(thirdReport.others.totalSales.total)
        //totalClicks
        thirdReport.total.totalClicks.total = thirdReport.total.totalClicks.total.plus(thirdReport.broad.totalClicks.total).plus(thirdReport.exact.totalClicks.total).plus(thirdReport.phrase.totalClicks.total).plus(thirdReport.auto.totalClicks.total).plus(thirdReport.product_category.totalClicks.total).plus(thirdReport.others.totalClicks.total)
        //totalOrders
        thirdReport.total.totalOrders.total = thirdReport.total.totalOrders.total.plus(thirdReport.broad.totalOrders.total).plus(thirdReport.exact.totalOrders.total).plus(thirdReport.phrase.totalOrders.total).plus(thirdReport.auto.totalOrders.total).plus(thirdReport.product_category.totalOrders.total).plus(thirdReport.others.totalOrders.total)
        //acos
        thirdReport.total.acos.total = thirdReport.total.totalSpends.total.div(thirdReport.total.totalSales.total)
        //cvr
        thirdReport.total.cvr.total = thirdReport.total.totalOrders.total.div(thirdReport.total.totalClicks.total)

        /// spends for every compaine %
        thirdReport.broad.spends.total = thirdReport.broad.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.exact.spends.total = thirdReport.exact.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.phrase.spends.total = thirdReport.phrase.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.auto.spends.total = thirdReport.auto.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.product_category.spends.total = thirdReport.product_category.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        thirdReport.others.spends.total = thirdReport.others.totalSpends.total.mul(100).div(thirdReport.total.totalSpends.total)
        /// sales for every compaine %
        thirdReport.broad.sales.total = thirdReport.broad.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)
        thirdReport.exact.sales.total = thirdReport.exact.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)
        thirdReport.phrase.sales.total = thirdReport.phrase.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)
        thirdReport.auto.sales.total = thirdReport.auto.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)
        thirdReport.product_category.sales.total = thirdReport.product_category.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)
        thirdReport.others.sales.total = thirdReport.others.totalSales.total.mul(100).div(thirdReport.total.totalSales.total)


        //endthirdReport

        //forthReprot 
        //totalSpends
        // totalspends.total = sp + sb
        forthReport.brandA.totalSpends.total = forthReport.brandA.totalSpends.total.plus(forthReport.brandA.totalSpends.sp_value).plus(forthReport.brandA.totalSpends.sb_value).plus(forthReport.brandA.totalSpends.sd_value)
        forthReport.brandB.totalSpends.total = forthReport.brandB.totalSpends.total.plus(forthReport.brandB.totalSpends.sp_value).plus(forthReport.brandB.totalSpends.sb_value).plus(forthReport.brandB.totalSpends.sd_value)
        forthReport.brandC.totalSpends.total = forthReport.brandC.totalSpends.total.plus(forthReport.brandC.totalSpends.sp_value).plus(forthReport.brandC.totalSpends.sb_value).plus(forthReport.brandC.totalSpends.sd_value)
        //totalSales
        // totalsales.total = sp + sb
        forthReport.brandA.totalSales.total = forthReport.brandA.totalSales.total.plus(forthReport.brandA.totalSales.sp_value).plus(forthReport.brandA.totalSales.sb_value).plus(forthReport.brandA.totalSales.sd_value)
        forthReport.brandB.totalSales.total = forthReport.brandB.totalSales.total.plus(forthReport.brandB.totalSales.sp_value).plus(forthReport.brandB.totalSales.sb_value).plus(forthReport.brandB.totalSales.sd_value)
        forthReport.brandC.totalSales.total = forthReport.brandC.totalSales.total.plus(forthReport.brandC.totalSales.sp_value).plus(forthReport.brandC.totalSales.sb_value).plus(forthReport.brandC.totalSales.sd_value)
        //acos
        // acos.total = sp + sb
        forthReport.brandA.acos.total = forthReport.brandA.totalSpends.total.div(forthReport.brandA.totalSales.total)
        forthReport.brandB.acos.total = forthReport.brandB.totalSpends.total.div(forthReport.brandB.totalSales.total)
        forthReport.brandC.acos.total = forthReport.brandC.totalSpends.total.div(forthReport.brandC.totalSales.total)
        // total
        forthReport.total.totalSpends.total = forthReport.total.totalSpends.total.plus(forthReport.brandA.totalSpends.total).plus(forthReport.brandB.totalSpends.total).plus(forthReport.brandC.totalSpends.total)
        forthReport.total.totalSales.total = forthReport.total.totalSales.total.plus(forthReport.brandA.totalSales.total).plus(forthReport.brandB.totalSales.total).plus(forthReport.brandC.totalSales.total)
        forthReport.total.acos.total = forthReport.total.totalSpends.total.div(forthReport.total.totalSales.total)
        /// spends %
        forthReport.brandA.spends.total = forthReport.brandA.totalSpends.total.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandB.spends.total = forthReport.brandB.totalSpends.total.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandC.spends.total = forthReport.brandC.totalSpends.total.mul(100).div(forthReport.total.totalSpends.total)

        forthReport.brandA.spends.sp_value = forthReport.brandA.totalSpends.sp_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandB.spends.sp_value = forthReport.brandB.totalSpends.sp_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandC.spends.sp_value = forthReport.brandC.totalSpends.sp_value.mul(100).div(forthReport.total.totalSpends.total)

        forthReport.brandA.spends.sb_value = forthReport.brandA.totalSpends.sb_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandB.spends.sb_value = forthReport.brandB.totalSpends.sb_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandC.spends.sb_value = forthReport.brandC.totalSpends.sb_value.mul(100).div(forthReport.total.totalSpends.total)

        forthReport.brandA.spends.sd_value = forthReport.brandA.totalSpends.sd_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandB.spends.sd_value = forthReport.brandB.totalSpends.sd_value.mul(100).div(forthReport.total.totalSpends.total)
        forthReport.brandC.spends.sd_value = forthReport.brandC.totalSpends.sd_value.mul(100).div(forthReport.total.totalSpends.total)
        /// sales %
        forthReport.brandA.sales.total = forthReport.brandA.totalSales.total.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandB.sales.total = forthReport.brandB.totalSales.total.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandC.sales.total = forthReport.brandC.totalSales.total.mul(100).div(forthReport.total.totalSales.total)

        forthReport.brandA.sales.sp_value = forthReport.brandA.totalSales.sp_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandB.sales.sp_value = forthReport.brandB.totalSales.sp_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandC.sales.sp_value = forthReport.brandC.totalSales.sp_value.mul(100).div(forthReport.total.totalSales.total)

        forthReport.brandA.sales.sb_value = forthReport.brandA.totalSales.sb_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandB.sales.sb_value = forthReport.brandB.totalSales.sb_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandC.sales.sb_value = forthReport.brandC.totalSales.sb_value.mul(100).div(forthReport.total.totalSales.total)

        forthReport.brandA.sales.sd_value = forthReport.brandA.totalSales.sd_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandB.sales.sd_value = forthReport.brandB.totalSales.sd_value.mul(100).div(forthReport.total.totalSales.total)
        forthReport.brandC.sales.sd_value = forthReport.brandC.totalSales.sd_value.mul(100).div(forthReport.total.totalSales.total)

    }

}



export default async function processReport(businessReportFile: File, bulkFile: File) {

    // @ts-ignore
    sales_data = await readExcelFile(businessReportFile)
    // @ts-ignore
    main_data = await readExcelFile(bulkFile)

    await analyseReport(sales_data, "sales")
    await analyseReport(main_data, "main")
    const formulaResults= await formula(main_data,"main");

    let data = {
        firstReport, secReport, thirdReport, forthReport, main_data, sales_data,formulaResults
    }


    firstReport = {
        sp_campaign: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        sb_campaign: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        sd_campaign: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        total: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
        }
    }
    secReport = {
        top_search: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        rest_search: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        other: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
            spends: new Decimal(0),
            sales: new Decimal(0)
        },
        total: {
            totalSpends: new Decimal(0),
            totalSales: new Decimal(0),
            totalClicks: new Decimal(0),
            totalOrders: new Decimal(0),
            acos: new Decimal(0),
            cvr: new Decimal(0),
        }
    }
    thirdReport = {
        broad: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        exact: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        phrase: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        auto: {
            totalSpends: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sb: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sd: {
                    value: new Decimal(0),
                    loos: new Decimal(0),
                    close: new Decimal(0),
                    complements: new Decimal(0),
                    substitutes: new Decimal(0),
                },
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
        },
        product_category: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
        },
        others: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        total: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalClicks: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            totalOrders: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            cvr: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
    }
    forthReport = {
        totalOrderedSales: new Decimal(0),
        brandA: {
            asins: [],
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0)
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        brandB: {
            asins: [],
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0)
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        brandC: {
            asins: [],
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0)
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
        total: {
            totalSpends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0)
            },
            totalSales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            acos: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            spends: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            },
            sales: {
                total: new Decimal(0),
                sp_value: new Decimal(0),
                sb_value: new Decimal(0),
                sd_value: new Decimal(0),
            }
        },
    }
    
    main_data = "";
    sales_data = "";

    return data;
}
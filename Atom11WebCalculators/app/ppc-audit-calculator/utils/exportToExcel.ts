import { calculateFifthTableTotal } from "./calculateFifthTableTotal";
import * as XLSX from 'xlsx';
 
import { saveAs } from 'file-saver';

const exportToExcel = (firstReport: any, secReport: any, thirdReport: any, forthReport: any, filterthird: any, filterfourth: any): void => {
  const data = [
    // first table
    {
      "Campaign Type": "SP Campaign",
      "Total Spends": isFinite(firstReport['sp_campaign'].totalSpends) &&
        !isNaN(firstReport['sp_campaign'].totalSpends)
        ? firstReport['sp_campaign'].totalSpends.toFixed(2)
        : 0,
      "Ad sales": isFinite(firstReport['sp_campaign'].totalSales) &&
        !isNaN(firstReport['sp_campaign'].totalSales)
        ? firstReport['sp_campaign'].totalSales.toFixed(2)
        : 0,
      "Ad clicks": isFinite(firstReport['sp_campaign'].totalClicks) &&
        !isNaN(firstReport['sp_campaign'].totalClicks)
        ? firstReport['sp_campaign'].totalClicks.toFixed(2)
        : 0,
      "Ad orders": isFinite(firstReport['sp_campaign'].totalOrders) &&
        !isNaN(firstReport['sp_campaign'].totalOrders)
        ? firstReport['sp_campaign'].totalOrders.toFixed(2)
        : 0,
      "ACOS": isFinite(firstReport['sp_campaign'].acos) &&
        !isNaN(firstReport['sp_campaign'].acos)
        ? (firstReport['sp_campaign'].acos * 100).toFixed(2)
        : 0,
      "CVR": isFinite(firstReport['sp_campaign'].cvr) &&
        !isNaN(firstReport['sp_campaign'].cvr)
        ? (firstReport['sp_campaign'].cvr * 100).toFixed(2)
        : 0,
      "Spends %": isFinite(firstReport['sp_campaign'].spends) &&
        !isNaN(firstReport['sp_campaign'].spends)
        ? firstReport['sp_campaign'].spends.toFixed(2)
        : 0,
      "Sales %": isFinite(firstReport['sp_campaign'].sales) &&
        !isNaN(firstReport['sp_campaign'].sales)
        ? firstReport['sp_campaign'].sales.toFixed(2)
        : 0,
    },
    {
      "Campaign Type": "SB Campaign",
      "Total Spends": isFinite(firstReport['sb_campaign'].totalSpends) &&
        !isNaN(firstReport['sb_campaign'].totalSpends)
        ? firstReport['sb_campaign'].totalSpends.toFixed(2)
        : 0,
      "Ad sales": isFinite(firstReport['sb_campaign'].totalSales) &&
        !isNaN(firstReport['sb_campaign'].totalSales)
        ? firstReport['sb_campaign'].totalSales.toFixed(2)
        : 0,
      "Ad clicks": isFinite(firstReport['sb_campaign'].totalClicks) &&
        !isNaN(firstReport['sb_campaign'].totalClicks)
        ? firstReport['sb_campaign'].totalClicks.toFixed(2)
        : 0,
      "Ad orders": isFinite(firstReport['sb_campaign'].totalOrders) &&
        !isNaN(firstReport['sb_campaign'].totalOrders)
        ? firstReport['sb_campaign'].totalOrders.toFixed(2)
        : 0,
      "ACOS": isFinite(firstReport['sb_campaign'].acos) &&
        !isNaN(firstReport['sb_campaign'].acos)
        ? (firstReport['sb_campaign'].acos * 100).toFixed(2)
        : 0,
      "CVR": isFinite(firstReport['sb_campaign'].cvr) &&
        !isNaN(firstReport['sb_campaign'].cvr)
        ? (firstReport['sb_campaign'].cvr * 100).toFixed(2)
        : 0,
      "Spends %": isFinite(firstReport['sb_campaign'].spends) &&
        !isNaN(firstReport['sb_campaign'].spends)
        ? firstReport['sb_campaign'].spends.toFixed(2)
        : 0,
      "Sales %": isFinite(firstReport['sb_campaign'].sales) &&
        !isNaN(firstReport['sb_campaign'].sales)
        ? firstReport['sb_campaign'].sales.toFixed(2)
        : 0,
    },
    {
      "Campaign Type": "SD Campaign",
      "Total Spends": isFinite(firstReport['sd_campaign'].totalSpends) &&
        !isNaN(firstReport['sd_campaign'].totalSpends)
        ? firstReport['sd_campaign'].totalSpends.toFixed(2)
        : 0,
      "Ad sales": isFinite(firstReport['sd_campaign'].totalSales) &&
        !isNaN(firstReport['sd_campaign'].totalSales)
        ? firstReport['sd_campaign'].totalSales.toFixed(2)
        : 0,
      "Ad clicks": isFinite(firstReport['sd_campaign'].totalClicks) &&
        !isNaN(firstReport['sd_campaign'].totalClicks)
        ? firstReport['sd_campaign'].totalClicks.toFixed(2)
        : 0,
      "Ad orders": isFinite(firstReport['sd_campaign'].totalOrders) &&
        !isNaN(firstReport['sd_campaign'].totalOrders)
        ? firstReport['sd_campaign'].totalOrders.toFixed(2)
        : 0,
      "ACOS": isFinite(firstReport['sd_campaign'].acos) &&
        !isNaN(firstReport['sd_campaign'].acos)
        ? (firstReport['sd_campaign'].acos * 100).toFixed(2)
        : 0,
      "CVR": isFinite(firstReport['sd_campaign'].cvr) &&
        !isNaN(firstReport['sd_campaign'].cvr)
        ? (firstReport['sd_campaign'].cvr * 100).toFixed(2)
        : 0,
      "Spends %": isFinite(firstReport['sd_campaign'].spends) &&
        !isNaN(firstReport['sd_campaign'].spends)
        ? firstReport['sd_campaign'].spends.toFixed(2)
        : 0,
      "Sales %": isFinite(firstReport['sd_campaign'].sales) &&
        !isNaN(firstReport['sd_campaign'].sales)
        ? firstReport['sd_campaign'].sales.toFixed(2)
        : 0,
    },
    {
      "Campaign Type": "Total",
      "Total Spends": isFinite(firstReport['total'].totalSpends) &&
        !isNaN(firstReport['total'].totalSpends)
        ? firstReport['total'].totalSpends.toFixed(2)
        : 0,
      "Ad sales": isFinite(firstReport['total'].totalSales) &&
        !isNaN(firstReport['total'].totalSales)
        ? firstReport['total'].totalSales.toFixed(2)
        : 0,
      "Ad clicks": isFinite(firstReport['total'].totalClicks) &&
        !isNaN(firstReport['total'].totalClicks)
        ? firstReport['total'].totalClicks.toFixed(2)
        : 0,
      "Ad orders": isFinite(firstReport['total'].totalOrders) &&
        !isNaN(firstReport['total'].totalOrders)
        ? firstReport['total'].totalOrders.toFixed(2)
        : 0,
      "ACOS": isFinite(firstReport['total'].acos) &&
        !isNaN(firstReport['total'].acos)
        ? (firstReport['total'].acos * 100).toFixed(2)
        : 0,
      "CVR": isFinite(firstReport['total'].cvr) &&
        !isNaN(firstReport['total'].cvr)
        ? (firstReport['total'].cvr * 100).toFixed(2)
        : 0,
      "Spends %": 100,
      "Sales %": 100,
    },
    {
      "Campaign Type": "",
      "Total Spends": "",
      "Ad sales": "",
      "Ad clicks": "",
      "Ad orders": "",
      "ACOS": "",
      "CVR": "",
      "Spends %": "",
      "Sales %": "",
    },
    //second table
    {
      "Campaign Type": "Placement Type",
      "Total Spends": "Total Spends",
      "Ad sales": "Ad sales",
      "Ad clicks": "Ad clicks",
      "Ad orders": "Ad orders",
      "ACOS": "ACOS",
      "CVR": "CVR",
      "Spends %": "Spends %",
      "Sales %": "Sales %",
    },
    {
      "Campaign Type": "Top search",
      "Total Spends": isFinite(secReport["top_search"].totalSpends) && !isNaN(secReport["top_search"].totalSpends) ? secReport["top_search"].totalSpends.toFixed(2) : 0,
      "Ad sales": isFinite(secReport["top_search"].totalSales) && !isNaN(secReport["top_search"].totalSales) ? secReport["top_search"].totalSales.toFixed(2) : 0,
      "Ad clicks": isFinite(secReport["top_search"].totalClicks) && !isNaN(secReport["top_search"].totalClicks) ? secReport["top_search"].totalClicks.toFixed(2) : 0,
      "Ad orders": isFinite(secReport["top_search"].totalOrders) && !isNaN(secReport["top_search"].totalOrders) ? secReport["top_search"].totalOrders.toFixed(2) : 0,
      "ACOS": isFinite(secReport["top_search"].acos) && !isNaN(secReport["top_search"].acos) ? (secReport["top_search"].acos * 100).toFixed(2) : 0,
      "CVR": isFinite(secReport["top_search"].cvr) && !isNaN(secReport["top_search"].cvr) ? (secReport["top_search"].cvr * 100).toFixed(2) : 0,
      "Spends %": isFinite(secReport["top_search"].spends) && !isNaN(secReport["top_search"].spends) ? secReport["top_search"].spends.toFixed(2) : 0,
      "Sales %": isFinite(secReport["top_search"].sales) && !isNaN(secReport["top_search"].sales) ? secReport["top_search"].sales.toFixed(2) : 0,
    },
    {
      "Campaign Type": "Rest search",
      "Total Spends": isFinite(secReport["rest_search"].totalSpends) && !isNaN(secReport["rest_search"].totalSpends) ? secReport["rest_search"].totalSpends.toFixed(2) : 0,
      "Ad sales": isFinite(secReport["rest_search"].totalSales) && !isNaN(secReport["rest_search"].totalSales) ? secReport["rest_search"].totalSales.toFixed(2) : 0,
      "Ad clicks": isFinite(secReport["rest_search"].totalClicks) && !isNaN(secReport["rest_search"].totalClicks) ? secReport["rest_search"].totalClicks.toFixed(2) : 0,
      "Ad orders": isFinite(secReport["rest_search"].totalOrders) && !isNaN(secReport["rest_search"].totalOrders) ? secReport["rest_search"].totalOrders.toFixed(2) : 0,
      "ACOS": isFinite(secReport["rest_search"].acos) && !isNaN(secReport["rest_search"].acos) ? (secReport["rest_search"].acos * 100).toFixed(2) : 0,
      "CVR": isFinite(secReport["rest_search"].cvr) && !isNaN(secReport["rest_search"].cvr) ? (secReport["rest_search"].cvr * 100).toFixed(2) : 0,
      "Spends %": isFinite(secReport["rest_search"].spends) && !isNaN(secReport["rest_search"].spends) ? secReport["rest_search"].spends.toFixed(2) : 0,
      "Sales %": isFinite(secReport["rest_search"].sales) && !isNaN(secReport["rest_search"].sales) ? secReport["rest_search"].sales.toFixed(2) : 0,
    },
    {
      "Campaign Type": "Other",
      "Total Spends": isFinite(secReport["other"].totalSpends) && !isNaN(secReport["other"].totalSpends) ? secReport["other"].totalSpends.toFixed(2) : 0,
      "Ad sales": isFinite(secReport["other"].totalSales) && !isNaN(secReport["other"].totalSales) ? secReport["other"].totalSales.toFixed(2) : 0,
      "Ad clicks": isFinite(secReport["other"].totalClicks) && !isNaN(secReport["other"].totalClicks) ? secReport["other"].totalClicks.toFixed(2) : 0,
      "Ad orders": isFinite(secReport["other"].totalOrders) && !isNaN(secReport["other"].totalOrders) ? secReport["other"].totalOrders.toFixed(2) : 0,
      "ACOS": isFinite(secReport["other"].acos) && !isNaN(secReport["other"].acos) ? (secReport["other"].acos * 100).toFixed(2) : 0,
      "CVR": isFinite(secReport["other"].cvr) && !isNaN(secReport["other"].cvr) ? (secReport["other"].cvr * 100).toFixed(2) : 0,
      "Spends %": isFinite(secReport["other"].spends) && !isNaN(secReport["other"].spends) ? secReport["other"].spends.toFixed(2) : 0,
      "Sales %": isFinite(secReport["other"].sales) && !isNaN(secReport["other"].sales) ? secReport["other"].sales.toFixed(2) : 0,
    },
    {
      "Campaign Type": "Total",
      "Total Spends": isFinite(secReport["total"].totalSpends) && !isNaN(secReport["total"].totalSpends) ? secReport["total"].totalSpends.toFixed(2) : 0,
      "Ad sales": isFinite(secReport["total"].totalSales) && !isNaN(secReport["total"].totalSales) ? secReport["total"].totalSales.toFixed(2) : 0,
      "Ad clicks": isFinite(secReport["total"].totalClicks) && !isNaN(secReport["total"].totalClicks) ? secReport["total"].totalClicks.toFixed(2) : 0,
      "Ad orders": isFinite(secReport["total"].totalOrders) && !isNaN(secReport["total"].totalOrders) ? secReport["total"].totalOrders.toFixed(2) : 0,
      "ACOS": isFinite(secReport["total"].acos) && !isNaN(secReport["total"].acos) ? (secReport["total"].acos * 100).toFixed(2) : 0,
      "CVR": isFinite(secReport["total"].cvr) && !isNaN(secReport["total"].cvr) ? (secReport["total"].cvr * 100).toFixed(2) : 0,
      "Spends %": 100,
      "Sales %": 100,
    },
    {
      "Campaign Type": "",
      "Total Spends": "",
      "Ad sales": "",
      "Ad clicks": "",
      "Ad orders": "",
      "ACOS": "",
      "CVR": "",
      "Spends %": "",
      "Sales %": "",
    },
    // third 
    {
      "Campaign Type": "Keyword",
      "Total Spends": "Total Spends",
      "Ad sales": "Ad sales",
      "Ad clicks": "Ad clicks",
      "Ad orders": "Ad orders",
      "ACOS": "ACOS",
      "CVR": "CVR",
      "Spends %": "Spends %",
      "Sales %": "Sales %",
    },
    {
      "Campaign Type": "Broad",
      "Total Spends": Boolean(thirdReport?.broad?.totalSpends[filterthird]) && isFinite(thirdReport?.broad?.totalSpends[filterthird]) && !isNaN(thirdReport?.broad?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.broad?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.broad?.totalSales[filterthird]) && isFinite(thirdReport?.broad?.totalSales[filterthird]) && !isNaN(thirdReport?.broad?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.broad?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.broad?.totalClicks[filterthird]) && isFinite(thirdReport?.broad?.totalClicks[filterthird]) && !isNaN(thirdReport?.broad?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.broad?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.broad?.totalOrders[filterthird]) && isFinite(thirdReport?.broad?.totalOrders[filterthird]) && !isNaN(thirdReport?.broad?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.broad?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.broad?.acos[filterthird]) && isFinite(thirdReport?.broad?.acos[filterthird]) && !isNaN(thirdReport?.broad?.acos[filterthird]) ?
        JSON.parse((thirdReport?.broad?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.broad?.cvr[filterthird]) && isFinite(thirdReport?.broad?.cvr[filterthird]) && !isNaN(thirdReport?.broad?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.broad?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.broad?.spends[filterthird]) && isFinite(thirdReport?.broad?.spends[filterthird]) && !isNaN(thirdReport?.broad?.spends[filterthird]) ?
        JSON.parse(thirdReport?.broad?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.broad?.sales[filterthird]) && isFinite(thirdReport?.broad?.sales[filterthird]) && !isNaN(thirdReport?.broad?.sales[filterthird]) ?
        JSON.parse(thirdReport?.broad?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Exact",
      "Total Spends": Boolean(thirdReport?.exact?.totalSpends[filterthird]) && isFinite(thirdReport?.exact?.totalSpends[filterthird]) && !isNaN(thirdReport?.exact?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.exact?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.exact?.totalSales[filterthird]) && isFinite(thirdReport?.exact?.totalSales[filterthird]) && !isNaN(thirdReport?.exact?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.exact?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.exact?.totalClicks[filterthird]) && isFinite(thirdReport?.exact?.totalClicks[filterthird]) && !isNaN(thirdReport?.exact?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.exact?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.exact?.totalOrders[filterthird]) && isFinite(thirdReport?.exact?.totalOrders[filterthird]) && !isNaN(thirdReport?.exact?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.exact?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.exact?.acos[filterthird]) && isFinite(thirdReport?.exact?.acos[filterthird]) && !isNaN(thirdReport?.exact?.acos[filterthird]) ?
        JSON.parse((thirdReport?.exact?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.exact?.cvr[filterthird]) && isFinite(thirdReport?.exact?.cvr[filterthird]) && !isNaN(thirdReport?.exact?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.exact?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.exact?.spends[filterthird]) && isFinite(thirdReport?.exact?.spends[filterthird]) && !isNaN(thirdReport?.exact?.spends[filterthird]) ?
        JSON.parse(thirdReport?.exact?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.exact?.sales[filterthird]) && isFinite(thirdReport?.exact?.sales[filterthird]) && !isNaN(thirdReport?.exact?.sales[filterthird]) ?
        JSON.parse(thirdReport?.exact?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Phrase",
      "Total Spends": Boolean(thirdReport?.phrase?.totalSpends[filterthird]) && isFinite(thirdReport?.phrase?.totalSpends[filterthird]) && !isNaN(thirdReport?.phrase?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.phrase?.totalSales[filterthird]) && isFinite(thirdReport?.phrase?.totalSales[filterthird]) && !isNaN(thirdReport?.phrase?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.phrase?.totalClicks[filterthird]) && isFinite(thirdReport?.phrase?.totalClicks[filterthird]) && !isNaN(thirdReport?.phrase?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.phrase?.totalOrders[filterthird]) && isFinite(thirdReport?.phrase?.totalOrders[filterthird]) && !isNaN(thirdReport?.phrase?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.totalOrders[filterthird].toFixed(2)) : 0,
      "ACOS": Boolean(thirdReport?.phrase?.acos[filterthird]) && isFinite(thirdReport?.phrase?.acos[filterthird]) && !isNaN(thirdReport?.phrase?.acos[filterthird]) ?
        JSON.parse((thirdReport?.phrase?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.phrase?.cvr[filterthird]) && isFinite(thirdReport?.phrase?.cvr[filterthird]) && !isNaN(thirdReport?.phrase?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.phrase?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.phrase?.spends[filterthird]) && isFinite(thirdReport?.phrase?.spends[filterthird]) && !isNaN(thirdReport?.phrase?.spends[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.phrase?.sales[filterthird]) && isFinite(thirdReport?.phrase?.sales[filterthird]) && !isNaN(thirdReport?.phrase?.sales[filterthird]) ?
        JSON.parse(thirdReport?.phrase?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Auto",
      "Total Spends": Boolean(thirdReport?.auto?.totalSpends[filterthird]) && isFinite(thirdReport?.auto?.totalSpends[filterthird]) && !isNaN(thirdReport?.auto?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.auto?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.auto?.totalSales[filterthird]) && isFinite(thirdReport?.auto?.totalSales[filterthird]) && !isNaN(thirdReport?.auto?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.auto?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.auto?.totalClicks[filterthird]) && isFinite(thirdReport?.auto?.totalClicks[filterthird]) && !isNaN(thirdReport?.auto?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.auto?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.auto?.totalOrders[filterthird]) && isFinite(thirdReport?.auto?.totalOrders[filterthird]) && !isNaN(thirdReport?.auto?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.auto?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.auto?.acos[filterthird]) && isFinite(thirdReport?.auto?.acos[filterthird]) && !isNaN(thirdReport?.auto?.acos[filterthird]) ?
        JSON.parse((thirdReport?.auto?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.auto?.cvr[filterthird]) && isFinite(thirdReport?.auto?.cvr[filterthird]) && !isNaN(thirdReport?.auto?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.auto?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.auto?.spends[filterthird]) && isFinite(thirdReport?.auto?.spends[filterthird]) && !isNaN(thirdReport?.auto?.spends[filterthird]) ?
        JSON.parse(thirdReport?.auto?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.auto?.sales[filterthird]) && isFinite(thirdReport?.auto?.sales[filterthird]) && !isNaN(thirdReport?.auto?.sales[filterthird]) ?
        JSON.parse(thirdReport?.auto?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Product Category",
      "Total Spends": Boolean(thirdReport?.product_category?.totalSpends[filterthird]) && isFinite(thirdReport?.product_category?.totalSpends[filterthird]) && !isNaN(thirdReport?.product_category?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.product_category?.totalSales[filterthird]) && isFinite(thirdReport?.product_category?.totalSales[filterthird]) && !isNaN(thirdReport?.product_category?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.product_category?.totalClicks[filterthird]) && isFinite(thirdReport?.product_category?.totalClicks[filterthird]) && !isNaN(thirdReport?.product_category?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.product_category?.totalOrders[filterthird]) && isFinite(thirdReport?.product_category?.totalOrders[filterthird]) && !isNaN(thirdReport?.product_category?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.product_category?.acos[filterthird]) && isFinite(thirdReport?.product_category?.acos[filterthird]) && !isNaN(thirdReport?.product_category?.acos[filterthird]) ?
        JSON.parse((thirdReport?.product_category?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.product_category?.cvr[filterthird]) && isFinite(thirdReport?.product_category?.cvr[filterthird]) && !isNaN(thirdReport?.product_category?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.product_category?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.product_category?.spends[filterthird]) && isFinite(thirdReport?.product_category?.spends[filterthird]) && !isNaN(thirdReport?.product_category?.spends[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.product_category?.sales[filterthird]) && isFinite(thirdReport?.product_category?.sales[filterthird]) && !isNaN(thirdReport?.product_category?.sales[filterthird]) ?
        JSON.parse(thirdReport?.product_category?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Others",
      "Total Spends": Boolean(thirdReport?.others?.totalSpends[filterthird]) && isFinite(thirdReport?.others?.totalSpends[filterthird]) && !isNaN(thirdReport?.others?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.others?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.others?.totalSales[filterthird]) && isFinite(thirdReport?.others?.totalSales[filterthird]) && !isNaN(thirdReport?.others?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.others?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.others?.totalClicks[filterthird]) && isFinite(thirdReport?.others?.totalClicks[filterthird]) && !isNaN(thirdReport?.others?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.others?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.others?.totalOrders[filterthird]) && isFinite(thirdReport?.others?.totalOrders[filterthird]) && !isNaN(thirdReport?.others?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.others?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.others?.acos[filterthird]) && isFinite(thirdReport?.others?.acos[filterthird]) && !isNaN(thirdReport?.others?.acos[filterthird]) ?
        JSON.parse((thirdReport?.others?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.others?.cvr[filterthird]) && isFinite(thirdReport?.others?.cvr[filterthird]) && !isNaN(thirdReport?.others?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.others?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": Boolean(thirdReport?.others?.spends[filterthird]) && isFinite(thirdReport?.others?.spends[filterthird]) && !isNaN(thirdReport?.others?.spends[filterthird]) ?
        JSON.parse(thirdReport?.others?.spends[filterthird].toFixed(2)) : 0,
      "Sales %": Boolean(thirdReport?.others?.sales[filterthird]) && isFinite(thirdReport?.others?.sales[filterthird]) && !isNaN(thirdReport?.others?.sales[filterthird]) ?
        JSON.parse(thirdReport?.others?.sales[filterthird].toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Total",
      "Total Spends": Boolean(thirdReport?.total?.totalSpends[filterthird]) && isFinite(thirdReport?.total?.totalSpends[filterthird]) && !isNaN(thirdReport?.total?.totalSpends[filterthird]) ?
        JSON.parse(thirdReport?.total?.totalSpends[filterthird].toFixed(2)) : 0,
      "Ad sales": Boolean(thirdReport?.total?.totalSales[filterthird]) && isFinite(thirdReport?.total?.totalSales[filterthird]) && !isNaN(thirdReport?.total?.totalSales[filterthird]) ?
        JSON.parse(thirdReport?.total?.totalSales[filterthird].toFixed(2)) : 0,
      "Ad clicks": Boolean(thirdReport?.total?.totalClicks[filterthird]) && isFinite(thirdReport?.total?.totalClicks[filterthird]) && !isNaN(thirdReport?.total?.totalClicks[filterthird]) ?
        JSON.parse(thirdReport?.total?.totalClicks[filterthird].toFixed(0)) : 0,
      "Ad orders": Boolean(thirdReport?.total?.totalOrders[filterthird]) && isFinite(thirdReport?.total?.totalOrders[filterthird]) && !isNaN(thirdReport?.total?.totalOrders[filterthird]) ?
        JSON.parse(thirdReport?.total?.totalOrders[filterthird].toFixed(0)) : 0,
      "ACOS": Boolean(thirdReport?.total?.acos[filterthird]) && isFinite(thirdReport?.total?.acos[filterthird]) && !isNaN(thirdReport?.total?.acos[filterthird]) ?
        JSON.parse((thirdReport?.total?.acos[filterthird] * 100).toFixed(2)) : 0,
      "CVR": Boolean(thirdReport?.total?.cvr[filterthird]) && isFinite(thirdReport?.total?.cvr[filterthird]) && !isNaN(thirdReport?.total?.cvr[filterthird]) ?
        JSON.parse((thirdReport?.total?.cvr[filterthird] * 100).toFixed(2)) : 0,
      "Spends %": 100,
      "Sales %": 100,
    },
    {
      "Campaign Type": "",
      "Total Spends": "",
      "Ad sales": "",
      "ACOS": "",
      "Spends %": "",
      "Sales %": "",
    },
    // fourth 
    {
      "Campaign Type": "ASIN",
      "Total Spends": "Total Spends",
      "Ad sales": "Ad sales",
      "ACOS": "ACOS",
      "Spends %": "Spends %",
      "Sales %": "Sales %",
    },
    {
      "Campaign Type": "Band A",
      "Total Spends": Boolean(forthReport['brandA']?.totalSpends?.total) && isFinite(forthReport['brandA'].totalSpends.total) && !isNaN(forthReport['brandA'].totalSpends.total) ?
        JSON.parse(forthReport['brandA'].totalSpends.total.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport['brandA']?.totalSales?.total) && isFinite(forthReport['brandA'].totalSales.total) && !isNaN(forthReport['brandA'].totalSales.total) ?
        JSON.parse(forthReport['brandA'].totalSales.total.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport['brandA']?.acos?.total) && isFinite(forthReport['brandA'].acos.total) && !isNaN(forthReport['brandA'].acos.total) ?
        JSON.parse((forthReport['brandA'].acos.total * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport['brandA']?.spends?.total) && isFinite(forthReport['brandA'].spends.total) && !isNaN(forthReport['brandA'].spends.total) ?
        JSON.parse(forthReport['brandA'].spends.total.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport['brandA']?.sales?.total) && isFinite(forthReport['brandA'].sales.total) && !isNaN(forthReport['brandA'].sales.total) ?
        JSON.parse(forthReport['brandA'].sales.total.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Band B",
      "Total Spends": Boolean(forthReport['brandB']?.totalSpends?.total) && isFinite(forthReport['brandB'].totalSpends.total) && !isNaN(forthReport['brandB'].totalSpends.total) ?
        JSON.parse(forthReport['brandB'].totalSpends.total.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport['brandB']?.totalSales?.total) && isFinite(forthReport['brandB'].totalSales.total) && !isNaN(forthReport['brandB'].totalSales.total) ?
        JSON.parse(forthReport['brandB'].totalSales.total.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport['brandB']?.acos?.total) && isFinite(forthReport['brandB'].acos.total) && !isNaN(forthReport['brandB'].acos.total) ?
        JSON.parse((forthReport['brandB'].acos.total * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport['brandB']?.spends?.total) && isFinite(forthReport['brandB'].spends.total) && !isNaN(forthReport['brandB'].spends.total) ?
        JSON.parse(forthReport['brandB'].spends.total.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport['brandB']?.sales?.total) && isFinite(forthReport['brandB'].sales.total) && !isNaN(forthReport['brandB'].sales.total) ?
        JSON.parse(forthReport['brandB'].sales.total.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Band C",
      "Total Spends": Boolean(forthReport['brandC']?.totalSpends?.total) && isFinite(forthReport['brandC'].totalSpends.total) && !isNaN(forthReport['brandC'].totalSpends.total) ?
        JSON.parse(forthReport['brandC'].totalSpends.total.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport['brandC']?.totalSales?.total) && isFinite(forthReport['brandC'].totalSales.total) && !isNaN(forthReport['brandC'].totalSales.total) ?
        JSON.parse(forthReport['brandC'].totalSales.total.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport['brandC']?.acos?.total) && isFinite(forthReport['brandC'].acos.total) && !isNaN(forthReport['brandC'].acos.total) ?
        JSON.parse((forthReport['brandC'].acos.total * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport['brandC']?.spends?.total) && isFinite(forthReport['brandC'].spends.total) && !isNaN(forthReport['brandC'].spends.total) ?
        JSON.parse(forthReport['brandC'].spends.total.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport['brandC']?.sales?.total) && isFinite(forthReport['brandC'].sales.total) && !isNaN(forthReport['brandC'].sales.total) ?
        JSON.parse(forthReport['brandC'].sales.total.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Total",
      "Total Spends": Boolean(forthReport['total']?.totalSpends?.total) && isFinite(forthReport['total'].totalSpends.total) && !isNaN(forthReport['total'].totalSpends.total) ?
        JSON.parse(forthReport['total'].totalSpends.total.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport['total']?.totalSales?.total) && isFinite(forthReport['total'].totalSales.total) && !isNaN(forthReport['total'].totalSales.total) ?
        JSON.parse(forthReport['total'].totalSales.total.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport['total']?.acos?.total) && isFinite(forthReport['total'].acos.total) && !isNaN(forthReport['total'].acos.total) ?
        JSON.parse((forthReport['total'].acos.total * 100).toFixed(2)) : 0,
      "Spends %": 100,
      "Sales %": 100,
    },
    {
      "Campaign Type": "",
      "Total Spends": "",
      "Ad sales": "",
      "ACOS": "",
      "Spends %": "",
      "Sales %": "",
    },
    // fifth 
    {
      "Campaign Type": "Campaign",
      "Total Spends": "Total Spends",
      "Ad sales": "Ad sales",
      "ACOS": "ACOS",
      "Spends %": "Spends %",
      "Sales %": "Sales %",
    },
    {
      "Campaign Type": "SP Campaign",
      "Total Spends": Boolean(forthReport[filterfourth]?.totalSpends?.sp_value) && isFinite(forthReport[filterfourth].totalSpends.sp_value) && !isNaN(forthReport[filterfourth].totalSpends.sp_value) ?
        JSON.parse(forthReport[filterfourth].totalSpends.sp_value.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport[filterfourth]?.totalSales?.sp_value) && isFinite(forthReport[filterfourth].totalSales.sp_value) && !isNaN(forthReport[filterfourth].totalSales.sp_value) ?
        JSON.parse(forthReport[filterfourth].totalSales.sp_value.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport[filterfourth]?.acos?.sp_value) && isFinite(forthReport[filterfourth].acos.sp_value) && !isNaN(forthReport[filterfourth].acos.sp_value) ?
        JSON.parse((forthReport[filterfourth].acos.sp_value * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport[filterfourth]?.spends?.sp_value) && isFinite(forthReport[filterfourth].spends.sp_value) && !isNaN(forthReport[filterfourth].spends.sp_value) ?
        JSON.parse(forthReport[filterfourth].spends.sp_value.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport[filterfourth]?.sales?.sp_value) && isFinite(forthReport[filterfourth].sales.sp_value) && !isNaN(forthReport[filterfourth].sales.sp_value) ?
        JSON.parse(forthReport[filterfourth].sales.sp_value.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "SB Campaign",
      "Total Spends": Boolean(forthReport[filterfourth]?.totalSpends?.sb_value) && isFinite(forthReport[filterfourth].totalSpends.sb_value) && !isNaN(forthReport[filterfourth].totalSpends.sb_value) ?
        JSON.parse(forthReport[filterfourth].totalSpends.sb_value.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport[filterfourth]?.totalSales?.sb_value) && isFinite(forthReport[filterfourth].totalSales.sb_value) && !isNaN(forthReport[filterfourth].totalSales.sb_value) ?
        JSON.parse(forthReport[filterfourth].totalSales.sb_value.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport[filterfourth]?.acos?.sb_value) && isFinite(forthReport[filterfourth].acos.sb_value) && !isNaN(forthReport[filterfourth].acos.sb_value) ?
        JSON.parse((forthReport[filterfourth].acos.sb_value * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport[filterfourth]?.spends?.sb_value) && isFinite(forthReport[filterfourth].spends.sb_value) && !isNaN(forthReport[filterfourth].spends.sb_value) ?
        JSON.parse(forthReport[filterfourth].spends.sb_value.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport[filterfourth]?.sales?.sb_value) && isFinite(forthReport[filterfourth].sales.sb_value) && !isNaN(forthReport[filterfourth].sales.sb_value) ?
        JSON.parse(forthReport[filterfourth].sales.sb_value.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "SD Campaign",
      "Total Spends": Boolean(forthReport[filterfourth]?.totalSpends?.sd_value) && isFinite(forthReport[filterfourth].totalSpends.sd_value) && !isNaN(forthReport[filterfourth].totalSpends.sd_value) ?
        JSON.parse(forthReport[filterfourth].totalSpends.sd_value.toFixed(2)) : 0,
      "Ad sales": Boolean(forthReport[filterfourth]?.totalSales?.sd_value) && isFinite(forthReport[filterfourth].totalSales.sd_value) && !isNaN(forthReport[filterfourth].totalSales.sd_value) ?
        JSON.parse(forthReport[filterfourth].totalSales.sd_value.toFixed(2)) : 0,
      "ACOS": Boolean(forthReport[filterfourth]?.acos?.sd_value) && isFinite(forthReport[filterfourth].acos.sd_value) && !isNaN(forthReport[filterfourth].acos.sd_value) ?
        JSON.parse((forthReport[filterfourth].acos.sd_value * 100).toFixed(2)) : 0,
      "Spends %": Boolean(forthReport[filterfourth]?.spends?.sd_value) && isFinite(forthReport[filterfourth].spends.sd_value) && !isNaN(forthReport[filterfourth].spends.sd_value) ?
        JSON.parse(forthReport[filterfourth].spends.sd_value.toFixed(2)) : 0,
      "Sales %": Boolean(forthReport[filterfourth]?.sales?.sd_value) && isFinite(forthReport[filterfourth].sales.sd_value) && !isNaN(forthReport[filterfourth].sales.sd_value) ?
        JSON.parse(forthReport[filterfourth].sales.sd_value.toFixed(2)) : 0,
    },
    {
      "Campaign Type": "Total",
      "Total Spends": calculateFifthTableTotal(forthReport, filterfourth, 'totalSpends'),
      "Ad sales": calculateFifthTableTotal(forthReport, filterfourth, 'totalSales'),
      "ACOS": calculateFifthTableTotal(forthReport, filterfourth, 'acos'),
      "Spends %": calculateFifthTableTotal(forthReport, filterfourth, 'spends'),
      "Sales %": calculateFifthTableTotal(forthReport, filterfourth, 'sales'),
    },
  ]
  const workbook = XLSX.utils.book_new();

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Calculate column widths dynamically
  const calculateColumnWidths = (data: any) => {
    const colWidths:any = [];

    data.forEach((row: any) => {
      Object.keys(row).forEach((key, colIdx) => {
        const cellContent = row[key] ? row[key].toString() : "";
        colWidths[colIdx] = Math.max(
          colWidths[colIdx] || key.length, // Header length
          cellContent.length // Cell content length
        );
      });
    });

    return colWidths.map((wch: any) => ({ wch: wch + 2 })); // Add padding for better spacing
  };

  worksheet["!cols"] = calculateColumnWidths(data);

  // Apply styles: Left alignment and borders
   
  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  for (let row = range.s.r; row <= range.e.r; row++) {
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
      if (!worksheet[cellAddress]) continue;

      worksheet[cellAddress].s = {
        alignment: { horizontal: "left" }, // Left alignment
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } },
        },
      };
    }
  }

  // Append worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array", cellStyles: true });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "Atom 11 - Amazon Ad Spend Audit Calculator Results.xlsx");
};

export default exportToExcel;
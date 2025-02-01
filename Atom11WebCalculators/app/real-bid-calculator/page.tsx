"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductAdv from "./components/ProductAdv";
import FAQ from "./components/FAQ";
import Tabs from "./components/Tabs";
import { ProcessProvider } from "./components/ProcessContext";

export default function PpcAuditCalculator() {

  return (
    <ProcessProvider >
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-pink-100 to-blue-100">
        <Header />
        <div className="p-8 rounded-lg shadow-md mx-auto">
          <div className="bg-white rounded-lg">
            <Tabs />
            <FAQ faqs={faqs} imagePath="/assets"/>
            <ProductAdv />
            <Footer />
          </div>
        </div>
      </div>
    </ProcessProvider>
  );
}

const faqs = [
  {
    question: 'How can I use this calculator?',
    answer: [
      { text: 'To use this calculator, take the following steps.' },
    ],
    steps: [
      { text: "Step 1: Upload your Bulk report in the second block. Bulk report can be found here: Amazon Ad Campaign Manager > Sponsored Ads > Bulk Operations > Select Date Range > Download" },
      { text: "Step 2: Whatever the process is right that" },
      { text: "Step 3: Download report" },
      { text: "Step 4: Refer to columns XX and YY  for real bid, CPC/Bid and CPC/Real Bid" },
    ]
  },
  {
    question: 'What is a Real Bid? How is it different from the actual bid?',
    answer: [
      { text: 'On Amazon Ads, your keyword bid can be enhanced with bidding strategies (fixed, down only and up and down) and placement adjustments (Top of search, rest of search and product page). Real bid is calculated by taking into account these adjustments.' },
    ],
    steps:[
      { text: 'For ex. ' },
      { text: 'Keyword 1 bid: 1$ ' },
      { text: 'Bidding adjustment: up and down ' },
      { text: 'Top of search %: 100%. ' },
      { text: 'Real Bid = 1*(1+TOS%)*(1+Bidding strategy) ' },
      { text: 'Real Bid = 1*(1+1)*(1+1) = 4$' },
    ]
  },
  {
    question: 'Why should I calculate Real Bid?',
    answer: [
      { text: 'There are 2 important reasons to calculate real bid: ' },
    ],
    steps:[
      { text: 'a. Know that Amazon will charge you higher than your bid. For brands and agencies that use top of search adjustments, we have consistently seen CPCs to be higher than bids in 80% of the cases. While placement adjustments give you better control, they also lead to higher spend. ' },
      { text: 'b. Better optimization: Our framework is: If CPC/Real Bid is less than 2 : Optimize Bids, If CPC/Real Bid is greater than 2, Optimize Placement adjustments.' },

    ]
  },
  {
    question: 'How long will it take to run this tool and get results?',
    answer: [
      { text: 'It will take you less than a minute to get the real bids for all keywords. Just upload your report and the processed download will be ready in less than a minute.' },
    ],
  },
  {
    question: "Is it safe to upload my bulk file in this tool?",
    answer: [
      { text: 'Yes, it is completely safe to upload your business reports and Amazon Ads Bulk files in this audit calculator. We do not save your data on our servers. Furthermore, you are not required to provide any date ranges or details related to your account. Your information stays private and secure.' },
    ],
  },
];

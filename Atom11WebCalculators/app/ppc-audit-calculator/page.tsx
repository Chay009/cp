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
    question: 'Why should you audit your Amazon Ads account?',
    answer: [
      { text: 'It is important to audit your Amazon Ad spend to identify inefficiencies and wasted spend. It also helps you understand how to better allocate spend on various types of campaigns, placements, ASINs and keyword types.' },
    ],
  },
  {
    question: 'What documents are required to run this audit?',
    answer: [
      { text: 'You will need your (a) Business Reports',link: { text: '(available here)', url: 'https://sellercentral.amazon.com/'}},
      { text: 'and (b) Amazon Ads Bulk Files',link: { text: '(available here)', url: 'https://advertising.amazon.com/'}},
      { text: 'to run this audit.' },
    ],
  },
  {
    question: 'How will bulk files help in running an Amazon Ads audit?',
    answer: [
      { text: 'Amazon Ads Bulk files will give the Amazon Ads audit calculator all the information that it needs for different types of campaigns, ASINs, keyword types and placement types. The Amazon ads audit calculator will aggregate data and provide the results.' },
    ],
  },
  {
    question: 'How will Business Reports help in running an Amazon Ads audit?',
    answer: [
      { text: 'Business reports will give total sales by ASIN. The Amazon Ads audit calculator will marry this information with the Amazon Ads bulk file to figure out Ad Spend and Performance by ASIN type.' },
    ],
  },
  {
    question: 'What are ASIN Bands that you have mentioned in the Amazon Ads audit report?',
    answer:[
      { text: 'At Atom11, we divide all your ASINs into 3 bands:' },
    ],
    steps: [
      { text: 'Band A are ASINs that contribute to the top 50% of total sales. These are usually your top sellers and best performers. More than 60% Amazon advertising spend should be done on this Band of ASINs.' },
      { text: 'Band B are ASINs that contribute to the middle 30% of total sales. Together Band A + Band B are top 80% of total sales. 30% of Amazon advertising spend should be done on this Band of ASINs' },
      { text: 'Band C are ASINs that contribute to the bottom 20% of total sales. Unless you are launching new products frequently, then Amazon advertising spend on this Band of ASINs should be minimal.' },

    ],
  },
  {
    question: 'How long will this audit take before it can provide results?',
    answer: [
      { text: 'The audit runs within seconds of you uploading your files.' },
    ],
  },
  {
    question: 'Is it safe to upload my business report in this audit?',
    answer: [
      { text: 'Yes, it is completely safe to upload your business reports and Amazon Ads Bulk files in this audit calculator. We do not save your data in our servers. Further more, you are required to provide any date ranges or details related to your account. Your information stays private and secure.' },
    ],
  },
  {
    question: "What should I do if I am facing an issue on Atom11's Amazon PPC Spend Audit Calculator?",
    answer: [
      { text: 'Sorry to hear that you faced an issue while using this calculator. Please provide your feedback in this form, and our team will get back to you as soon as possible.' },
      {link: { text: 'here', url: 'https://docs.google.com/forms/d/e/1FAIpQLSefiNpo5LzmSUat_49B3NgH_StarqNyMnRSlzKfd5TIAYfN3A/formrestricted'}},
    ],
  },
];

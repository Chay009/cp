"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductAdv from "./components/ProductAdv";
import FAQ from "./components/FAQ";
import Tabs from "./components/Tabs";
import { ProcessProvider } from "./components/ProcessContext";

export default function Home() {
  return (
    <ProcessProvider >
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-pink-100 to-blue-100">
        <Header/>
        <div className="p-8 rounded-lg shadow-md mx-auto">
          <div className="bg-white rounded-lg">
            <Tabs />
            <FAQ faqs={faqs} imagePath="/assets"/>
            <ProductAdv/>
            <Footer />
          </div>
        </div>
      </div>
    </ProcessProvider>
  );
}

const faqs = [
  {
    question: 'Why is Dayparting?',
    answer: [
      { text: 'Dayparting is an Amazon PPC strategy that identifies the optimal times to advertise based on customer buying behavior. For example, if customers tend to make more purchases or exhibit higher conversion rates on Mondays and Wednesdays, or between 7 AM and 1 PM daily, these periods represent the best times to advertise. By leveraging the dayparting strategy, advertisers can increase ad spend and focus during peak hours while reducing spend during non-peak hours. Learn more about dayparting' },
      {link: { text: 'here', url: 'https://www.atom11.co/blog/efficient-dayparting-strategy-for-amazon-advertisers' } },
    ],
  },
  {
    question: "Why is Dayparting important?",
    answer: [
      { text: "Amazon PPC Dayparting enables you to allocate higher budgets during peak hours, maximizing visibility and driving more sales. Conversely, it allows you to lower bids and budgets during low-converting periods, improving ad performance and optimizing spend efficiency"} 
    ],
  },
  {
    question: 'How does this calculator function?',
    answer: [
      { text: "The Dayparting framework evaluates hourly ad performance based on a Performance Score that considers ACoS, sales, conversion rate (CVR), and ad spend. Each hour's performance is scored by normalizing these metrics and applying assigned weights. Scores are aggregated for time slots, ranking them from best to worst. Recommendations are then made for the top-performing slots and low-performing slots. This approach optimizes ad spend, improves ROI, and aligns ad visibility with peak performance hours. " },
      { text: 'You can read more about the Amazon PPC Dayparting framework ', link: { text: 'here', url: 'https://www.atom11.co/blog/dayparting-framework' } },
      { text: '.', image: 'image1.png' },
    ],
  },
  {
    question: "How can I use this calculator?",
    answer: [{text: 'To use this calculator, follow these steps: '}],
    steps: [
      { text: 'Step 1: How to download Amazon PPC hourly report: ' },
      { text: '1a. Go to Amazon Advertising console > Measurement and Reporting > Sponsored Ads Reports' },
      { text: '1b. Click on Create Report', image: 'image2.png'},
      { text: '1c. Select Sponsored Products Hourly Campaign Report and “Run Report”'},
      { text: '1d. Download report', image: 'image3.png'},
      { text: 'Step 2: Now upload this report to atom11 free dayparting calculator', image: 'image4.png' },
      { text: 'From here, you can check your recommendations on the Results and Recommendations tab.' },
    ],
  },
  {
    question: "What is Performance Score ?",
    answer: [
      { text: "Atom11's dayparting analysis calculator utilizes a performance score metric to assess hourly performance based on key factors such as ACoS, CVR, ad spend, and ad orders. Each factor is assigned a specific weight, and these are combined into a formula that generates the performance score. Furthermore, intuitive insights are integrated into the process to refine and optimize the decisions derived from the performance function, ensuring more accurate and effective outcomes."} 
    ],
  },
  {
    question: "Can I get a demo of the Dayparting feature?",
    answer: [ 
      { text: "Yes, you can", link: { text: 'book a demo', url: 'https://meetings.hubspot.com/neha-bhuchar?uuid=8c9a2ede-5c9e-4736-af9e-9180e6ad4017'}},
      {text: "to schedule a personalized session showcasing Dayparting capabilities customized to suit your campaigns."}
    ],
  },
  {
    question: "Calculator not suggesting the correct framework. What should I do?",
    answer: [ 
      {text: 'If you feel that the recommendations are not at par with your expectations, drop us a ticket '},
      {button: "Raise a ticket"}
    ],
  }
];

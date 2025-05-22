import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const caseStudyContent = {
  'edtech-platform': {
    title: 'Edtech Platform',
    author: 'abhinab',
    date: 'February 11, 2025',
    category: 'Education',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Building a Scalable Edtech for Seamless Student Engagement</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Introduction</h3>
        <p className="mb-4">With the rapid shift towards online education, our client—a leading ed-tech startup—wanted to create an interactive and scalable e-learning platform that ensures seamless student engagement. Their existing system struggled with performance issues & low engagement.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Low Student Engagement:</b> Users found traditional learning apps monotonous and uninteractive.</li>
          <li><b>Scalability Issues:</b> With increasing users, their old system crashed frequently.</li>
          <li><b>Limited AI Personalization:</b> The app lacked an intelligent recommendation system.</li>
          <li><b>Inefficient Live Classes:</b> Poor video streaming caused interruptions during sessions.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Our Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Live Class Integration</b> – Seamless video streaming using WebRTC & AWS.</li>
          <li><b>Gamification Features</b> – Badges, leaderboards & progress tracking to boost engagement.</li>
          <li><b>Scalable Cloud Infrastructure</b> – Optimized with AWS Lambda & Firebase for high traffic handling.</li>
          <li><b>Offline Learning Mode</b> – Downloadable content for users with limited internet access.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Technologies Used</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Frontend:</b> React Native (Cross-platform development)</li>
          <li><b>Backend:</b> Node.js, Firebase (Real-time database & notifications)</li>
          <li><b>Cloud & Storage:</b> AWS, Digital Ocean</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results & Impact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>3X Student Engagement Growth</b> – Gamification & AI personalization increased app retention.</li>
          <li><b>99.9% Uptime Achieved</b> – Scalable cloud-based infrastructure prevented crashes.</li>
          <li><b>40% More Course Completions</b> – AI-driven recommendations kept students learning.</li>
        </ul>
      </>
    ),
  },
  'fintech-solutions': {
    title: 'Fintech Solutions',
    author: 'siva',
    date: 'February 11, 2025',
    category: 'Finance',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Fintech Solution for Microfinance</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Introduction</h3>
        <p className="mb-4">A microfinance institution (MFI), of a NBFC wanted to expand its reach and improve the efficiency of its loan disbursement and repayment processes.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Limited Access to Finance:</b> Many rural communities lacked access to traditional banking services.</li>
          <li><b>High Operational Costs:</b> Manual loan processing was expensive and time-consuming.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Our Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Digital Loan Applications:</b> Customers could apply for loans using their mobile phones.</li>
          <li><b>Automated Loan Processing:</b> Algorithms to assess creditworthiness and approve loans quickly.</li>
          <li><b>Mobile Repayments:</b> Customers could repay loans using mobile wallets or other digital payment methods.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Technologies Used</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Mobile Development:</b> Android/iOS</li>
          <li><b>Backend:</b> Node.js or Python</li>
          <li><b>Payment Gateway Integration:</b> (e.g., UPI, mobile wallets)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results & Impact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Increased Customer Reach:</b> The mobile platform enabled the MFI to reach more customers in remote areas.</li>
          <li><b>Reduced Operational Costs:</b> Automated loan processing and digital repayments reduced costs.</li>
          <li><b>Improved Loan Repayment Rates:</b> Mobile reminders and easy repayment options improved repayment rates.</li>
        </ul>
      </>
    ),
  },
  'blockchain-powered-supply-chain': {
    title: 'Blockchain-Powered Supply Chain',
    author: 'Sangram',
    date: 'February 11, 2025',
    category: 'Blockchain',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Blockchain-Powered Supply Chain Management for Transparency & Traceability</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Introduction</h3>
        <p className="mb-4">A global retail company faced major supply chain challenges—lack of transparency, delays in shipment tracking, and counterfeit products entering the market. They needed a blockchain-powered solution to enhance visibility, traceability, and efficiency while ensuring authenticity at every step.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Limited Shipment Visibility:</b> Real-time tracking was difficult due to multiple intermediaries.</li>
          <li><b>Counterfeit Products:</b> Lack of product authentication led to customer trust issues.</li>
          <li><b>Inefficient Paper-Based Records:</b> Manual documentation caused delays & errors.</li>
          <li><b>Complex Supply Chain Network:</b> Multiple stakeholders made data synchronization difficult.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Our Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Enabled real-time tracking</b> by recording every transaction on an immutable ledger.</li>
          <li><b>Verified product authenticity</b> using blockchain-powered smart contracts & QR codes.</li>
          <li><b>Automated documentation</b> by replacing paper-based records with digital, verifiable data.</li>
          <li><b>Integrated IoT sensors</b> to track environmental conditions (temperature, humidity, etc.).</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Technologies Used</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Blockchain Framework:</b> Hyperledger Fabric for permissioned, enterprise-grade security</li>
          <li><b>Smart Contracts:</b> Solidity-based contracts automating supplier-buyer agreements</li>
          <li><b>IoT Integration:</b> Sensors connected to blockchain for real-time data logging</li>
          <li><b>Decentralized Ledger:</b> Ensuring transparency for all stakeholders (manufacturers, distributors, retailers)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results & Impact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>80% Faster Shipment Tracking</b> – End-to-end transparency reduced delays & miscommunication.</li>
          <li><b>100% Product Authenticity</b> – Customers could verify product origins via blockchain-stored QR codes.</li>
          <li><b>70% Lower Fraud Cases</b> – Eliminated counterfeit goods from entering the supply chain.</li>
          <li><b>Zero Paperwork Hassle</b> – Automated transactions saved time & costs.</li>
        </ul>
      </>
    ),
  },
  'optimizing-inventory-for-an-ecommerce-startup': {
    title: 'Optimizing Inventory for an eCommerce Startup',
    author: 'abhinab',
    date: 'February 11, 2025',
    category: 'Retail',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Retail – Optimizing Inventory with AI-Driven Insights</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Introduction</h3>
        <p className="mb-4">A fast-growing eCommerce startup was struggling with inventory management, leading to frequent stockouts and overstocking. They needed a data-driven solution to optimize inventory levels and improve order fulfillment.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Frequent Stockouts:</b> Inaccurate demand forecasting led to lost sales opportunities.</li>
          <li><b>Overstocking:</b> Excess inventory increased holding costs and reduced cash flow.</li>
          <li><b>Manual Inventory Tracking:</b> Inefficient processes caused delays in order fulfillment.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Our Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>AI-Driven Demand Forecasting:</b> Machine learning models predicted sales trends and optimized stock levels.</li>
          <li><b>Automated Inventory Updates:</b> Real-time tracking of inventory across multiple warehouses.</li>
          <li><b>Integrated Order Management:</b> Seamless integration with eCommerce platforms for efficient order processing.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Technologies Used</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>AI & Machine Learning:</b> Python, TensorFlow</li>
          <li><b>Inventory Management:</b> Custom dashboard, API integrations</li>
          <li><b>eCommerce Integration:</b> Shopify, WooCommerce</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results & Impact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>30% Reduction in Stockouts</b> – Improved demand forecasting reduced lost sales.</li>
          <li><b>25% Lower Inventory Costs</b> – Optimized stock levels minimized excess inventory.</li>
          <li><b>Faster Order Fulfillment</b> – Automated processes sped up delivery times.</li>
        </ul>
      </>
    ),
  },
  'document-abstraction-using-ocr-and-machine-learning': {
    title: 'Document Abstraction Using OCR and Machine Learning',
    author: 'siva',
    date: 'January 10, 2025',
    category: 'AI & ML',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Document Abstraction Using OCR and Machine Learning</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Client Overview</h3>
        <p className="mb-4">A leading global professional services firm sought a solution to automate extraction and processing of key information from large volumes of unstructured documents.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Manual Data Entry:</b> High labor costs and error rates due to manual document processing.</li>
          <li><b>Unstructured Data:</b> Documents in various formats made automation difficult.</li>
          <li><b>Scalability:</b> Need to process thousands of documents daily.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Our Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>OCR Integration:</b> Automated text extraction from scanned documents using Optical Character Recognition.</li>
          <li><b>Machine Learning Models:</b> Custom models to classify, extract, and validate key data fields.</li>
          <li><b>Workflow Automation:</b> End-to-end pipeline for document ingestion, processing, and export.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Technologies Used</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>OCR:</b> Tesseract, Google Vision API</li>
          <li><b>Machine Learning:</b> Python, Scikit-learn</li>
          <li><b>Workflow Automation:</b> Apache Airflow</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results & Impact</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>80% Faster Document Processing</b> – Automation reduced turnaround time.</li>
          <li><b>99% Data Accuracy</b> – Machine learning models minimized errors.</li>
          <li><b>Scalable Solution</b> – System handled large document volumes with ease.</li>
        </ul>
      </>
    ),
  },
  'erp-for-small-businesses': {
    title: 'ERP for Small Businesses',
    author: 'siva',
    date: 'February 11, 2025',
    category: 'Business',
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Cloud-Based ERP for Small Businesses – Enhancing Efficiency & Cost Savings</h2>
        <h3 className="text-xl font-semibold mb-2 mt-6">Introduction</h3>
        <p className="mb-4">Small businesses often struggle with scattered operations, manual workflows, and inefficient financial tracking. A growing B2B wholesale distributor with 50+ suppliers and 200+ clients faced poor inventory tracking, delayed invoicing, and high operational costs due to outdated manual processes.</p>
        <p className="mb-4">Boldtribe Innovation implemented a cost-effective, cloud-based ERP system tailored for small businesses, enabling seamless inventory tracking, automated invoicing, and real-time financial reporting. This reduced errors, improved cash flow, and enhanced decision-making for the business.</p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Challenges</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Manual Order Processing</b> – Orders were tracked using Excel sheets, causing errors & delays.</li>
          <li><b>Delayed Invoicing & Payments</b> – Generating invoices took 2-3 days, affecting cash flow.</li>
          <li><b>Poor Inventory Management</b> – Stock levels were not updated in real-time, leading to overstocking or stockouts.</li>
          <li><b>No Integration Between Systems</b> – Accounting, sales, and inventory were managed separately, increasing inefficiencies.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Solution</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Automated Order Management</b> – A unified dashboard for seamless order processing & tracking.</li>
          <li><b>Real-Time Inventory Updates</b> – AI-driven demand forecasting to prevent overstocking & stockouts.</li>
          <li><b>Instant Invoicing & Payment Integration</b> – Automated invoice generation with payment gateway integration.</li>
          <li><b>Integrated Financial Reporting</b> – Real-time profit & loss tracking, reducing manual accounting efforts.</li>
          <li><b>Mobile Accessibility</b> – Business owners could manage operations from anywhere via a mobile-friendly ERP interface.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Results</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><b>40% Reduction in Operational Costs</b> – Automation reduced manual work & improved efficiency.</li>
          <li><b>3x Faster Order Processing</b> – Orders were processed in minutes, not days.</li>
          <li><b>25% Faster Invoice Payments</b> – Automated invoicing improved cash flow.</li>
          <li><b>Real-Time Business Insights</b> – AI-powered reports enabled data-driven decision-making.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-6">Conclusion</h3>
        <p className="mb-4">With Boldtribe's cloud-based ERP, the small business eliminated manual inefficiencies, reduced costs, and improved financial health—giving them a competitive edge in their market.</p>
      </>
    ),
  },
  // Add other case studies here...
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudyContent[slug];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/blogs" className="text-blue-400 hover:underline mb-6 inline-block">← Back to Case Studies</Link>
        {study ? (
          <>
            <div className="mb-4">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2">{study.category}</span>
              <span className="text-gray-400 text-xs">{study.date}</span>
            </div>
            <h1 className="text-4xl font-extrabold mb-4 text-yellow-300">{study.title}</h1>
            <div className="mb-8 text-gray-400 text-sm">By {study.author}</div>
            <div className="prose prose-invert max-w-none">{study.content}</div>
          </>
        ) : (
          <div className="text-center py-20 text-2xl">Case Study Not Found</div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDetail; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
// import { author, author2, author3, author4, pic, pic2, pic3, pic4 } from '../../public';

const CaseStudy = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudies = [
    {
      id: 1,
      slug: 'edtech-platform',
      title: "Edtech Platform",
      category: "Education",
      author: "abhinab",
      date: "February 11, 2025",
      image:"/assets/education-supplies-concept-isolated-icon_25030-13387.avif",
       authorImage: "/assets/author.png",
      excerpt: "Building a Scalable Edtech for Seamless Student Engagement"
    },
    {
      id: 2,
      slug: 'erp-for-small-businesses',
      title: "ERP for Small Businesses",
      category: "Business",
      author: "siva",
      date: "February 11, 2025",
      image:"/assets/erp.png" ,
       authorImage:"/assets/author.png",
      excerpt: "Cloud-Based ERP for Small Businesses – Enhancing Efficiency & Cost Savings"
    },
    {
      id: 3,
      slug: 'fintech-solutions',
      title: "Fintech Solutions",
      category: "Finance",
      author: "siva",
      date: "February 11, 2025",
      image: "/assets/fintech.jpg",
      authorImage: "/assets/author.png",
      excerpt: "Fintech Solution for Microfinance"
    },
    {
      id: 4,
      slug: 'blockchain-powered-supply-chain',
      title: "Blockchain-Powered Supply Chain",
      category: "Blockchain",
      author: "Sangram",
      date: "February 11, 2025",
      image: "/assets/blockchain.jpg",
      authorImage: "/assets/author.png",
      excerpt: "Blockchain-Powered Supply Chain Management for Transparency & Traceability"
    },
    {
      id: 5,
      slug: 'optimizing-inventory-for-an-ecommerce-startup',
      title: "Optimizing Inventory for an eCommerce Startup",
      category: "Retail",
      author: "abhinab",
      date: "February 11, 2025",
      image: "/assets/inventory.jpg",
      authorImage: "/assets/author.png",
      excerpt: "Retail – Optimizing Inventory with AI-Driven Insights"
    },
    {
      id: 6,
      slug: 'document-abstraction-using-ocr-and-machine-learning',
      title: "Document Abstraction Using OCR and Machine Learning",
      category: "AI & ML",
      author: "siva",
      date: "January 10, 2025",
      image: "/assets/ai_ml.avif",
      authorImage: "/assets/author.png",
      excerpt: "Client Overview A leading global professional services firm sought a solution to automate extraction and processing"
    }
  ];

  return (
    <div className="bg-[#781b1b] text-white min-h-screen">
      {/* Navbar - Full Width */}
      <div className="w-full absolute top-0 left-0 m-0">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-12 px-2 sm:px-4 relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto py-2 sm:py-3 min-h-[60px]" >
            {/* Page Title (Center) */}
            <div className="flex flex-col items-center justify-center mx-auto">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">Case Study</h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 mt-1 text-xs xs:text-sm sm:text-base">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>|</span>
                <span>Case Study</span>
              </div>
            </div>

            {/* Search Bar (Right) */}
            <div className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 w-40 xs:w-52 sm:w-64 max-w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 bg-[#232432] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base pr-10"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-2 xs:px-4 py-6 sm:py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-study/${study.slug}`} className="bg-white shadow-lg rounded-2xl overflow-hidden group hover:scale-[1.03] transition-all duration-300 block">
              <div className="relative h-32 xs:h-40 sm:h-48">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4">
                  <span className="inline-block px-2 xs:px-3 py-1 bg-blue-600 text-white rounded-full text-xs xs:text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-2 xs:p-4 sm:p-6">
                <h3 className="text-xs xs:text-base sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-xs xs:text-sm text-gray-700 mb-3 line-clamp-2">{study.excerpt}</p>
                <div className="flex items-center gap-2 xs:gap-2 sm:gap-3">
                  <img 
                    src={study.authorImage} 
                    alt={study.author} 
                    className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-xs xs:text-sm text-black">{study.author}</p>
                    <p className="text-xs text-gray-500">{study.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
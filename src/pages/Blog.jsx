import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      image: "/assets/Desktop - 38.png",
      authorImage: "/assets/Desktop - 36.png"
    },
    {
      id: 2,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      image: "/assets/image 73.png",
      authorImage: "/assets/Desktop - 37.png"
    },
    {
      id: 3,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      image: "/assets/image 75.png",
      authorImage: "/assets/Desktop - 38.png"
    },
    {
      id: 4,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Ernie Smith",
      date: "August 20, 2022",
      image: "/assets/Desktop - 39.png",
      authorImage: "/assets/Desktop - 39.png"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-8 pb-8 sm:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 sm:mb-12">
            <Navbar />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
            {/* Theme Toggle (Left) */}
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Page Title (Center) */}
            <div className="text-center order-first sm:order-none w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl font-bold">Page Title</h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
                <Link to="/" className="hover:text-white text-sm sm:text-base">Home</Link>
                <span>|</span>
                <span className="text-sm sm:text-base">Link One</span>
              </div>
            </div>

            {/* Search Bar (Right) */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-3 sm:px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        {/* Featured Blog Post */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 group">
          <img 
            src="/assets/Desktop - 38.png" 
            alt="Featured Blog" 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-8">
            <span className="inline-block px-3 sm:px-4 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm mb-2 sm:mb-4">
              Technology
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 group-hover:text-blue-400 transition-colors">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h2>
            <div className="flex items-center gap-2 sm:gap-4">
              <img 
                src="/assets/Desktop - 36.png" 
                alt="Author" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm sm:text-base">Tracey Wilson</p>
                <p className="text-xs sm:text-sm text-gray-400">August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative h-40 sm:h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3">
                  <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-xs sm:text-sm">{post.author}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advertisement Section */}
        <div className="mt-8 sm:mt-16 p-4 sm:p-8 bg-gray-900 rounded-2xl text-center">
          <p className="text-gray-400 mb-2 text-xs sm:text-sm">Advertisement</p>
          <p className="text-base sm:text-lg">You can place ads</p>
          <p className="text-xs sm:text-sm text-gray-400">750x100</p>
        </div>
      </div>
    </div>
  );
};

export default Blog; 
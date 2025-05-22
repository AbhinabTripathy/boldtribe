import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  return (
    <footer className="bg-white text-black pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {/* Column 1: Company */}
        <div className="mb-6 sm:mb-0">
          <h6 className="text-sm font-bold uppercase text-gray-700 mb-3 sm:mb-4">COMPANY</h6>
          <ul className="space-y-2">
            <li><Link to="/contact" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Contact Us</Link></li>
            <li><Link to="/faq" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">FAQ</Link></li>
            <li><Link to="/report" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Report A Bug</Link></li>
            <li><Link to="/careers" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Careers</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">About Us</Link></li>
          </ul>
        </div>

        {/* Column 2: Support */}
        <div className="mb-6 sm:mb-0">
          <h6 className="text-sm font-bold uppercase text-gray-700 mb-3 sm:mb-4">SUPPORT</h6>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Privacy Policy</Link></li>
            <li><Link to="/jobs" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Jobs</Link></li>
            <li><a href="https://www.linkedin.com/company/boldtribe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Linkedin</a></li>
            <li><Link to="/community" className="text-gray-600 hover:text-red-600 transition text-sm sm:text-base">Community</Link></li>
          </ul>
        </div>

        {/* Column 3: Need Help */}
        <div>
          <h6 className="text-sm font-bold uppercase text-gray-700 mb-3 sm:mb-4">NEED HELP?</h6>
          <div className="mt-3 sm:mt-4">
            <h6 className="text-sm font-bold uppercase text-gray-700 mb-1 sm:mb-2">CALL US DIRECTLY</h6>
            <p className="text-black font-semibold text-sm sm:text-base">+91 76848 36139</p>
          </div>
          <div className="mt-3 sm:mt-4">
            <h6 className="text-sm font-bold uppercase text-gray-700 mb-1 sm:mb-2">EMAIL US DIRECTLY</h6>
            <a href="mailto:support@boldtribe.in" className="text-black font-semibold hover:text-red-600 transition text-sm sm:text-base">support@boldtribe.in</a>
          </div>
        </div>
      </div>

      {/* Copyright & Social Links */}
      <div className="max-w-7xl mx-auto px-4 mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 sm:pt-8">
        <p className="text-gray-600 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Boldtribe Innovations Pvt. Ltd. All rights are reserved.
        </p>
        <div className="flex space-x-3 sm:space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {!acceptedCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center z-50 shadow-lg border-t border-gray-200">
          <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-0 sm:mr-4 text-center sm:text-left">
            We use cookies to provide the best web experience possible. Read privacy policy here.
          </p>
          <button 
            onClick={() => setAcceptedCookies(true)}
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-red-600 text-white rounded-full text-xs sm:text-sm font-bold hover:bg-red-700 transition shadow-md"
          >
            Accept
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
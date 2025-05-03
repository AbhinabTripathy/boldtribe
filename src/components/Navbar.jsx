import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative group w-full max-w-4xl mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white rounded-full overflow-hidden ring-1 ring-gray-900/5">
        <div className="px-4 sm:px-6 py-2">
          <nav className="flex items-center justify-between w-full">
            {/* Logo Only */}
            <div className="flex items-center min-w-fit">
              <img 
                src="/assets/Boldtribe logo.png" 
                alt="BoldTribe" 
                className="h-10 sm:h-14"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-20 ml-10">
              <Link 
                to="/" 
                className={`transition-colors text-lg font-bold ${isActive('/') ? 'text-[#E9442B] drop-shadow-[0_2px_4px_rgba(233,68,43,0.3)]' : 'text-black'}`}
                style={isActive('/') ? {textShadow: '0px 4px 8px #E9442B33'} : {}}
              >
                HOME
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors text-lg font-bold ${isActive('/services') ? 'text-[#E9442B]' : 'text-black'}`}
              >
                SERVICES
              </Link>
              <Link 
                to="/blogs" 
                className={`transition-colors text-lg font-bold ${isActive('/blogs') ? 'text-[#E9442B]' : 'text-black'}`}
              >
                BLOGS
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors text-lg font-bold ${isActive('/contact') ? 'text-[#E9442B]' : 'text-black'}`}
              >
                CONTACT US
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden py-2">
          <div className="px-4 py-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`block py-2 text-lg font-bold ${isActive('/') ? 'text-[#E9442B] drop-shadow-[0_2px_4px_rgba(233,68,43,0.3)]' : 'text-black'}`}
              style={isActive('/') ? {textShadow: '0px 4px 8px #E9442B33'} : {}}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className={`block py-2 text-lg font-bold ${isActive('/services') ? 'text-[#E9442B]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/blogs" 
              className={`block py-2 text-lg font-bold ${isActive('/blogs') ? 'text-[#E9442B]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-lg font-bold ${isActive('/contact') ? 'text-[#E9442B]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { logo } from '../../public';

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
    <div className="relative group w-full max-w-3xl mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white rounded-full overflow-hidden ring-1 ring-gray-900/5">
        <div className="px-3 sm:px-4 py-1.5">
          <nav className="flex items-center justify-between w-full">
            {/* Logo and Navigation Links */}
            <div className="flex items-center gap-8 md:gap-14 w-full">
              <img 
                src={logo}
                alt="BoldTribe" 
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-10 md:gap-14 lg:gap-20 ml-4">
                <Link 
                  to="/" 
                  className={`transition-colors text-base font-bold ${isActive('/') ? 'text-[#E9442B] drop-shadow-[0_2px_4px_rgba(233,68,43,0.3)]' : 'text-black'}`}
                  style={isActive('/') ? {textShadow: '0px 4px 8px #E9442B33'} : {}}
                >
                  HOME
                </Link>
                <Link 
                  to="/services" 
                  className={`transition-colors text-base font-bold ${isActive('/services') ? 'text-[#E9442B]' : 'text-black'}`}
                >
                  SERVICES
                </Link>
                <Link 
                  to="/blogs" 
                  className={`transition-colors text-base font-bold ${isActive('/blogs') ? 'text-[#E9442B]' : 'text-black'}`}
                >
                  BLOGS
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors text-base font-bold ${isActive('/contact') ? 'text-[#E9442B]' : 'text-black'}`}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-[999] top-full left-0 mt-2 w-full min-w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-visible py-2">
          <div className="px-4 py-2 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`block py-2 text-base font-bold ${isActive('/') ? 'text-[#E9442B] drop-shadow-[0_2px_4px_rgba(233,68,43,0.3)]' : 'text-black'}`}
              style={isActive('/') ? {textShadow: '0px 4px 8px #E9442B33'} : {}}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className={`block py-2 text-base font-bold ${isActive('/services') ? 'text-[#E9442B]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/blogs" 
              className={`block py-2 text-base font-bold ${isActive('/blogs') ? 'text-[#E9442B]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-base font-bold ${isActive('/contact') ? 'text-[#E9442B]' : 'text-black'}`}
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
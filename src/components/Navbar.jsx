import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logo } from '../../public';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className={`relative bg-[#d9c6c6] shadow-md transition-all duration-300 ${scrolled ? 'sticky top-0 z-50' : ''}`}>
        <div className="w-full mx-auto" style={{ padding: "0 0" }}>
          <nav className="flex items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0 pl-4 sm:pl-6 md:pl-8">
              <img 
                src={logo}
                alt="BoldTribe" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center w-full">
              <div className="flex flex-wrap mx-auto justify-between" style={{ width: '100%', maxWidth: '900px', paddingRight: '20px' }}>
                <Link 
                  to="/" 
                  className={`transition-colors text-base lg:text-xl xl:text-2xl font-sans p-2 ${isActive('/') ? 'text-[#994a42]' : 'text-black hover:text-[#994a42]'} font-semibold`}
                >
                  HOME
                </Link>
                <Link 
                  to="/services" 
                  className={`transition-colors text-base lg:text-xl xl:text-2xl font-sans p-2 ${isActive('/services') ? 'text-[#994a42]' : 'text-black hover:text-[#994a42]'} font-semibold`}
                >
                  SERVICES
                </Link>
                <Link 
                  to="/blogs" 
                  className={`transition-colors text-base lg:text-xl xl:text-2xl font-sans p-2 ${isActive('/blogs') ? 'text-[#994a42]' : 'text-black hover:text-[#994a42]'} font-semibold`}
                >
                  CASE STUDY
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors text-base lg:text-xl xl:text-2xl font-sans p-2 ${isActive('/contact') ? 'text-[#994a42]' : 'text-black hover:text-[#994a42]'} font-semibold`}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-auto mr-4 p-2 rounded-md text-black hover:bg-red-100 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
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
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50 overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <img src={logo} alt="BoldTribe" className="h-12 w-auto" />
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-black hover:bg-red-100 focus:outline-none"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6 flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`block py-3 text-lg font-sans border-b border-gray-100 ${isActive('/') ? 'text-red-600 font-bold' : 'text-black hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/services" 
                className={`block py-3 text-lg font-sans border-b border-gray-100 ${isActive('/services') ? 'text-red-600 font-bold' : 'text-black hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                to="/blogs" 
                className={`block py-3 text-lg font-sans border-b border-gray-100 ${isActive('/blogs') ? 'text-red-600 font-bold' : 'text-black hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOGS
              </Link>
              <Link 
                to="/contact" 
                className={`block py-3 text-lg font-sans border-b border-gray-100 ${isActive('/contact') ? 'text-red-600 font-bold' : 'text-black hover:text-red-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
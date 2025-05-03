import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      items: ["Static Websites", "Dynamic Websites"],
      description: "Custom website solutions tailored to your business needs",
      image: "/assets/image 73.png"
    },
    {
      title: "Application Development",
      items: ["Android Applications", "iOS Applications"],
      description: "Native and cross-platform mobile applications",
      image: "/assets/image 75.png"
    },
    {
      title: "Digital Marketing",
      items: ["Social Media Marketing", "Search Engine Optimization", "Content Marketing"],
      description: "Comprehensive digital marketing strategies",
      image: "/assets/Desktop - 37.png"
    },
    {
      title: "Enterprise Solutions",
      items: ["ERP Systems", "E-commerce Platforms"],
      description: "Scalable business solutions for growth",
      image: "/assets/image 73.png"
    },
    {
      title: "Advanced Technologies",
      items: ["Blockchain Development", "AI & Machine Learning"],
      description: "Cutting-edge technology solutions",
      image: "/assets/image 75.png"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ 
        backgroundImage: `url('/assets/background image.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-8 pb-12 sm:pb-16 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <Navbar />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-12 sm:mb-24 text-center">
              Our Services
            </h1>
          </div>
        </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <div className="services-grid-bg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://forms.gle/bMcM5yWEzYgHr9no8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors text-sm sm:text-base font-medium"
                >
                  Enquiry
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 
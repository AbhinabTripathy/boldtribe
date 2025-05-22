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
      className="min-h-screen bg-[#781b1b] text-white"
    >
      {/* No opacity overlay */}
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-4 pb-6 sm:pb-8 md:pb-12 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="w-full absolute top-0 left-0 m-0">
              <Navbar />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-12 mt-24 sm:mt-28 text-center">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-200 mb-6 sm:mb-8">
              We provide comprehensive solutions to help your business grow and thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid - With darker background */}
        <div className="py-8 sm:py-12 md:py-20 bg-[#641414]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="services-grid-bg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-3 sm:p-4 md:p-5 rounded-xl bg-white shadow-md group hover:scale-105 transition-transform duration-300 flex flex-col h-auto sm:h-64"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-black">{service.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3">{service.description}</p>
                  <ul className="mb-3 sm:mb-4 space-y-1 flex-grow overflow-y-auto">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-red-700 rounded-full mr-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://forms.gle/bMcM5yWEzYgHr9no8" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-[#781b1b] text-white rounded-full hover:bg-[#641414] transition-colors font-medium self-start mt-auto"
                  >
                    Enquiry
                    <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
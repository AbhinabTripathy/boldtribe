import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="bg-[#781b1b] text-white min-h-screen pb-16 md:pb-0">
      {/* Navbar - Full Width */}
      <div className="w-full absolute top-0 left-0 m-0">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            About BoldTribe
          </h1>
          <p className="text-gray-300 text-center text-lg md:text-xl max-w-3xl mx-auto">
            Empowering businesses through innovation and technology
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-200">
              <p className="text-base md:text-lg leading-relaxed">
                BoldTribe Innovations Pvt. Ltd. is a forward-thinking organization committed to driving innovation and empowering businesses with modern solutions. With a vision to revolutionize industries through creativity, efficiency, and technology, BoldTribe is a powerhouse of diverse sub-brands that cater to various business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-gray-200 text-base md:text-lg">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              Our Vision
            </h3>
            <p className="text-gray-200 text-base md:text-lg">
              To be the leading force in technological innovation, transforming industries and creating sustainable value for our clients and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how BoldTribe can help you achieve your business goals with innovative solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#781b1b] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 
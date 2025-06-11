import React from 'react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="text-xl text-gray-600">Our Privacy Policy is currently being updated.</p>
            <p className="text-gray-500">Please check back soon for our complete privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
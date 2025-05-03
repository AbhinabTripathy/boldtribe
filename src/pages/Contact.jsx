// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from '../components/Navbar';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="bg-[#0a0a0a] text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="pt-8 pb-8 sm:pb-16 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="mb-8 sm:mb-12">
//             <Navbar />
//           </div>
//           <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
//             <span className="text-red-500">Get in touch</span>
//           </h1>
//           <p className="text-base sm:text-xl text-gray-400 mb-4 sm:mb-8 text-center">
//             We are here for you! How can we help?
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
//           {/* Contact Form */}
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-base sm:text-lg mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-red-500 rounded-lg text-white focus:outline-none focus:border-red-600"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-base sm:text-lg mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-red-500 rounded-lg text-white focus:outline-none focus:border-red-600"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-base sm:text-lg mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-red-500 rounded-lg text-white focus:outline-none focus:border-red-600 resize-none"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 sm:py-4 bg-red-500 text-white rounded-lg text-base sm:text-lg font-medium hover:bg-red-600 transition-colors duration-300 relative overflow-hidden group"
//               >
//                 <span className="relative z-10">Submit</span>
//                 <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
//               </button>
//             </form>

//             {/* Contact Information */}
//             <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
//               <div className="flex items-center gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span>545 Mavis Island, IL 89191</span>
//               </div>
//               <div className="flex items-center gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>+2034 4040 3030</span>
//               </div>
//               <div className="flex items-center gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <span>hello@gmail.com</span>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
//               <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </a>
//               <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//               <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Illustration */}
//           <div className="relative hidden md:block">
//             <img 
//               src="/assets/Contact us-amico 2.png" 
//               alt="Contact Illustration" 
//               className="w-full max-w-lg mx-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="pt-4 md:pt-8 pb-8 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 md:mb-12">
            <Navbar />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-yellow-400">
              Get in touch
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6">
              We are here for you! How can we help?
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-12">
              <div>
                <label htmlFor="name" className="block text-base md:text-lg mb-1 md:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border-2 border-yellow-500 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base md:text-lg mb-1 md:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border-2 border-yellow-500 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base md:text-lg mb-1 md:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border-2 border-yellow-500 rounded-lg text-white focus:outline-none focus:border-yellow-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-yellow-400 text-black rounded-lg text-base md:text-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
              >
                Submit
              </button>
            </form>

            {/* Contact Information */}
            <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>545 Mavis Island, IL 89191</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+2034 4040 3030</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media Links - Mobile Only */}
            <div className="fixed bottom-0 right-0 left-0 bg-[#131313] p-4 flex justify-center gap-3 md:hidden z-10">
              <a href="#" className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg fill="currentColor" className="w-4 h-4 text-black" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg fill="currentColor" className="w-4 h-4 text-black" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg fill="currentColor" className="w-4 h-4 text-black" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden sm:block">
            <img 
              src="assets/Contact us-amico 2.png" 
              alt="Contact Illustration" 
              className="w-full max-w-lg mx-auto"
            />
            
            {/* Social Media Links - Vertical on right side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
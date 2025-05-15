import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { abhinab, arpita, code, manoranjan, nikita, rajesh, sivasish, suman, suvendu, vector1, webdveloper, whatsapp } from '../../public';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStep3Complete, setIsStep3Complete] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data - updated to have 4 identical cards with same content
  const testimonials = [
    {
      id: 1,
      quote: "I'm early on in the process of building my website; however, I'm already impressed by customer support's response time. Great customer support ratings is something I consider before purchasing a theme.",
      author: "Amitab Panda"
    },
    {
      id: 2,
      quote: "Bring your ideas to life an intuitive visual editor. Create, edit, and customize your site visually and see the changes instantly.",
      author: "Rituparna Mohapatra"
    },
    {
      id: 3,
      quote: "Incredible theme and fantastic support! Every time I had a question, they got back to you so quickly and fixed your problem! Im so impressed! Thank you guys again for your precious help! Your customer support is amazing!",
      author: "Raj Kumar Dash"
    },
    
  ];

  useEffect(() => {
    // Automatic step transition with 10 second intervals
    const stepInterval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < 3) {
          return prevStep + 1;
        } else {
          // Loop back to step 1 after step 3
          return 1;
        }
      });
    }, 10000); // Change step every 10 seconds

    return () => clearInterval(stepInterval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Step 1",
          subtitle: "Connect & Discover",
          description: "We start with a quick consultation to understand your goals and challenges. Based on this, we create a tailored proposal just for you"
        };
      case 2:
        return {
          title: "Step 2",
          subtitle: "Plan & Set Up",
          description: "After finalizing the agreement, we set up your account and share a clear roadmap to get started smoothly"
        };
      case 3:
        return {
          title: "Step 3",
          subtitle: "Execute & Support",
          description: "Your services go live with dedicated support to ensure everything runs perfectly. We continuously refine our solutions based on your feedback"
        };
      default:
        return {
          title: "Step 1",
          subtitle: "Connect & Discover",
          description: "We start with a quick consultation to understand your goals and challenges. Based on this, we create a tailored proposal just for you"
        };
    }
  };

  const content = getStepContent();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen w-full relative overflow-hidden grid-background">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="h-screen w-full relative z-10 flex flex-col items-center justify-center">
          <div className="w-full absolute top-0 left-0 mt-8">
            <Navbar />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-24 px-4 mt-16">
            {/* Left: Icon */}
            <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0 md:mr-12">
              <div className="rounded-full bg-black p-2 shadow-lg">
                {/* <img src="/assets/face image.png" alt="Hero Icon" className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full" /> */}
              </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-12 text-white" style={{ textShadow: '0 4px 24px #f472b6, 0 1px 0 #fff' }}>
                Your Vision, Our Code<br />
                Boldly Delivered.
              </h1>
              <p className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="text-yellow-400 drop-shadow-[0_0_8px_#facc15]">WELCOME!</span>
                <span className="text-white"> to BOLDTRIBE INNOVATION</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Glassmorphism Figma Style */}
      <section className="min-h-[80vh] md:min-h-[200vh] w-full relative flex items-center justify-center overflow-hidden">
        {/* Fullscreen background image of the person */}
        <img src="/assets/background image.png" alt="Background Person" className="absolute inset-0 w-full h-full object-cover object-center bg-black z-0" />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center w-full px-2 sm:px-4 py-8 md:py-16 min-h-[80vh] md:min-h-[200vh] justify-center">
          {/* Heading and Subheading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg">New ways to build.</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 text-center mb-12 max-w-3xl drop-shadow-lg">
            BoldTribe Innovations empowers businesses with innovative solutions in branding, digital marketing, development, and fast services.
          </p>
          {/* Cards Placement - Glassmorphism */}
          <div className="w-full flex flex-col items-center gap-16">
            {/* Top Card */}
            <div className="w-full flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[280px] md:min-h-[340px] max-w-3xl w-full backdrop-blur-lg bg-white/10 border border-white/20 px-10 py-10" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src={webdveloper} alt="App & Web Dev BG" className="absolute inset-0 w-full h-full object-cover object-top opacity-40 z-0" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">App & Web Development</h3>
                    <p className="text-gray-200 text-lg mb-0">Our design services starts and ends with a best-in-class experience strategy that builds brands. We create world-class digital products materials that</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Row: 2 Vertical Rectangle Cards Side by Side */}
            <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
              {/* Card 2 - Vertical Rectangle */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[420px] max-w-[340px] w-full md:w-[340px] backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-10" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src="/assets/Stroke Illustration - Curvature.png" alt="Branding & Design BG" className="absolute left-1/2 -translate-x-1/2 z-0 object-cover object-bottom opacity-40" style={{ marginTop: '120px', width: '80%', height: '80%', marginLeft: '-40px' }} />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Branding & Design</h3>
                    <p className="text-gray-200 text-lg mb-0">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow</p>
                  </div>
                  <Link to="/services" className="mt-6 px-5 py-2 rounded-full bg-white/20 text-white text-base font-semibold border border-white/30 hover:bg-white/30 transition flex items-center w-max backdrop-blur-md">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              {/* Card 3 - Vertical Rectangle */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[420px] max-w-[340px] w-full md:w-[340px] backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-10" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src="/assets/Stroke Illustration - Smoothing.png" alt="AI & Blockchain BG" className="absolute inset-0 w-full h-full object-cover object-bottom opacity-40 z-0" style={{ marginTop: '90px', width: '80%', height: '80%', marginLeft: '90px' }} />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">AI & Blockchain</h3>
                    <p className="text-gray-200 text-lg mb-0">Revolutionizing industries with the power of AI & Blockchain. Unlock smarter solutions and secure, transparent systems to drive innovation, enhance efficiency, and create trust-driven ecosystems for your business growth.</p>
                  </div>
                  <Link to="/services" className="mt-6 px-5 py-2 rounded-full bg-white/20 text-white text-base font-semibold border border-white/30 hover:bg-white/30 transition flex items-center w-max backdrop-blur-md">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Full Screen */}
      <section className="min-h-screen w-full py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member Cards */}
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={rajesh} alt="Team Member 1" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Rajesh Kumar Pattanaik</span>
                <span className="text-white text-sm md:text-base">Junior Application Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={nikita} alt="Team Member 2" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Nikita Pradhan</span>
                <span className="text-white text-sm md:text-base">Junior UI/UX Deginer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              {/* Manoranjan - blank image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                {/* Optionally, add a placeholder icon here */}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Manoranjan Basantia</span>
                <span className="text-white text-sm md:text-base">Junior Backend Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              {/* Arpita - blank image */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                {/* Optionally, add a placeholder icon here */}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Arpita Singh</span>
                <span className="text-white text-sm md:text-base">Junior Frontend Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={suvendu} alt="Team Member 5" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Suvendhu Kumar Rath</span>
                <span className="text-white text-sm md:text-base">Technical Project Coordinator</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={suman} alt="Team Member 6" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Suman Sahoo</span>
                <span className="text-white text-sm md:text-base">Lead Generation</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={sivasish} alt="Team Member 7" className="w-full h-full object-cover object-center scale-149" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Sivasish Bebartta</span>
                <span className="text-white text-sm md:text-base">Mentor</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src={abhinab} alt="Team Member 8" className="w-full h-full object-cover object-center scale-149" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Abhinab Tripathy</span>
                <span className="text-white text-sm md:text-base">Lead Generation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process - Full Screen */}
      <section id="onboarding-section" className="min-h-screen w-full relative bg-[#18191d] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4">
          {/* Left: Icon + Ellipses */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 relative h-full mb-8 md:mb-0">
            <img 
              src="/assets/Vector.png"
              alt="Connect & Discover Icon" 
              className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] z-10" 
              style={{ filter: 'drop-shadow(0 0 15px #facc15)' }}
            />
            {/* Ellipses */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center ellipse-rotate" style={{ perspective: '500px', marginBottom: '16px' }}>
              <div className="absolute w-[180px] h-[54px] sm:w-[250px] sm:h-[75px] md:w-[400px] md:h-[120px] border-2 border-gray-400 rounded-full opacity-50" style={{ transform: 'rotateX(75deg) translateZ(-20px)', filter: 'blur(0.5px)' }}></div>
              <div className="absolute w-[210px] h-[63px] sm:w-[300px] sm:h-[90px] md:w-[480px] md:h-[140px] border-2 border-gray-400 rounded-full opacity-30" style={{ transform: 'rotateX(75deg) translateZ(-40px)', filter: 'blur(0.5px)' }}></div>
              <div className="absolute w-[240px] h-[72px] sm:w-[350px] sm:h-[105px] md:w-[560px] md:h-[160px] border-2 border-gray-400 rounded-full opacity-20" style={{ transform: 'rotateX(75deg) translateZ(-60px)', filter: 'blur(0.5px)' }}></div>
            </div>
          </div>
          {/* Right: Step Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative h-full pl-0 md:pl-8" style={{ minHeight: '320px' }}>
            {/* Large Number */}
            <span className="text-yellow-400 text-[100px] sm:text-[140px] md:text-[180px] lg:text-[260px] font-bold leading-none transition-all duration-1000 ease-in-out"
              style={{
                fontFamily: 'inherit',
                opacity: 1,
                lineHeight: 1,
                position: 'absolute',
                top: -20,
                right: 50,
                zIndex: 10
              }}>
              {currentStep}
            </span>
            {/* Step Texts */}
            <div className="flex flex-col mt-[80px] sm:mt-[100px] md:mt-[180px] max-w-full sm:max-w-[420px] mx-auto md:mx-0 px-2 sm:px-0" style={{ marginRight: '0px', marginBottom: '40px', fontSize: "18px" }}>
              <span className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold mb-2 tracking-wide transition-all duration-1000 ease-in-out">{content.title}</span>
              <span className="text-gray-200 text-base sm:text-lg md:text-xl mb-4 tracking-wide transition-all duration-1000 ease-in-out">{content.subtitle}</span>
              <span className="text-gray-200 text-sm sm:text-base md:text-lg leading-8 tracking-wide transition-all duration-1000 ease-in-out" style={{ letterSpacing: '0.02em' }}>
                {content.description}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Full Screen */}
      <section id="testimonials-section" className="w-full py-4 px-4 relative bg-[#0a0a0a] flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-center">Testimonials</h2>
          <div className="flex justify-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 text-center">
              People <span className="block sm:inline">are talking.</span>
            </h3>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Testimonial Carousel - Compact Card, Dark Theme */}
            <div className="overflow-hidden relative mx-auto rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 33.33}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-[90%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[33.33%] p-2 flex-shrink-0"
                  >
                    <div className="bg-[#18191d] rounded-xl p-4 shadow-md flex flex-col items-start justify-between h-full min-h-[140px] max-w-xs mx-auto border border-gray-800">
                      <p className="text-gray-200 text-sm mb-3 leading-snug">
                        {testimonial.quote}
                      </p>
                      <span className="font-semibold text-white text-base mt-2">{testimonial.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-[#18191d] hover:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none shadow transition-colors z-10 border border-gray-700"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-[#18191d] hover:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none shadow transition-colors z-10 border border-gray-700"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  } focus:outline-none transition-colors duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Screen */}
      <section className="w-full py-8 px-4 text-center relative flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8">
            <img src={vector1} alt="Editor Icon" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Bring your ideas to life in an intuitive visual editor.
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-400">Create, edit, and Use.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 partner-button rounded-full hover:opacity-90 transition-all"
          >
            PARTNER WITH US
            <img src={whatsapp} alt="WhatsApp" className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
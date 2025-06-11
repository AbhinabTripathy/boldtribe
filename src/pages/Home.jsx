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
    <div className="bg-red-700 text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen w-full relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/image 6344256.png')" }}>
        <div className="h-screen w-full relative z-10 flex flex-col items-center justify-center">
          <div className="w-full absolute top-0 left-0 m-0">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 mt-16">
            {/* Text Content */}
            <div className="flex flex-col items-center text-center w-full max-w-4xl px-4 sm:px-6">
              <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white" style={{ textShadow: '2px 2px 4px rgba(200, 0, 0, 0.7)' }}>
                WELCOME!
                <span className="font-semibold text-white"> to BOLDTRIBE INNOVATION</span>
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight my-4 text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
                Your Vision, Our Code, Boldly Delivered.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Glassmorphism Figma Style */}
      <section className="min-h-[80vh] md:min-h-[100vh] w-full relative flex items-center justify-center overflow-hidden py-16 bg-[#781b1b]">
        {/* Dark overlay for contrast */}
        <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center w-full px-4 py-8 md:py-16">
          {/* Heading and Subheading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4">New ways to build.</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f5b942] text-center mb-8 md:mb-16 max-w-3xl px-4">
            BoldTribe Innovations empowers businesses with innovative solutions in branding, digital marketing, development, and fast services.
          </p>
          {/* Cards Placement - Glassmorphism */}
          <div className="w-full flex flex-col items-center gap-6 md:gap-12">
            {/* Top Card */}
            <div className="w-full flex justify-center px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[240px] sm:min-h-[280px] md:min-h-[300px] w-full max-w-3xl bg-[#641414] border border-[#8a2020] px-4 sm:px-8 py-6 sm:py-8">
                <img src={webdveloper} alt="App & Web Dev BG" className="absolute inset-0 w-full h-full object-cover object-top opacity-30 z-0" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">App & Web Development</h3>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-0">Our design services starts and ends with a best-in-class experience strategy that builds brands. We create world-class digital products materials that</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Row: 2 Vertical Rectangle Cards Side by Side */}
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center px-4">
              {/* Card 2 - Vertical Rectangle */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[320px] sm:min-h-[400px] w-full md:max-w-[320px] bg-[#641414] border border-[#8a2020] px-4 sm:px-6 py-6 sm:py-8 mb-6 md:mb-0">
                <img src="/assets/Stroke Illustration - Curvature.png" alt="Branding & Design BG" className="absolute left-1/2 -translate-x-1/2 z-0 object-cover object-bottom opacity-30" style={{ marginTop: '100px', width: '80%', height: '80%', marginLeft: '-40px' }} />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Branding & Design</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-0">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow</p>
                  </div>
                  <Link to="/services" className="mt-6 px-4 py-2 rounded-full bg-[#8a2020] text-white text-sm font-semibold border border-[#8a2020]/30 hover:bg-[#8a2020]/80 transition flex items-center w-max">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              {/* Card 3 - Vertical Rectangle */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[320px] sm:min-h-[400px] w-full md:max-w-[320px] bg-[#641414] border border-[#8a2020] px-4 sm:px-6 py-6 sm:py-8">
                <img src="/assets/Stroke Illustration - Smoothing.png" alt="AI & Blockchain BG" className="absolute inset-0 w-full h-full object-cover object-bottom opacity-30 z-0" style={{ marginTop: '70px', width: '80%', height: '80%', marginLeft: '70px' }} />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">AI & Blockchain</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-0">Revolutionizing industries with the power of AI & Blockchain. Unlock smarter solutions and secure, transparent systems to drive innovation, enhance efficiency, and create trust-driven ecosystems for your business growth.</p>
                  </div>
                  <Link to="/services" className="mt-6 px-4 py-2 rounded-full bg-[#8a2020] text-white text-sm font-semibold border border-[#8a2020]/30 hover:bg-[#8a2020]/80 transition flex items-center w-max">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          {/* Header and Subheader */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-black">Our Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Explore Our Success Stories and Innovative Projects</p>
          </div>
          
          {/* Team Member Photos - Horizontal Row with Alternating Up-Down Capsule Shape */}
          <div className="flex flex-wrap pb-8 justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative w-full">
            {/* Team Member 1 - Top Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md relative group">
              <img src={rajesh} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Rajesh Kumar</span>
                <span className="text-white text-[10px] sm:text-xs">App Developer</span>
              </div>
            </div>
            {/* Team Member 2 - Bottom Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] relative group">
              <img src={nikita} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Nikita Pradhan</span>
                <span className="text-white text-[10px] sm:text-xs">UI/UX Designer</span>
              </div>
            </div>
            
            {/* Team Member 3 - Top Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md relative group">
              <img src={manoranjan || suvendu} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Manoranjan</span>
                <span className="text-white text-[10px] sm:text-xs">Backend Developer</span>
              </div>
            </div>
            
            {/* Team Member 4 - Bottom Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] relative group">
              <img src={arpita || suman} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Arpita Singh</span>
                <span className="text-white text-[10px] sm:text-xs">Frontend Developer</span>
              </div>
            </div>
            
            {/* Team Member 5 - Top Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md relative group">
              <img src={suvendu} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Suvendu Kumar Rath</span>
                <span className="text-white text-[10px] sm:text-xs">Project Coordinator</span>
              </div>
            </div>
            
            {/* Team Member 6 - Bottom Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] relative group">
              <img src={suman} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Suman Sahoo</span>
                <span className="text-white text-[10px] sm:text-xs">Lead Generation</span>
              </div>
            </div>
            
            {/* Team Member 7 - Top Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md relative group">
              <img src={sivasish} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Sivasish Bebartta</span>
                <span className="text-white text-[10px] sm:text-xs">Mentor</span>
              </div>
            </div>
            
            {/* Team Member 8 - Bottom Position */}
            <div className="team-member-capsule flex-shrink-0 h-[190px] sm:h-[240px] md:h-[315px] w-[68px] sm:w-[90px] md:w-[100px] rounded-[40px] sm:rounded-[60px] overflow-hidden border border-gray-200 shadow-md translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] relative group">
              <img src={abhinab} alt="Team Member" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white font-bold text-xs sm:text-sm">Abhinab Tripathy</span>
                <span className="text-white text-[10px] sm:text-xs">Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Onboarding Process - Full Screen */}
      <section id="onboarding-section" className="min-h-screen w-full relative flex items-center justify-center pb-16 md:pb-24">
        <div className="bg-[#6b0504] py-4 sm:py-6 text-white text-center text-xl sm:text-3xl md:text-5xl font-bold w-full absolute top-0 left-0 z-20">
          Onboarding Process
        </div>
        <div className="bg-[#e7d3d3] w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4 relative z-10 pt-20 md:pt-24">
          {/* Left: Icon + Ellipses */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 relative h-full mb-8 md:mb-0">
            <img 
              src="/assets/Vector.png"
              alt="Connect & Discover Icon" 
              className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-10" 
              style={{ filter: 'drop-shadow(0 0 15px #facc15)' }}
            />
            {/* Ellipses */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center ellipse-rotate" style={{ perspective: '500px', marginBottom: '16px' }}>
              <div className="absolute w-[140px] h-[42px] sm:w-[180px] sm:h-[54px] md:w-[250px] md:h-[75px] lg:w-[400px] lg:h-[120px] border-2 border-gray-400 rounded-full opacity-50" style={{ transform: 'rotateX(75deg) translateZ(-20px)', filter: 'blur(0.5px)' }}></div>
              <div className="absolute w-[170px] h-[51px] sm:w-[210px] sm:h-[63px] md:w-[300px] md:h-[90px] lg:w-[480px] lg:h-[140px] border-2 border-gray-400 rounded-full opacity-30" style={{ transform: 'rotateX(75deg) translateZ(-40px)', filter: 'blur(0.5px)' }}></div>
              <div className="absolute w-[200px] h-[60px] sm:w-[240px] sm:h-[72px] md:w-[350px] md:h-[105px] lg:w-[560px] lg:h-[160px] border-2 border-gray-400 rounded-full opacity-20" style={{ transform: 'rotateX(75deg) translateZ(-60px)', filter: 'blur(0.5px)' }}></div>
            </div>
          </div>
          {/* Right: Step Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative h-full pl-0 md:pl-8" style={{ minHeight: '320px' }}>
            {/* Large Number */}
            <span className="text-yellow-400 text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[260px] font-bold leading-none transition-all duration-1000 ease-in-out"
              style={{
                fontFamily: 'inherit',
                opacity: 1,
                lineHeight: 1,
                position: 'absolute',
                top: -20,
                right: 20,
                zIndex: 10
              }}>
              {currentStep}
            </span>
            {/* Step Texts */}
            <div className="flex flex-col mt-[60px] sm:mt-[80px] md:mt-[120px] lg:mt-[180px] max-w-full sm:max-w-[420px] mx-auto md:mx-0 px-2 sm:px-0" style={{ marginRight: '0px', marginBottom: '40px', fontSize: "18px" }}>
              <span className="text-black text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mb-2 tracking-wide transition-all duration-1000 ease-in-out">{content.title}</span>
              <span className="text-black text-base sm:text-lg md:text-xl mb-4 tracking-wide transition-all duration-1000 ease-in-out">{content.subtitle}</span>
              <span className="text-black text-sm sm:text-base md:text-lg leading-6 sm:leading-8 tracking-wide transition-all duration-1000 ease-in-out" style={{ letterSpacing: '0.02em' }}>
                {content.description}
              </span>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(step)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === step 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to step ${step}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#6b0504] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">Testimonials</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-10">People are talking.</p>
          
          {/* Testimonial Slider Container */}
          <div className="relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  {/* Testimonial Card */}
                  <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
                    <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">"{testimonial.quote}"</p>
                    <p className="text-gray-600 text-sm sm:text-base font-semibold">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2 bg-white text-[#6b0504] p-2 rounded-full shadow-md focus:outline-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2 bg-white text-[#6b0504] p-2 rounded-full shadow-md focus:outline-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Icon & CTA */}
          <div className="mt-10 sm:mt-16">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 sm:mb-6">
              <img src={vector1} alt="Editor Icon" className="w-full h-full object-contain filter invert" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4 text-white">
              Bring your ideas to life an intuitive visual editor.
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white">Create, edit, and Use.</p>
            
            {/* Partner Button */}
            <div className="inline-block">
              <a 
                href="https://wa.me/917684836139"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#f5f5f5] text-[#ff3a2f] font-bold rounded-full shadow-lg hover:opacity-90 transition-all text-sm sm:text-base"
                style={{ boxShadow: '0 0 15px rgba(255,255,255,0.4)' }}
              >
                PARTNER WITH US.
                <img src={whatsapp} alt="WhatsApp" className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
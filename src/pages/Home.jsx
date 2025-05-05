import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStep3Complete, setIsStep3Complete] = useState(false);

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
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-0 pb-16 px-4 relative overflow-hidden grid-background">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="mb-16 sm:mb-24 w-full mt-8">
            <Navbar />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-24">
            {/* Left: Icon (no yellow glow) */}
            <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0 md:mr-12">
              <div className="rounded-full bg-black p-2 shadow-lg">
                {/* <img src="/assets/face image.png" alt="Hero Icon" className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full" /> */}
              </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto mt-20 md:-ml-40">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-12 text-white" style={{ textShadow: '0 4px 24px #f472b6, 0 1px 0 #fff' }}>
                Your Vision, Our Code<br />
                Boldly Delivered.
              </h1>
              <p className="text-xl sm:text-2xl font-bold mb-2">
                <span className="text-yellow-400 drop-shadow-[0_0_8px_#facc15]">WELCOME!</span>
                <span className="text-white"> to BOLDTRIBE INNOVATION</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative overflow-hidden min-h-[700px] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.7)' }}>
        {/* Blurred tribe background - correct path and stacking */}
        <img src="/public/assets/tribe.jpg" alt="Tribe Background" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{ filter: 'blur(0.5px) brightness(1)' }} />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col items-center w-full">
          {/* Heading and Subheading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg">New ways to build.</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 text-center mb-12 max-w-3xl drop-shadow-lg">
            BoldTribe Innovations empowers businesses with innovative solutions in branding, digital marketing, development, and fast services.
          </p>
          {/* Cards Placement - FLEX COLUMN, NO ABSOLUTE */}
          <div className="w-full flex flex-col items-center gap-8">
            {/* Top Card */}
            <div className="w-full max-w-3xl">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl flex flex-col min-h-[220px] max-h-[260px] backdrop-blur-xl bg-white/10 border border-white/20" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src="/public/assets/Visual/Icon Isogrid.png" alt="App & Web Dev BG" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 z-0" style={{ marginLeft: '300px', marginBottom: '1000px' }} />
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">App & Web Development</h3>
                    <p className="text-gray-200 text-base mb-0">Our design services starts and ends with a best-in-class experience strategy that builds brands. We create world-class digital products materials that</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Row: 2 Cards Side by Side */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-center">
              {/* Card 2 */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl flex flex-col min-h-[370px] max-w-[370px] w-full md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src="/assets/Stroke Illustration - Curvature.png" alt="Branding & Design BG" className="absolute left-1/2 -translate-x-1/2 z-0 object-cover object-bottom opacity-70" style={{ marginTop: '200px', width: '80%', height: '80%', marginLeft: '-40px' }} />
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Branding & Design</h3>
                    <p className="text-gray-200 text-base mb-0">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow</p>
                  </div>
                  <Link to="/services" className="mt-6 px-5 py-2 rounded-full bg-white/20 text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition flex items-center w-max backdrop-blur-md">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl flex flex-col min-h-[370px] max-w-[370px] w-full md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20" style={{boxShadow:'0 8px 32px 0 rgba(31,38,135,0.37)'}}>
                <img src="/assets/Stroke Illustration - Smoothing.png" alt="AI & Blockchain BG" className="absolute inset-0 w-full h-full object-cover object-bottom opacity-70 z-0" style={{ marginTop: '150px', width: '80%', height: '80%', marginLeft: '90px' }} />
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">AI & Blockchain</h3>
                    <p className="text-gray-200 text-base mb-0">Revolutionizing industries with the power of AI & Blockchain. Unlock smarter solutions and secure, transparent systems to drive innovation, enhance efficiency, and create trust-driven ecosystems for your business growth.</p>
                  </div>
                  <Link to="/services" className="mt-6 px-5 py-2 rounded-full bg-white/20 text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition flex items-center w-max backdrop-blur-md">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-5">
            {/* Team Member Cards */}
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/sivasish.JPG" alt="Team Member 1" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Sivasish Bebartta</span>
                <span className="text-white text-sm md:text-base">Founder</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/Abinab.JPG" alt="Team Member 2" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Abinab Tripathy</span>
                <span className="text-white text-sm md:text-base">Founder</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/RajeshPP.jpg" alt="Team Member 3" className="w-full h-full object-cover object-center scale-130" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Rajesh Kumar Pattanaik</span>
                <span className="text-white text-sm md:text-base">Junior Application Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/Nikita.JPG" alt="Team Member 4" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Nikita Pradhan</span>
                <span className="text-white text-sm md:text-base">Junior UI/UX Designer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/assets/face image.png" alt="Team Member 5" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Manoranjan Basantia</span>
                <span className="text-white text-sm md:text-base">Junior Backend Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/Abinab.JPG" alt="Team Member 6" className="w-full h-full object-cover object-center scale-149 mt-50" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Arpita Singh</span>
                <span className="text-white text-sm md:text-base">Junior Frontend Developer</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/suvendu.jpeg" alt="Team Member 7" className="w-full h-full object-cover object-center scale-149" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Suvendu Kumar Rath</span>
                <span className="text-white text-sm md:text-base">Technical Project Coordinator</span>
              </div>
            </div>
            <div className="team-card aspect-square overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 group relative">
              <img src="/public/assets/suman.jpeg" alt="Team Member 8" className="w-full h-full object-cover object-center scale-149" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-base md:text-lg">Suman Sahoo</span>
                <span className="text-white text-sm md:text-base">Lead Generation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section id="onboarding-section" className="py-0 px-0 relative bg-[#18191d] min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center min-h-[600px] px-4 md:px-0">
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
      

      {/* Testimonials */}
      <section id="testimonials-section" className="py-12 sm:py-16 px-4 relative">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Testimonials</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-400 text-center">People are talking.</p>
          <div className="relative">
            <div className="flex flex-col items-center">
              <img src="/assets/stone image.png" alt="Marble Surface" className="w-full max-w-[1600px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 text-center relative">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8">
            <img src="/public/assets/Vector-5.png" alt="Editor Icon" className="w-full h-full object-contain" />
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
            <img src="/public/assets/whatsapp icon.png" alt="WhatsApp" className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
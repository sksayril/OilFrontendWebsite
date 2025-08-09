

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Premium Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src="/src/public/dc.png" 
          alt="Doctor's Choice Hero Background" 
          className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[3000ms] ease-out"
        />
        {/* Premium Multi-Layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 z-10">
        {/* Golden Accent Lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
        <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent opacity-60"></div>
        
        {/* Floating Premium Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-60 animation-delay-2000"></div>
      </div>

      {/* Premium Main Heading Text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-center relative">
          {/* Premium Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl blur-3xl"></div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white mb-6 tracking-wider transform -rotate-12 relative">
            <span className="inline-block animate-slide-in-left drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">GOODNESS</span>{' '}
            <span className="inline-block animate-slide-in-left animation-delay-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">KA</span>{' '}
            <span className="inline-block animate-slide-in-left animation-delay-600 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">NO.1</span>
          </h1>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 tracking-wider transform rotate-6 relative">
            <span className="inline-block animate-slide-in-left animation-delay-900 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]">DIL</span>{' '}
            <span className="inline-block animate-slide-in-left animation-delay-1200 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]">KI</span>{' '}
            <span className="inline-block animate-slide-in-left animation-delay-1500 hover:scale-110 transition-all duration-500 drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]">CHOICE</span>
          </h2>
          
          {/* Premium Subtitle */}
          <div className="mt-8 opacity-0 animate-fade-in-up animation-delay-2000">
            <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Experience the finest quality edible oils crafted with premium ingredients for discerning households
            </p>
          </div>
        </div>
      </div>

      {/* Premium Custom Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-in-left {
            0% {
              transform: translateX(-120px);
              opacity: 0;
              filter: blur(10px);
            }
            50% {
              filter: blur(5px);
            }
            100% {
              transform: translateX(0);
              opacity: 1;
              filter: blur(0);
            }
          }
          
          @keyframes fade-in-up {
            0% {
              transform: translateY(40px);
              opacity: 0;
              filter: blur(8px);
            }
            100% {
              transform: translateY(0);
              opacity: 1;
              filter: blur(0);
            }
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          
          .animation-delay-900 {
            animation-delay: 0.9s;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          
          .animation-delay-1200 {
            animation-delay: 1.2s;
          }
          
          .animation-delay-1500 {
            animation-delay: 1.5s;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          /* Premium Glow Effects */
          .text-glow-white {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
          }
          
          .text-glow-gold {
            text-shadow: 0 0 20px rgba(255, 193, 7, 0.6), 0 0 40px rgba(255, 193, 7, 0.4);
          }
          
          /* Smooth Parallax Effect */
          @media (prefers-reduced-motion: no-preference) {
            .parallax-bg {
              transition: transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
          }
        `
      }} />

      {/* Content Overlay for better integration */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* This div ensures proper spacing and can contain additional content if needed */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
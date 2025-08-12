import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { x: -120, opacity: 0, filter: "blur(10px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 1.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 2
      }
    }
  };

  const decorativeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.7,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: 1
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Premium Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Oil Pouring Video Background */}
        <video 
          src="/src/public/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-3xl"
          style={{ 
            filter: 'brightness(0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          onError={(e) => {
            console.error('Video failed to load:', e);
            // Fallback to a solid color background if video fails
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            target.parentElement!.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)';
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can start playing')}
        />
        
        {/* Premium Multi-Layer Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </motion.div>

      {/* Left Side Video Section */}
      <motion.div 
        className="absolute left-0 top-0 w-1/2 h-full z-15"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="relative h-full w-full">
          {/* "My Choice" Text Overlay */}
          <motion.div 
            className="absolute bottom-20 left-10 text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.h3 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(245, 158, 11, 0.4)"
              }}
              style={{
                textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6), 0 0 30px rgba(251, 191, 36, 0.3)"
              }}
            >
              MY
            </motion.h3>
            <motion.h3 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 mb-6 leading-tight drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(245, 158, 11, 0.4)"
              }}
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #f97316 50%, #ea580c 75%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.8)) drop-shadow(0 8px 16px rgba(0,0,0,0.6))"
              }}
            >
              CHOICE
            </motion.h3>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-xl md:text-2xl text-white/95 font-semibold max-w-md leading-relaxed drop-shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7)"
              }}
            >
              Premium quality oils that make every meal extraordinary
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Decorative Elements */}
      <div className="absolute inset-0 z-10">
        {/* Golden Accent Lines */}
        <motion.div 
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 128, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent opacity-60"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 128, opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 1.7 }}
        />
        
        {/* Floating Premium Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full opacity-70"
          variants={decorativeVariants}
          animate={{
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full opacity-50"
          variants={decorativeVariants}
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60"
          variants={decorativeVariants}
          animate={{
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Premium Main Heading Text - Repositioned for better balance */}
      <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-center relative">
          {/* Premium Background Glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white mb-6 tracking-wider transform -rotate-12 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #fef3c7 25%, #fde68a 50%, #fbbf24 75%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.8)) drop-shadow(0 16px 32px rgba(0,0,0,0.6))"
            }}
          >
            <motion.span 
              className="inline-block drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              style={{
                textShadow: "0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(251, 191, 36, 0.3)"
              }}
            >
              GOODNESS
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              style={{
                textShadow: "0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(251, 191, 36, 0.3)"
              }}
            >
              KA
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              style={{
                textShadow: "0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(251, 191, 36, 0.3)"
              }}
            >
              NO.1
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 tracking-wider transform rotate-6 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fbbf24 50%, #f59e0b 75%, #fef3c7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.8)) drop-shadow(0 16px 32px rgba(0,0,0,0.6))"
            }}
          >
            <motion.span 
              className="inline-block drop-shadow-[0_0_50px_rgba(255,193,7,0.5)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 40px rgba(255,193,7,0.7), 0 0 80px rgba(251, 191, 36, 0.4)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
              style={{
                textShadow: "0 0 50px rgba(255,193,7,0.5), 0 0 100px rgba(251, 191, 36, 0.3)"
              }}
            >
              DIL
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_50px_rgba(255,193,7,0.5)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 40px rgba(255,193,7,0.7), 0 0 80px rgba(251, 191, 36, 0.4)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
              style={{
                textShadow: "0 0 50px rgba(255,193,7,0.5), 0 0 100px rgba(251, 191, 36, 0.3)"
              }}
            >
              KI
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_50px_rgba(255,193,7,0.5)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 40px rgba(255,193,7,0.7), 0 0 80px rgba(251, 191, 36, 0.4)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
              style={{
                textShadow: "0 0 50px rgba(255,193,7,0.5), 0 0 100px rgba(251, 191, 36, 0.3)"
              }}
            >
              CHOICE
            </motion.span>
          </motion.h2>
          
          {/* Premium Subtitle */}
          <motion.div 
            className="mt-8"
            variants={subtitleVariants}
          >
            {/* <motion.p 
              className="text-xl md:text-2xl text-white/90 font-semibold tracking-wide max-w-3xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.02 }}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7), 0 0 20px rgba(251, 191, 36, 0.2)"
              }}
            >
              Experience the finest quality edible oils crafted with premium ingredients for discerning households
            </motion.p> */}
          </motion.div>
        </div>
      </div>

      {/* Content Overlay for better integration */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* This div ensures proper spacing and can contain additional content if needed */}
        </div>
      </div>

      {/* Small Gap Section - Visual Separation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent py-16 z-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 2.0 }}
      >
        <div className="container mx-auto px-6 text-center">
          {/* Animated Divider Line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.3 }}
          />
          
          {/* Premium Transition Text */}
          <motion.div 
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-2xl"
              whileHover={{ 
                scale: 1.03,
                textShadow: "0 0 25px rgba(251, 191, 36, 0.6)"
              }}
            >
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                DISCOVER
              </span>
              {' '}
              <span className="text-white">THE DIFFERENCE</span>
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-lg text-white/80 font-medium max-w-xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Where tradition meets innovation in every drop
            </motion.p>
          </motion.div>
          
          {/* Animated Icons */}
          <motion.div 
            className="flex justify-center items-center space-x-6 mb-4"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            {['🌾', '💧', '🌟', '❤️'].map((icon, index) => (
              <motion.div 
                key={index}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-lg border border-white/30"
                whileHover={{ 
                  scale: 1.15,
                  rotate: 360,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                style={{
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <motion.div 
              className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center mb-2"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="w-1 h-2 bg-white/70 rounded-full mt-2"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.p 
              className="text-xs text-white/60 font-medium"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
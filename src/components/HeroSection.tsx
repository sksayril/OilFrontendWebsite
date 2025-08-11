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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
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
        <motion.img 
          src="/src/public/dc.png" 
          alt="Doctor's Choice Hero Background" 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
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

      {/* Premium Main Heading Text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
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
          >
            <motion.span 
              className="inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              GOODNESS
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              KA
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              variants={textVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              NO.1
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 tracking-wider transform rotate-6 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              className="inline-block drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 30px rgba(255,193,7,0.6)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              DIL
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 30px rgba(255,193,7,0.6)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              KI
            </motion.span>{' '}
            <motion.span 
              className="inline-block drop-shadow-[0_0_25px_rgba(255,193,7,0.4)]"
              variants={textVariants}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 30px rgba(255,193,7,0.6)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              CHOICE
            </motion.span>
          </motion.h2>
          
          {/* Premium Subtitle */}
          <motion.div 
            className="mt-8"
            variants={subtitleVariants}
          >
            <motion.p 
              className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              Experience the finest quality edible oils crafted with premium ingredients for discerning households
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content Overlay for better integration */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* This div ensures proper spacing and can contain additional content if needed */}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
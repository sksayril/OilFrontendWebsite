import { motion } from 'framer-motion';

const ProductShowcase = () => {
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

  const heartVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const productVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        delay: 1
      }
    }
  };

  const floatingVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: 1.5
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/40 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.06),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.04),transparent_70%)]"></div>
      
      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Premium Title Section */}
      <motion.div 
        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-2xl">
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Premium Mustard Oil
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4 drop-shadow-lg font-medium">
          Experience the authentic taste of traditional India with our premium Kachi Ghani Mustard Oil
        </p>
      </motion.div>
      
      {/* Main Content Grid - Left Image, Right Heart */}
      <div className="absolute inset-0 flex items-center justify-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8">
          
          {/* Left Side - Premium Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="relative">
              {/* Premium Image Container */}
              <motion.div 
                className="relative rounded-[3rem] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                style={{
                  boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
              >
                <img 
                  src="https://images.pexels.com/photos/11583376/pexels-photo-11583376.jpeg?_gl=1*1ilobq1*_ga*MTI5NDM3MjE1MS4xNzU0OTk0MTY4*_ga_8JE65Q40S6*czE3NTQ5OTQxNjgkbzEkZzEkdDE3NTQ5OTQxNzQkajU0JGwwJGgw"
                  alt="Premium Mustard Oil and Ingredients"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Premium Badge */}
                <motion.div 
                  className="absolute top-6 left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  style={{
                    boxShadow: "0 15px 35px rgba(245, 158, 11, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  }}
                >
                  🌟 Premium Quality
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 12px 35px rgba(251, 191, 36, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 8px 25px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                />
              </motion.div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-transparent via-yellow-300/40 to-transparent rounded-full"
                  animate={{
                    scaleY: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-gradient-to-t from-black/30 to-transparent rounded-full"
                  animate={{
                    scaleY: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Heart Shape with Mustard Oil */}
          <motion.div 
            className="relative order-1 lg:order-2"
            variants={heartVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            {/* Content removed - heart section deleted */}
          </motion.div>
        </div>
      </div>

      {/* Premium Floating Oil Drops */}
      <motion.div 
        className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-2xl relative overflow-hidden"
        variants={floatingVariants}
        animate={{
          y: [0, -30, 0],
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 12px 35px rgba(251, 191, 36, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 to-transparent rounded-full opacity-60"></div>
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-32 w-5 h-5 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl relative overflow-hidden"
        variants={floatingVariants}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 15px 40px rgba(251, 191, 36, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-transparent rounded-full opacity-50"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-32 w-3 h-3 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-xl relative overflow-hidden"
        variants={floatingVariants}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 8px 25px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-200 to-transparent rounded-full opacity-40"></div>
      </motion.div>
      
      {/* Additional Premium Floating Elements */}
      <motion.div 
        className="absolute top-60 left-1/4 w-2 h-2 bg-gradient-to-br from-orange-300 via-red-400 to-pink-500 rounded-full shadow-xl relative overflow-hidden"
        variants={floatingVariants}
        animate={{
          y: [0, -22, 0],
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 6px 20px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="absolute inset-0.5 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-30"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-60 right-1/4 w-2.5 h-2.5 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 rounded-full shadow-xl relative overflow-hidden"
        variants={floatingVariants}
        animate={{
          y: [0, -28, 0],
          x: [0, -8, 0],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 90, 180]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 8px 25px rgba(251, 191, 36, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-100 to-transparent rounded-full opacity-40"></div>
      </motion.div>
      
      {/* Premium Corner Accents */}
      <motion.div 
        className="absolute top-10 right-10 w-3 h-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"
        variants={floatingVariants}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 0.8,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 6px 20px rgba(245, 158, 11, 0.3)"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-10 w-2.5 h-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
        variants={floatingVariants}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 5px 18px rgba(251, 191, 36, 0.4)"
        }}
      />
    </motion.section>
  );
};

export default ProductShowcase;
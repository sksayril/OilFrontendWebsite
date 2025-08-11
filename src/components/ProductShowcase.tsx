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
      className="min-h-screen bg-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heart Shape with Mustard Oil */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          variants={heartVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring" as const, stiffness: 300 }}
        >
          {/* Heart Shape Background */}
          <motion.div 
            className="w-96 h-96 relative"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.svg 
              viewBox="0 0 100 90" 
              className="w-full h-full"
              whileHover={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 0.6 }}
            >
              <motion.path 
                d="M50,85 C50,85 15,55 15,35 C15,20 25,10 40,15 C45,10 55,10 60,15 C75,10 85,20 85,35 C85,55 50,85 50,85 Z"
                fill="url(#heartGradient)"
                className="drop-shadow-2xl"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <defs>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#87CEEB', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#FFF8DC', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#9ACD32', stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Mustard Oil Product Inside Heart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="text-center"
                variants={productVariants}
              >
                {/* Product Package */}
                <motion.div 
                  className="w-32 h-40 bg-red-500 rounded-lg shadow-xl relative mx-auto mb-4"
                  whileHover={{ 
                    y: -5,
                    rotateY: 10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ type: "spring" as const, stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute top-2 left-2 right-2 bg-white rounded-full p-2"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-xs font-bold text-center">DOCTORS' CHOICE</div>
                    <motion.div 
                      className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div className="absolute bottom-4 left-2 right-2 text-white text-xs font-bold text-center">
                    KACHI GHANI<br/>MUSTARD OIL
                  </div>
                </motion.div>

                {/* Mustard Flowers */}
                <motion.div 
                  className="flex justify-center space-x-2 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  {[3, 4, 3].map((size, index) => (
                    <motion.div 
                      key={index}
                      className={`w-${size} h-${size} bg-yellow-400 rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.5 }}
                    />
                  ))}
                </motion.div>

                {/* Mustard Seeds */}
                <motion.div 
                  className="flex justify-center space-x-1"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  {Array.from({length: 8}).map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-1 h-1 bg-black rounded-full"
                      animate={{
                        y: [0, -3, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Oil Drops */}
      <motion.div 
        className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full"
        variants={floatingVariants}
        animate={{
          y: [0, -20, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-32 w-3 h-3 bg-yellow-400 rounded-full"
        variants={floatingVariants}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-32 w-2 h-2 bg-yellow-400 rounded-full"
        variants={floatingVariants}
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut"
        }}
      />
    </motion.section>
  );
};

export default ProductShowcase;
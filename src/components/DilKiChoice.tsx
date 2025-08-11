import { motion } from 'framer-motion';

const DilKiChoice = () => {
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
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const bottleVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 45,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        delay: 0.5
      }
    }
  };

  const dropVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: 1
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Oil Pouring Animation */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <div className="relative h-full">
          {/* Oil Bottle */}
          <motion.div 
            className="absolute top-1/4 left-1/4"
            variants={bottleVariants}
            whileHover={{ 
              rotate: 50, 
              scale: 1.05,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <motion.div 
              className="w-32 h-64 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-full relative transform rotate-45"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-8 left-4 right-4 h-2 bg-red-500 rounded-full"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          {/* Animated Oil Drop */}
          <motion.div 
            className="absolute top-1/2 left-1/2"
            variants={dropVariants}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg"></div>
          </motion.div>
          
          {/* Oil Stream */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-yellow-400 to-yellow-600 opacity-80"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 128, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          
          {/* Bottom Oil Drop */}
          <motion.div 
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
            variants={dropVariants}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              className="lg:pl-8"
              variants={textVariants}
            >
              <motion.div 
                className="mb-8"
                variants={containerVariants}
              >
                <motion.h1 
                  className="text-6xl lg:text-8xl font-bold text-orange-600 mb-4"
                  variants={textVariants}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ea580c",
                    textShadow: "0 0 20px rgba(234, 88, 12, 0.3)"
                  }}
                >
                  DIL KI
                </motion.h1>
                <motion.h1 
                  className="text-6xl lg:text-8xl font-bold text-orange-600 mb-8"
                  variants={textVariants}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ea580c",
                    textShadow: "0 0 20px rgba(234, 88, 12, 0.3)"
                  }}
                >
                  CHOICE
                </motion.h1>
              </motion.div>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div 
              className="lg:pr-8"
              variants={textVariants}
            >
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                Home-cooked meals are the Dil Ki Choice of every household and we help bring those long-lost recipes to life with our range of affordable edible cooking oils. Join us for a journey into delicious, wholesome cooking where a rollercoaster of flavors meets the har ghar ka Masterchef.
              </motion.p>
              
              {/* Know More Button */}
              <motion.div 
                className="relative inline-block"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button 
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
                {/* Button Drip Effect */}
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-b-full"
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Products Section Header */}
      <motion.div 
        className="absolute bottom-0 w-full bg-white py-12"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            OUR <motion.span 
              className="text-yellow-600"
              whileHover={{ 
                color: "#ca8a04",
                textShadow: "0 0 15px rgba(202, 138, 4, 0.3)"
              }}
            >
              PRODUCTS
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DilKiChoice;
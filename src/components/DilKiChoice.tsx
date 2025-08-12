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

  return (
    <motion.section 
      className="min-h-screen relative overflow-hidden mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div>
        <video 
          src="/src/public/home_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-3xl"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          onError={(e) => {
            // Fallback to gradient background if video fails
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            target.parentElement!.style.background = 'linear-gradient(135deg, #fed7aa 0%, #fef3c7 100%)';
          }}
        />
        
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              className="lg:pl-8"
              variants={textVariants}
            >
              <motion.div 
                className="mb-12"
                variants={containerVariants}
              >
                {/* Premium Badge */}
                <motion.div 
                  className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-2xl border border-orange-300/30"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  style={{
                    boxShadow: "0 15px 35px rgba(245, 158, 11, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  }}
                >
                  🌟 Premium Cooking Oils
                </motion.div>
                
                
                <motion.p 
                  className="text-2xl text-gray-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Where every drop tells a story of tradition, quality, and love for cooking
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div 
              className="lg:pr-8"
              variants={textVariants}
            >
              <motion.p 
                className="text-gray-100 text-xl leading-relaxed mb-10 font-medium drop-shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                Home-cooked meals are the of every household and we help bring those long-lost recipes to life with our range of affordable edible cooking oils. Join us for a journey into delicious, wholesome cooking where a rollercoaster of flavors meets the <span className="text-orange-300 font-bold">har ghar ka Masterchef</span>.
              </motion.p>
              
              {/* Enhanced Know More Button */}
              <motion.div 
                className="relative inline-block"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 text-black px-10 py-5 rounded-3xl font-black text-xl hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-3xl border border-yellow-300/30 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(251, 191, 36, 0.5)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Discover More</span>
                </motion.button>
                
                {/* Enhanced Button Drip Effect */}
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-full shadow-lg"
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
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

      {/* Enhanced Our Products Section Header */}
      <motion.div 
        className="absolute bottom-0 w-full bg-white/95 backdrop-blur-sm py-16 border-t border-yellow-200/30"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-5xl font-black text-gray-800 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            OUR <motion.span 
              className="text-yellow-600 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
              whileHover={{ 
                textShadow: "0 0 20px rgba(202, 138, 4, 0.4)"
              }}
            >
              PRODUCTS
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full shadow-lg"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.p 
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Premium quality oils for every culinary masterpiece
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DilKiChoice;
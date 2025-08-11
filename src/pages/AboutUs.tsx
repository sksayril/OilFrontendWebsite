import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const values = [
    {
      icon: "🌾",
      title: "Premium Ingredients",
      description: "We select the best ingredients to ensure top-quality products."
    },
    {
      icon: "⚙️",
      title: "Advanced Processing",
      description: "Our refining and filling processes are automated for precision and efficiency."
    },
    {
      icon: "💧",
      title: "Freshness Guarantee",
      description: "We package each product with nitrogen to maintain freshness longer."
    }
  ];

  const promises = [
    {
      icon: "💰",
      title: "Pure Goodness",
      description: "To bring pure goodness to every kitchen without the high price tag."
    },
    {
      icon: "🍽️",
      title: "Quality Access",
      description: "Quality should be accessible to all. Enriching every meal with natural ingredients."
    },
    {
      icon: "🌟",
      title: "Fresh Delivery",
      description: "Delivering freshness and flavor without compromise."
    },
    {
      icon: "🤝",
      title: "Trust & Care",
      description: "Building trust through consistent quality and care in every product."
    },
    {
      icon: "❤️",
      title: "Health First",
      description: "Prioritizing health and nutrition in every drop of oil we produce."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Committed to excellence in taste, quality, and customer satisfaction."
    }
  ];

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const heroTextVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        delay: 0.5
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section - FROM OUR HANDS, FOR YOUR HOME */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="/src/public/Aboout_Image1.png" 
            alt="From Our Hands For Your Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-left"
            variants={heroTextVariants}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-black text-orange-600 leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                FROM OUR
              </motion.span>
              <br/>
              <motion.span 
                className="text-orange-500"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                HANDS,
              </motion.span>
              <br/>
              <motion.span 
                className="text-orange-700"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                FOR YOUR
              </motion.span>
              <br/>
              <motion.span 
                className="text-orange-600"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                HOME
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              variants={logoVariants}
            >
              <motion.img 
                src="/src/public/doctorlogo.png" 
                alt="Doctor's Choice Logo" 
                className="w-32 h-24 object-contain mb-4"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats and Values Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Bar */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 mb-16 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-5xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 100, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  1750
                </motion.h3>
                <p className="text-xl font-semibold text-white">Metric Tonnes Produce</p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-5xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 100, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  700+
                </motion.h3>
                <p className="text-xl font-semibold text-white">Strong Workforce</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Values We Cook By */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/src/public/About_image2.png" 
                alt="Production Facility" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-black text-orange-700 mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                VALUES WE <span className="text-orange-600">COOK BY</span>
              </motion.h2>
              
              <div className="space-y-8">
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-all duration-300"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      transition: { type: "spring" as const, stiffness: 300 }
                    }}
                    variants={itemVariants}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        {value.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* The Goodness We Promise */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-orange-50 to-yellow-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl font-black text-orange-700 mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                THE <span className="text-orange-600">GOODNESS</span><br/>
                WE <span className="text-orange-600">PROMISE</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promises.map((promise, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      transition: { type: "spring" as const, stiffness: 300 }
                    }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        {promise.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{promise.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{promise.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/src/public/About_image3.png" 
                alt="The Goodness We Promise" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Journey Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-yellow-200 to-orange-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-orange-700 mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            OUR <span className="text-orange-600">DELECTABLE</span><br/>
            <span className="text-orange-600">JOURNEY</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
              {/* Journey Point 1 */}
              <motion.div 
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" as const, stiffness: 100, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.2, transition: { type: "spring" as const, stiffness: 300 } }}
                >
                  <span className="text-white text-2xl">❤️</span>
                </motion.div>
                <motion.div 
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-2">A Visionary Leap in 2024</h3>
                  <p className="text-sm text-gray-700">
                    Budge Budge Refineries Ltd. proudly became part of the Doctor's Choice 
                    Edible Oils family, marking a new era of excellence.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Connecting Line */}
              <motion.div 
                className="hidden md:block w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 relative"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 animate-pulse"></div>
              </motion.div>
              
              {/* Journey Point 2 */}
              <motion.div 
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" as const, stiffness: 100, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.2, transition: { type: "spring" as const, stiffness: 300 } }}
                >
                  <span className="text-white text-2xl">🚀</span>
                </motion.div>
                <motion.div 
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-orange-700 mb-2">Continuous Innovation</h3>
                  <p className="text-sm text-gray-700">
                    Committed to bringing the finest quality oils to every household 
                    across the nation with cutting-edge technology.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-orange-600 to-red-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the Doctor's Choice Difference
          </motion.h2>
          <motion.p 
            className="text-xl text-orange-100 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join millions of families who trust Doctor's Choice for their daily cooking needs. 
            From our hands to your home, we deliver nothing but the best.
          </motion.p>
          <motion.button 
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring" as const, stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;
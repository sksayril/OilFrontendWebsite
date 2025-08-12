import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mic, Heart, TrendingUp, Play, Share2, Info, ArrowRight } from 'lucide-react';

const Community = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 25
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                     <motion.div variants={itemVariants}>
             <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 font-playfair">
               Get Inspired by
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600">
                 Community Leaders
               </span>
             </h1>
           </motion.div>
          
                       <motion.p 
               className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-inter"
               variants={itemVariants}
             >
               Join our vibrant community of innovators, creators, and changemakers. 
               Connect, collaborate, and grow together.
             </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Watch Stories
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full text-lg hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300 flex items-center gap-3"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
                             <div className="mb-6">
                 <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-playfair">
                   WE ARE
                 </h2>
                 <h3 className="text-3xl md:text-5xl font-bold text-gray-800 font-playfair">
                   Take Talk Online Community
                 </h3>
               </div>
              
                             <p className="text-lg text-gray-600 leading-relaxed mb-8 font-inter">
                 We're a dynamic community of passionate individuals who believe in the power of 
                 connection, collaboration, and collective growth. Our platform brings together 
                 innovators, creators, and thought leaders from around the world.
               </p>
              
              <div className="border-t border-gray-200 pt-6">
                <motion.button
                  className="text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300 flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  MORE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              className="relative"
              variants={cardVariants}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src="https://i.pinimg.com/1200x/a4/fe/da/a4feda2573e84a349db82afae0326ea5.jpg" 
                  alt="Vibrant Community Gathering - Building Stronger Communities Together" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                
                {/* Premium Badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                >
                  🌟 Community
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: "0 6px 20px rgba(251, 191, 36, 0.4)"
                  }}
                />
                
                {/* Additional Floating Element */}
                <motion.div 
                  className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  style={{
                    boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
                         <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
               How It Works
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
               Join our community in four simple steps and start making a difference today.
             </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Become a Member",
                description: "Join our vibrant community and connect with like-minded individuals who share your passion for growth and innovation.",
                icon: Users
              },
              {
                number: "2",
                title: "Give a Talk",
                description: "Share your knowledge, experiences, and insights with the community through our interactive talk sessions.",
                icon: Mic
              },
              {
                number: "3",
                title: "Take Part",
                description: "Engage in discussions, workshops, and collaborative projects that align with your interests and goals.",
                icon: Heart
              },
              {
                number: "4",
                title: "Influence",
                description: "Make a lasting impact by contributing to community initiatives and inspiring others to take action.",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                                     <h3 className="text-xl font-bold text-gray-900 mb-4 font-dm-sans">
                     {step.title}
                   </h3>
                  
                                     <p className="text-gray-600 leading-relaxed font-inter">
                     {step.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-yellow-400 text-gray-800 font-semibold rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              MORE
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Story Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
                         <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
               Motivate Your Community
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
               Discover inspiring stories and learn how to make a positive impact in your community.
             </p>
          </motion.div>
          
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            variants={cardVariants}
          >
                         <div className="aspect-video relative overflow-hidden">
               <motion.img 
                 src="https://i.pinimg.com/1200x/1b/c0/8f/1bc08f4348dfbd1ca4bf6ee9930486e1.jpg" 
                 alt="Community Motivation - Volunteer and Spread Good Vibes" 
                 className="w-full h-full object-cover"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.6 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              
              {/* Action Icons */}
              <div className="absolute top-6 right-6 flex gap-4 z-10">
                <motion.button
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Info className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-10">
                                 <h3 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
                   Volunteer in Your Community & Spread Good Vibes
                 </h3>
                
                <motion.button
                  className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Play Video
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-yellow-400 to-orange-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div variants={itemVariants}>
                         <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
               Ready to Make a Difference?
             </h2>
             <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
               Join thousands of community leaders who are already making an impact. 
               Start your journey today and inspire others to do the same.
             </p>
            
            <motion.button
              className="px-12 py-6 bg-white text-yellow-600 font-bold rounded-full text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div> */}
      </motion.section>
    </div>
  );
};

export default Community;

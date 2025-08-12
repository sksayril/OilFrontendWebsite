import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Award, Leaf, Star } from 'lucide-react';

const CSR = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
             {/* Hero Section - GOODNESS THAT GIVES BACK */}
       <motion.section 
         className="relative py-32 overflow-hidden"
         variants={itemVariants}
       >
         {/* Background Image */}
         <div className="absolute inset-0">
           <img 
             src="/csr-banner.png" 
             alt="CSR Banner Background" 
             className="w-full h-full object-cover"
           />
           {/* Dark overlay for better text readability */}
           <div className="absolute inset-0 bg-black/40"></div>
           {/* Subtle gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
         </div>
         
         <div className="container mx-auto px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Left Side - Content */}
             <motion.div 
               className="text-center lg:text-left"
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <motion.div 
                 className="mb-12"
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
               >
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl"
                   whileHover={{ 
                     scale: 1.02,
                     textShadow: "0 0 30px rgba(251, 191, 36, 0.6)"
                   }}
                 >
                   GOODNESS
                 </motion.h1>
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl"
                   whileHover={{ 
                     scale: 1.02,
                     textShadow: "0 0 30px rgba(251, 146, 60, 0.6)"
                   }}
                 >
                   THAT
                 </motion.h1>
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl"
                   whileHover={{ 
                     scale: 1.02,
                     textShadow: "0 0 30px rgba(251, 191, 36, 0.6)"
                   }}
                 >
                   GIVES BACK
                 </motion.h1>
               </motion.div>

               <motion.p 
                 className="text-2xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-lg"
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.8 }}
               >
                 We believe in creating positive impact through sustainable practices, 
                 community development, and environmental stewardship.
               </motion.p>

               {/* Call to Action Button */}
               <motion.button 
                 className="mt-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ type: "spring" as const, stiffness: 100, delay: 1.2 }}
                 whileHover={{ 
                   scale: 1.05,
                   boxShadow: "0 20px 40px rgba(251, 191, 36, 0.5)"
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Learn More
               </motion.button>
             </motion.div>

             {/* Right Side - Additional Content or Visual Elements */}
             <motion.div 
               className="flex justify-center items-center"
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               {/* Floating oil splash elements for dynamic effect */}
               {Array.from({length: 8}).map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
                   style={{
                     left: `${60 + (i % 4) * 8}%`,
                     top: `${30 + Math.floor(i / 4) * 20}%`
                   }}
                   animate={{
                     scale: [1, 1.5, 1],
                     opacity: [0.6, 1, 0.6],
                     y: [0, -10, 0],
                     x: [0, Math.sin(i) * 8, 0]
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     delay: i * 0.2
                   }}
                 />
               ))}
             </motion.div>
           </div>
         </div>
       </motion.section>

      {/* Education Section - STRENGTHEN... EDUCATION FOUNDATIONS */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-white via-gray-50 to-white"
        variants={itemVariants}
      >
        <div className="container mx-auto px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-6xl font-black text-gray-800 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              STRENGTHEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">EDUCATION</span> FOUNDATIONS
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building the future through quality education and infrastructure development
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card - Ekal Vidyalayas */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
            >
              {/* School Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  src="/school.jpg" 
                  alt="School Community - Ekal Vidyalayas across 24 Parganas" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Premium Badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{
                    boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  }}
                >
                  🏫 Education
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
              </div>
              
              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  whileHover={{ color: "#f59e0b" }}
                >
                  Setting up Ekal Vidyalayas across 24 Parganas
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">
                  Building classrooms and toilet blocks at Sarati B.M.M. Primary School, Mayapur, Hooghly. 
                  Creating accessible education infrastructure for rural communities.
                </p>
                
                {/* Enhanced Stats */}
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">24 Districts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">50+ Schools</span>
                  </div>
                </div>
              </div>
              
            </motion.div>

            {/* Right Card - Primary School Construction */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
            >
                             {/* Children and School Image */}
               <div className="relative h-80 overflow-hidden">
                 <motion.img 
                   src="/school2.jpg" 
                   alt="Young Students - Laying the Foundation for Young Futures" 
                   className="w-full h-full object-cover"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.6 }}
                 />
                 {/* Premium Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                 
                 {/* Premium Badge */}
                 <motion.div 
                   className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl"
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.5, duration: 0.6 }}
                   style={{
                     boxShadow: "0 8px 25px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                   }}
                 >
                   🌟 Young Futures
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
                   className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg"
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
                     boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)"
                   }}
                 />
               </div>
              
              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  whileHover={{ color: "#f59e0b" }}
                >
                  Laying the Foundation for Young Futures
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">
                  Construction of a primary school in Baranagar, Kolkata. 
                  Providing quality education infrastructure for the next generation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Health Section - GOOD HEALTH FOR ALL */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
        variants={itemVariants}
      >
        <div className="container mx-auto px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-6xl font-black text-gray-800 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              GOOD <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">HEALTH</span> FOR ALL
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Promoting wellness and healthcare accessibility across communities
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Card - Cancer Awareness */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
            >
              {/* Women in awareness campaign Image */}
              <div className="relative h-80 bg-gradient-to-br from-pink-100 to-pink-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Women group */}
                  <div className="relative">
                    {/* Main speaker */}
                    <div className="w-12 h-16 bg-white rounded-full relative mb-4">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-t-sm"></div>
                      <div className="absolute inset-2 bg-pink-100 rounded-full"></div>
                    </div>
                    
                    {/* Other women */}
                    {Array.from({length: 4}).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-10 h-14 bg-pink-300 rounded-full"
                        style={{
                          left: `${-20 + (i % 2) * 40}%`,
                          top: `${20 + Math.floor(i / 2) * 30}%`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  whileHover={{ color: "#f59e0b" }}
                >
                  Led cancer awareness campaigns in schools
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">
                  Spreading knowledge and hope across Kolkata, Howrah, Hooghly, and North 24 Parganas. 
                  Empowering communities with health education and awareness.
                </p>
              </div>
            </motion.div>

            {/* Right Card - Medical Unit */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
            >
              {/* Medical facility Image */}
              <div className="relative h-80 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Medical equipment */}
                  <div className="relative">
                    {/* Hospital beds */}
                    <div className="flex space-x-4 mb-6">
                      {Array.from({length: 2}).map((_, i) => (
                        <div key={i} className="w-20 h-12 bg-green-300 rounded-lg shadow-lg"></div>
                      ))}
                    </div>
                    
                    {/* Medical monitors */}
                    <div className="flex space-x-2">
                      {Array.from({length: 3}).map((_, i) => (
                        <div key={i} className="w-8 h-12 bg-blue-300 rounded-lg">
                          <div className="w-6 h-2 bg-blue-400 rounded-sm mx-1 mt-1"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Medical supplies shelf */}
                <div className="absolute top-4 left-4 w-16 h-12 bg-white rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {Array.from({length: 6}).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  whileHover={{ color: "#f59e0b" }}
                >
                  Building a state-of-the-art medical unit
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">
                  In Baranagar, Kolkata, to bring healthcare closer to all. 
                  Providing advanced medical facilities and care for the community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Stats Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
        variants={itemVariants}
      >
        <div className="container mx-auto px-8 text-center">
          <motion.h2 
            className="text-5xl font-black text-white mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">Impact</span> in Numbers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, number: "50+", label: "Schools Built" },
              { icon: Users, number: "10,000+", label: "Students Benefited" },
              { icon: Heart, number: "100+", label: "Health Camps" },
              { icon: Award, number: "25+", label: "Districts Covered" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-black text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/90 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        variants={itemVariants}
      >
        <div className="container mx-auto px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-gray-800 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Together we can build stronger communities, better education, and healthier lives
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 100, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 35px rgba(251, 191, 36, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CSR;

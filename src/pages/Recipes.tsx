import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Menu } from 'lucide-react';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('kadai');
  
  const recipes = [
    {
      name: 'Kadai Mushroom Recipe',
      description: 'Kadai Mushroom, so named, is a vibrant North Indian dish that is mushrooms sautéed in spicy tomato-onion gravy and a...',
      image: '/src/public/recipe1.jpg',
      oil: 'Mustard Oil',
      time: '30 mins',
      difficulty: 'Easy'
    },
    {
      name: 'Kadai Paneer Recipe (Restaurant Style)',
      description: 'Kadai Paneer Recipe (Restaurant Style) There are many delectable options when you think of North Indian cuisines. Among all the...',
      image: '/src/public/recipe2.jpg',
      oil: 'Sunflower Oil',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      name: 'Kadai Chicken Recipe with Mustard Oil',
      description: 'Kadai Chicken Recipe with Mustard Oil What if we told you, you can make the perfect restaurant-style kadai chicken recipe...',
      image: '/src/public/recipe3.jpg',
      oil: 'Mustard Oil',
      time: '45 mins',
      difficulty: 'Medium'
    },
    {
      name: 'Bengali Mix-Veg Shukto Recipe',
      description: 'Bengali Mix-veg Shukto Recipe The most popular type, Bengali shukto, is a mild, filling stew that contains a wide range...',
      image: '/src/public/recipe4.jpg',
      oil: 'Mustard Oil',
      time: '40 mins',
      difficulty: 'Easy'
    },
    {
      name: 'Radhaballabhi (Bengali Kachori)',
      description: 'Radhaballabhi - Bengali Delicacy Radhaballabhi is one of those recipes that has no shortcuts or secrets. Being an...',
      image: '/src/public/recipe5.jpg',
      oil: 'Sunflower Oil',
      time: '60 mins',
      difficulty: 'Hard'
    },
    {
      name: 'Chicken Pakora with Tea - Best Monsoon Snack',
      description: 'Chicken Pakora with Tea - Best Monsoon Snack Pakoras- an all-time favorite snack that is famous across the nation. Showcasing...',
      image: '/src/public/recipe6.jpg',
      oil: 'Mustard Oil',
      time: '35 mins',
      difficulty: 'Medium'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Banner Section */}
      <motion.section 
        className="relative py-32 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/src/public/recipe-banner-img.png" 
            alt="Recipe Banner - Shopping bag with cooking oils and food" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            {/* Left Side - Empty for background image to show through */}
            <div className="relative flex justify-center items-center">
            </div>

            {/* Right Side - Slogan Only */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Slogan */}
              <motion.div 
                className="mb-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.h1 
                  className="text-6xl lg:text-7xl font-black text-orange-600 leading-tight mb-4 drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                  }}
                >
                  LET'S
                </motion.h1>
                <motion.h1 
                  className="text-6xl lg:text-7xl font-black text-orange-600 leading-tight mb-4 drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(251, 146, 60, 0.4)"
                  }}
                >
                  GET
                </motion.h1>
                <motion.h1 
                  className="text-6xl lg:text-7xl font-black text-orange-600 leading-tight drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                  }}
                >
                  COOKING
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 py-16">
        {/* Search and Filter Section */}
        <motion.div 
          className="mb-16"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative flex items-center max-w-2xl w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full px-6 py-4 text-lg border-2 border-yellow-300 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              />
              <motion.button 
                className="absolute right-2 bg-yellow-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Filter and Menu */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Filter Button with Dripping Effect */}
            <motion.button 
              className="relative bg-yellow-400 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
                <motion.div 
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Dripping Effect */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400 rounded-full opacity-40"></div>
            </motion.button>

            {/* View All Menu */}
            <motion.button 
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Menu className="w-5 h-5" />
              <span className="font-medium">View All</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Recipe Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {recipes.map((recipe, index) => (
            <motion.div 
              key={index} 
              className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:-translate-y-10 border border-gray-100/50 relative"
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                scale: 1.08,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Enhanced Outer Glow on Hover */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                whileHover={{
                  boxShadow: "0 35px 60px -12px rgba(251, 191, 36, 0.5), 0 0 0 2px rgba(251, 191, 36, 0.2)"
                }}
              />
              
              {/* Recipe Image */}
              <motion.div 
                className="relative h-80 bg-gradient-to-br from-yellow-100 via-orange-100 to-amber-100 overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-orange-200/20 to-amber-200/30"></div>
                
                {/* Animated Background Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Placeholder for recipe image */}
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <div className="text-8xl opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">🍽️</div>
                </div>
                
                {/* Doctor's Choice Logo - Ultra Premium Enhanced */}
                <motion.div 
                  className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  {/* Logo Inner Glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full shadow-inner"></div>
                  <div className="text-sm font-bold text-blue-600 relative z-10">DC</div>
                  
                  {/* Logo Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>
                
                {/* Oil Bottles and Sunflowers - Ultra Premium Enhanced */}
                <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-14 bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl shadow-xl border border-blue-400/30 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.div>
                  <motion.div 
                    className="w-12 h-14 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-xl shadow-xl border border-yellow-400/30 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.div>
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full shadow-xl border border-yellow-300/30 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.div>
                </div>
                
                {/* Premium Border Overlay */}
                <div className="absolute inset-0 border-2 border-white/30 rounded-3xl pointer-events-none"></div>
                
                {/* Animated Corner Accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Recipe Content - Ultra Premium Enhanced */}
              <motion.div 
                className="p-8 relative z-10 bg-gradient-to-b from-white to-gray-50/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  {recipe.name}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  {recipe.description}
                </motion.p>
                
                {/* Recipe Meta Info - Ultra Premium Enhanced */}
                <motion.div 
                  className="flex items-center justify-between mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  <motion.span 
                    className="text-sm bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 text-yellow-800 px-5 py-2.5 rounded-full font-semibold border border-yellow-200/50 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Badge Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">{recipe.oil}</span>
                  </motion.span>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-sm font-medium">{recipe.time}</span>
                  </div>
                </motion.div>
                
                {/* View Recipe Button - Ultra Premium Enhanced */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 text-white py-5 px-6 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-600 transition-all duration-500 shadow-2xl hover:shadow-3xl group-hover:shadow-orange-500/30 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(251, 191, 36, 0.5), 0 0 0 2px rgba(251, 191, 36, 0.1)",
                    transition: { type: "spring" as const, stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Button Inner Glow */}
                  <div className="absolute inset-1 bg-gradient-to-r from-yellow-300/20 to-orange-400/20 rounded-xl"></div>
                  
                  <span className="relative z-10">View Recipe</span>
                </motion.button>
              </motion.div>
              
              {/* Premium Corner Accent - Ultra Enhanced */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Decorative Arc Elements - Header Logo Style */}
              <motion.div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-10 bg-gradient-to-b from-transparent via-yellow-300/40 to-transparent rounded-full"
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
              
              {/* Bottom Arc Shadow - Header Logo Style */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gradient-to-t from-black/30 to-transparent rounded-full"
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
            </motion.div>
          ))}
        </motion.div>
        
        {/* Load More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(251, 191, 36, 0.4)",
              transition: { type: "spring" as const, stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Recipes
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Recipes;
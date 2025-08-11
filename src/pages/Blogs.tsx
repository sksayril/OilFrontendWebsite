import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Clock, User } from 'lucide-react';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('Kachi Ghani Mustard Oil');

  const oilCategories = [
    'Kachi Ghani Mustard Oil',
    'Refined Rice Bran Oil',
    'Refined Soybean Oil',
    'Refined Sunflower Oil',
    'Others'
  ];

  const trendingBlogs = [
    {
      id: 1,
      title: "How to Use Cooking Oils to Boost Immunity and Fight Inflammation",
      image: "/src/public/Blogs.png",
      category: "Health & Wellness",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      excerpt: "Discover the powerful health benefits of different cooking oils and how they can strengthen your immune system naturally."
    },
    {
      id: 2,
      title: "How to Infuse Mustard Oil for More Flavour in Your Cooking",
      image: "/src/public/Blogs.png",
      category: "Cooking Tips",
      readTime: "4 min read",
      author: "Chef Rajesh Kumar",
      excerpt: "Learn the art of infusing mustard oil with aromatic spices to create restaurant-quality dishes at home."
    },
    {
      id: 3,
      title: "How to Infuse Soybean Oil for More Flavour in Your Cooking",
      image: "/src/public/Blogs.png",
      category: "Cooking Tips",
      readTime: "6 min read",
      author: "Chef Meera Patel",
      excerpt: "Master the technique of infusing soybean oil with herbs and spices for enhanced flavor profiles."
    }
  ];

  const featuredBlogs = [
    {
      id: 4,
      title: "Doctor's Choice Oil: The Perfect Companion for Puja Cooking",
      image: "/src/public/Blogs.png",
      category: "Traditional Cooking",
      readTime: "7 min read",
      author: "Guruji Ramakrishna",
      excerpt: "Puja celebrations would not be complete without the accompanying feast. Discover how Doctor's Choice oils enhance traditional dishes."
    },
    {
      id: 5,
      title: "How Doctor's Choice Oil Enhances the Flavour of Your Puja Dishes",
      image: "/src/public/Blogs.png",
      category: "Traditional Cooking",
      readTime: "5 min read",
      author: "Chef Lakshmi Devi",
      excerpt: "As the holidays draw near, now is the ideal time to perfect your traditional cooking with premium quality oils."
    },
    {
      id: 6,
      title: "The Ultimate Guide to Cooking Ilish with Kachi Ghani Mustard Oil: Tips and Tricks",
      image: "/src/public/Blogs.png",
      category: "Fish Recipes",
      readTime: "8 min read",
      author: "Chef Bikram Das",
      excerpt: "Master the art of cooking Ilish fish with authentic Kachi Ghani mustard oil for the perfect Bengali flavor."
    }
  ];

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

  const categoryVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 200
      }
    })
  };

  const blogCardVariants = {
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
             {/* New Product Showcase Section - HAR GHAR KA GOODNESS COACH */}
       <motion.section 
         className="relative py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden"
         variants={itemVariants}
       >
         {/* Enhanced Background Pattern */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
         
         <div className="container mx-auto px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Left Side - Products and Ingredients */}
             <motion.div 
               className="relative flex justify-center items-center"
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               {/* Main Product Image */}
               <motion.div 
                 className="relative"
                 whileHover={{ scale: 1.03 }}
                 transition={{ type: "spring" as const, stiffness: 300 }}
               >
                 <motion.img
                   src="/src/public/Blogs.png"
                   alt="Doctor's Choice Refined Soybean Oil Products"
                   className="w-[500px] h-auto max-w-full rounded-3xl shadow-3xl"
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 1, delay: 0.3 }}
                 />
                 
                 {/* Enhanced Glow Effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-3xl pointer-events-none"></div>
                 <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl pointer-events-none"></div>
               </motion.div>
             </motion.div>

                         {/* Right Side - Slogan */}
             <motion.div 
               className="text-center lg:text-right"
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               <motion.div 
                 className="mb-12"
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 1 }}
               >
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 leading-tight mb-6"
                   whileHover={{ 
                     scale: 1.02,
                     filter: "drop-shadow(0 0 30px rgba(234, 88, 12, 0.4))"
                   }}
                 >
                   HAR
                 </motion.h1>
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 leading-tight mb-6"
                   whileHover={{ 
                     scale: 1.02,
                     filter: "drop-shadow(0 0 30px rgba(234, 88, 12, 0.4))"
                   }}
                 >
                   GHAR KA
                 </motion.h1>
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 leading-tight mb-6"
                   whileHover={{ 
                     scale: 1.02,
                     filter: "drop-shadow(0 0 30px rgba(234, 88, 12, 0.4))"
                   }}
                 >
                   GOODNESS
                 </motion.h1>
                 <motion.h1 
                   className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 leading-tight"
                   whileHover={{ 
                     scale: 1.02,
                     filter: "drop-shadow(0 0 30px rgba(234, 88, 12, 0.4))"
                   }}
                 >
                   COACH
                 </motion.h1>
               </motion.div>

               <motion.p 
                 className="text-2xl text-gray-700 max-w-2xl mx-auto lg:ml-auto leading-relaxed font-medium"
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 1.2 }}
               >
                 Experience the perfect blend of tradition and health with our premium refined soybean oil. 
                 From raw soybeans to your kitchen, we bring you the essence of pure goodness.
               </motion.p>

               {/* Enhanced Call to Action Button */}
               <motion.button 
                 className="mt-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ type: "spring" as const, stiffness: 100, delay: 1.4 }}
                 whileHover={{ 
                   scale: 1.05,
                   boxShadow: "0 20px 40px rgba(251, 191, 36, 0.5)"
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Explore Products
               </motion.button>
             </motion.div>
          </div>
        </div>
      </motion.section>

             {/* Hero Section */}
       <motion.section 
         className="relative py-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 overflow-hidden"
         variants={itemVariants}
       >
         {/* Enhanced Background Pattern */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]"></div>
         
         <div className="container mx-auto px-8 text-center relative z-10">
           <motion.h1 
             className="text-7xl md:text-8xl font-black text-white mb-8"
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
             TRENDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">BLOGS</span>
           </motion.h1>
           <motion.p 
             className="text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
             Discover expert insights, cooking tips, and health benefits of premium cooking oils
           </motion.p>
         </div>
       </motion.section>

             {/* Oil Categories Section */}
       <motion.section 
         className="py-20 bg-gradient-to-br from-white via-gray-50 to-white"
         variants={itemVariants}
       >
         <div className="container mx-auto px-8">
           <motion.h2 
             className="text-5xl font-black text-center text-gray-800 mb-16"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             Explore by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Oil Type</span>
           </motion.h2>
           
           <div className="flex flex-wrap justify-center gap-6 mb-8">
             {oilCategories.map((category, index) => (
               <motion.button
                 key={category}
                 className={`relative px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 ${
                   activeCategory === category
                     ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl'
                     : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 shadow-lg hover:shadow-xl border border-gray-200'
                 }`}
                 onClick={() => setActiveCategory(category)}
                 variants={categoryVariants}
                 custom={index}
                 whileHover={{ 
                   scale: 1.05,
                   y: -3
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 {category}
                 {/* Enhanced Oil Dripping Effect */}
                 <motion.div 
                   className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-4 rounded-full ${
                     activeCategory === category ? 'bg-gradient-to-b from-yellow-400 to-orange-400' : 'bg-gray-300'
                   }`}
                   animate={{
                     scaleY: [1, 1.3, 1],
                     opacity: [0.7, 1, 0.7]
                   }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: index * 0.2
                   }}
                 />
               </motion.button>
             ))}
           </div>
         </div>
       </motion.section>

             {/* Trending Blogs Carousel */}
       <motion.section 
         className="py-24 bg-gradient-to-br from-amber-800 via-orange-900 to-red-900 relative overflow-hidden"
         variants={itemVariants}
       >
         {/* Enhanced Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent_50%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"></div>
         
         <div className="container mx-auto px-8 relative z-10">
           <motion.h2 
             className="text-6xl font-black text-center text-white mb-20"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             TRENDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">BLOGS</span>
           </motion.h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <motion.button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingBlogs.map((blog, index) => (
                <motion.div 
                  key={blog.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                  variants={blogCardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02
                  }}
                >
                  {/* Blog Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Doctor's Choice Logo */}
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Heart className="w-6 h-6 text-red-500" />
                    </motion.div>
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 leading-tight"
                      whileHover={{ color: "#f59e0b" }}
                    >
                      {blog.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-4 line-clamp-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {blog.excerpt}
                    </motion.p>
                    
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <motion.button 
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

             {/* Featured Blogs Grid */}
       <motion.section 
         className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50"
         variants={itemVariants}
       >
         <div className="container mx-auto px-8">
           <motion.h2 
             className="text-5xl font-black text-center text-gray-800 mb-20"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Articles</span>
           </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <motion.div 
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={blogCardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.03
                }}
              >
                {/* Blog Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Doctor's Choice Logo */}
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight"
                    whileHover={{ color: "#f59e0b" }}
                  >
                    {blog.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-4 line-clamp-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {blog.excerpt}
                  </motion.p>
                  
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Know More Button */}
                  <motion.button 
                    className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 20px rgba(251, 191, 36, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Know More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

             {/* Call to Action */}
       <motion.section 
         className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
         variants={itemVariants}
       >
         <div className="container mx-auto px-8 text-center">
           <motion.h2 
             className="text-4xl md:text-5xl font-black text-white mb-8"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             Stay Updated with Our Latest Insights
           </motion.h2>
           <motion.p 
             className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium"
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
             Get cooking tips, health benefits, and recipe ideas delivered to your inbox
           </motion.p>
           <motion.button 
             className="bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ type: "spring" as const, stiffness: 100, delay: 0.6 }}
             whileHover={{ 
               scale: 1.05,
               boxShadow: "0 25px 35px rgba(0,0,0,0.15)"
             }}
             whileTap={{ scale: 0.95 }}
           >
             Subscribe to Newsletter
           </motion.button>
         </div>
       </motion.section>
    </motion.div>
  );
};

export default Blogs;

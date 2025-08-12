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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYYUlIynt8XDHBtFLagxloXQP7AHgJeEjUA&s",
      category: "Health & Wellness",
      readTime: "5 min read",
      author: "Dr. Priya Sharma",
      excerpt: "Discover the powerful health benefits of different cooking oils and how they can strengthen your immune system naturally."
    },
    {
      id: 2,
      title: "How to Infuse Mustard Oil for More Flavour in Your Cooking",
      image: "https://static.toiimg.com/thumb/imgsize-274077,msid-69267640,width-375,height-210,resizemode-75/69267640.jpg",
      category: "Cooking Tips",
      readTime: "4 min read",
      author: "Chef Rajesh Kumar",
      excerpt: "Learn the art of infusing mustard oil with aromatic spices to create restaurant-quality dishes at home."
    },
    {
      id: 3,
      title: "How to Infuse Soybean Oil for More Flavour in Your Cooking",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AHtvfjqLisKon9GQLzM3WCo9ZXx6aX_wjg&s",
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
      image: "data:image/jpeg;base64,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",
      category: "Traditional Cooking",
      readTime: "7 min read",
      author: "Guruji Ramakrishna",
      excerpt: "Puja celebrations would not be complete without the accompanying feast. Discover how Doctor's Choice oils enhance traditional dishes."
    },
    {
      id: 5,
      title: "How Doctor's Choice Oil Enhances the Flavour of Your Puja Dishes",
      image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/7657167.webp",
      category: "Traditional Cooking",
      readTime: "5 min read",
      author: "Chef Lakshmi Devi",
      excerpt: "As the holidays draw near, now is the ideal time to perfect your traditional cooking with premium quality oils."
    },
    {
      id: 6,
      title: "The Ultimate Guide to Cooking Ilish with Kachi Ghani Mustard Oil: Tips and Tricks",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKr83PFlqs_BUbScyfe2vH-4ymp62lIUDiQ&s",
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
                   src="https://i.pinimg.com/736x/c2/07/51/c20751243780b8ebf392a896eda3c8d3.jpg"
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

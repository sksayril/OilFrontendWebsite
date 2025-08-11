import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: 'Refined Sunflower Oil',
      description: 'Light and healthy oil perfect for everyday cooking with high vitamin E content.',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Light Flavor', 'Heart Healthy'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Refined Soyabean Oil',
      description: 'Versatile cooking oil with balanced fatty acids for all your culinary needs.',
      features: ['Neutral Taste', 'Versatile Usage', 'Rich in Omega-6', 'Cost Effective'],
      color: 'from-blue-400 to-teal-500'
    },
    {
      name: 'Kachi Ghani Mustard Oil',
      description: 'Traditional cold-pressed oil with authentic flavor and natural goodness.',
      features: ['Cold Pressed', 'Authentic Flavor', 'Natural Antioxidants', 'Traditional Method'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Physically Refined Rice Bran Oil',
      description: 'Premium oil with natural antioxidants and excellent cooking properties.',
      features: ['High Oryzanol', 'Natural Antioxidants', 'Excellent Stability', 'Premium Quality'],
      color: 'from-amber-600 to-yellow-700'
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

  const cardVariants = {
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

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Products
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`h-48 bg-gradient-to-br ${product.color} relative`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div 
                  className="absolute bottom-4 left-6 right-6"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  {product.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 + idx * 0.05 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-yellow-400 rounded-full mr-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 300, delay: 1.2 + index * 0.1 + idx * 0.05 }}
                      ></motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Link to={[
                  '/products/refined-sunflower-oil',
                  '/products/refined-soybean-oil',
                  '/products/refined-mustard-oil',
                  '/products/refined-rice-bran-oil'
                ][index]}>
                  <motion.button 
                    className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      transition: { type: "spring" as const, stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Products Section */}
        <motion.section 
          className="mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Other Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Refined Mustard Oil",
                description: "Traditional cold-pressed oil with authentic flavor",
                route: "/products/refined-mustard-oil",
                color: "from-red-400 to-orange-500"
              },
              {
                name: "Refined Rice Bran Oil",
                description: "Premium oil with natural antioxidants",
                route: "/products/refined-rice-bran-oil",
                color: "from-amber-400 to-yellow-500"
              },
              {
                name: "Refined Sunflower Oil",
                description: "Light and healthy oil perfect for everyday cooking",
                route: "/products/refined-sunflower-oil",
                color: "from-yellow-400 to-orange-500"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring" as const, stiffness: 300 }
                }}
              >
                <div className={`h-32 bg-gradient-to-br ${product.color} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  
                  <Link to={product.route}>
                    <motion.button 
                      className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        transition: { type: "spring" as const, stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Products;
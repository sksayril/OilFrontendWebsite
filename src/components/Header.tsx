import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productTypes = [
    {
      name: 'Soybean Oil',
      route: '/products/refined-soybean-oil'
    },
    {
      name: 'Sunflower Oil',
      route: '/products/refined-sunflower-oil'
    },
    {
      name: 'Mustard Oil',
      route: '/products/refined-mustard-oil'
    },
    {
      name: 'Rice Bran Oil',
      route: '/products/refined-rice-bran-oil'
    }
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        stiffness: 300
      }
    })
  };

  return (
    <motion.header 
      className="bg-white/85 backdrop-blur-xl shadow-2xl border-b border-yellow-200/30 sticky top-0 z-50 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/20 via-orange-50/15 to-yellow-50/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center h-24 relative">
          {/* Left Navigation Links */}
          <motion.div 
            className="absolute left-0 hidden md:flex items-center space-x-8"
            variants={navItemVariants}
          >
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="block">
                <span className="relative">
                  About Us
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </Link>
            </motion.div>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <motion.button 
                className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg flex items-center space-x-2 relative group"
                whileHover={{ 
                  scale: 1.08,
                  color: "#ca8a04"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Products
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
                <motion.div
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    className="absolute top-full mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200/30 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {productTypes.map((product, index) => (
                      <motion.div
                        key={index}
                        className="block px-8 py-5 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-600 transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl relative group text-base font-semibold"
                        variants={dropdownItemVariants}
                        custom={index}
                        whileHover={{ 
                          x: 10,
                          backgroundColor: "#fefce8",
                          color: "#ca8a04"
                        }}
                      >
                        <Link to={product.route} className="block">
                          <span className="relative">
                            {product.name}
                            <motion.div 
                              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/community" className="block">
                <span className="relative">
                  Community Center
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Centered Logo with Circular Downward Arc */}
          <motion.div 
            className="flex items-center"
            variants={logoVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.15,
                rotate: 8
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              {/* Circular Arc Background */}
              <motion.div 
                className="w-28 h-28 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 35px 60px -12px rgba(251, 191, 36, 0.5), 0 0 0 2px rgba(251, 191, 36, 0.2)",
                  scale: 1.08
                }}
              >
                {/* Inner Glow Effect */}
                <div className="absolute inset-3 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-inner"></div>
                
                {/* Logo Container */}
                <motion.div 
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl relative z-10"
                  whileHover={{
                    boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  <img 
                    src="/src/public/logo.png" 
                    alt="Doctor's Choice Logo" 
                    className="w-20 h-16 object-contain"
                  />
                </motion.div>
                
                {/* Decorative Arc Elements */}
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
                
                {/* Bottom Arc Shadow */}
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
            </motion.div>
          </motion.div>

          {/* Right Navigation Links */}
          <motion.div 
            className="absolute right-0 hidden md:flex items-center space-x-10"
            variants={navItemVariants}
          >
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/recipes" className="block">
                <span className="relative">
                  Recipes
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </Link>
            </motion.div>
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/csr" className="block">
                <span className="relative">
                  CSR
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </Link>
            </motion.div>
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/blogs" className="block">
                <span className="relative">
                  Blogs
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    transition={{ duration: 0.4 }}
                    whileHover={{ width: "100%" }}
                  />
                </span>
              </Link>
            </motion.div>
            <motion.div 
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg relative group"
              whileHover={{ 
                scale: 1.08,
                color: "#ca8a04"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="block">
                <span className="relative">
                  Contact Us
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-full shadow-lg"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const productTypes = [
    {
      name: 'Soyabean Oil',
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
      y: -30,
      scale: 0.85,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        duration: 0.4,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 0.85,
      filter: "blur(8px)",
      transition: { 
        duration: 0.25,
        ease: "easeInOut" as const
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -20, opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        duration: 0.5
      }
    })
  };

  return (
    <motion.header 
      className="bg-white/85 backdrop-blur-xl shadow-2xl border-b border-yellow-200/30 sticky top-0 z-50 relative"
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
              ref={dropdownRef}
              className="relative"
            >
              <motion.button 
                className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-bold text-lg flex items-center space-x-2 relative group"
                whileHover={{ 
                  scale: 1.08,
                  color: "#ca8a04"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
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
              
              {/* Products Dropdown Menu */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200/40 overflow-hidden"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      zIndex: 9999,
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(251, 191, 36, 0.3)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(251, 191, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {/* Premium Header */}
                    <div className="bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 px-6 py-4 border-b border-yellow-100/50">
                      <h3 className="text-lg font-bold text-gray-800 text-center">Our Premium Oils</h3>
                      <p className="text-xs text-gray-500 text-center mt-1">Select your preferred oil</p>
                    </div>
                    
                    {productTypes.map((product, index) => (
                      <motion.div
                        key={index}
                        className="group relative px-6 py-5 text-gray-700 hover:text-yellow-600 transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl cursor-pointer overflow-hidden"
                        variants={dropdownItemVariants}
                        custom={index}
                        whileHover={{ 
                          x: 8,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        {/* Hover Background Effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-yellow-50/80 via-orange-50/60 to-yellow-50/80 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '0%' }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        
                        {/* Left Border Accent */}
                        <motion.div 
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex-1">
                            <Link to={product.route} className="block w-full" onClick={() => setIsProductsOpen(false)}>
                              <span className="relative flex items-center justify-between">
                                <span className="font-semibold text-base group-hover:text-yellow-700 transition-colors duration-300">
                                  {product.name}
                                </span>
                                
                                {/* Arrow Icon */}
                                <motion.div 
                                  className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                  initial={{ x: -10, opacity: 0 }}
                                  whileHover={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                              </span>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Bottom Border Animation */}
                        <motion.div 
                          className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </motion.div>
                    ))}
                    
                    {/* Premium Footer */}
                    <div className="bg-gradient-to-r from-yellow-50/50 via-orange-50/30 to-yellow-50/50 px-6 py-3 border-t border-yellow-100/50">
                      <p className="text-xs text-gray-500 text-center">Premium Quality • Natural Ingredients</p>
                    </div>
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
            <div className="relative">
              {/* Circular Arc Background */}
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden border-2 border-gray-100">
                {/* Enhanced Shadow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-full shadow-inner"></div>
                
                {/* Logo Container */}
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl relative z-10 border border-gray-200">
                  <img 
                    src="/logo.png" 
                    alt="Doctor's Choice Logo" 
                    className="w-24 h-20 object-contain drop-shadow-lg"
                  />
                </div>
                
                {/* Enhanced Outer Shadow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.1),0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white via-gray-50 to-white opacity-80"></div>
              </div>
            </div>
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
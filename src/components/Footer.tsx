import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    'SOYBEAN OIL',
    'SUNFLOWER OIL', 
    'MUSTARD OIL',
    'RICE BRAN OIL',
    'BLOGS',
    'RECIPES',
    'CSR',
    'COMMUNITY CENTER'
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

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        stiffness: 200
      }
    })
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 300
      }
    })
  };

  return (
    <motion.footer 
      className="bg-yellow-400"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Section - Logo and Disclaimer */}
          <motion.div 
            className="lg:col-span-1"
            variants={sectionVariants}
          >
            {/* Doctor's Choice Logo */}
            <motion.div 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <img 
                src="/src/public/doctorlogo.png" 
                alt="Doctor's Choice Logo" 
                className="w-32 h-auto mb-4"
              />
            </motion.div>
            
            {/* Disclaimer Box */}
            <motion.div 
              className="bg-white rounded-lg p-4 shadow-sm"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-6 h-5 bg-green-600 rounded-sm mr-3 flex items-center justify-center flex-shrink-0 mt-0.5"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-xs font-bold">✓</span>
                </motion.div>
                <p className="text-gray-800 text-xs leading-relaxed">
                  Doctors' Choice is only a brand name or trademark and does not represent its true nature.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Section - Navigation Links */}
          <motion.div 
            className="lg:col-span-1"
            variants={sectionVariants}
          >
            <div className="grid grid-cols-1 gap-4">
              {navigationLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-black hover:text-gray-700 font-semibold text-sm transition-colors duration-200 block"
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ 
                    x: 10,
                    color: "#374151",
                    fontWeight: "bold"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Corporate Office */}
          <motion.div 
            className="lg:col-span-1"
            variants={sectionVariants}
          >
            <motion.h3 
              className="font-bold text-black text-lg mb-6"
              whileHover={{ color: "#374151" }}
            >
              CORPORATE OFFICE
            </motion.h3>
            
            <motion.div 
              className="text-black text-sm mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p>P-336, CIT Road Scheme VI-M 2nd Floor,</p>
              <p>Phool Bagan, Kankurgachi, Kolkata 700054,</p>
              <p>West Bengal, India</p>
            </motion.div>
            
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-black text-sm">
                <span className="font-medium">Toll Free Number:</span> 18003453540
              </div>
              <div className="text-black text-sm">
                <span className="font-medium">Email:</span> info@ediblegroup.in
              </div>
            </motion.div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <motion.a 
                href="https://facebook.com" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-md"
                aria-label="Facebook"
                variants={socialVariants}
                custom={0}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  backgroundColor: "#1d4ed8"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md"
                aria-label="Instagram"
                variants={socialVariants}
                custom={1}
                whileHover={{ 
                  scale: 1.2,
                  rotate: -10
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 shadow-md"
                aria-label="YouTube"
                variants={socialVariants}
                custom={2}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  backgroundColor: "#dc2626"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200 shadow-md"
                aria-label="LinkedIn"
                variants={socialVariants}
                custom={3}
                whileHover={{ 
                  scale: 1.2,
                  rotate: -10,
                  backgroundColor: "#1e3a8a"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <motion.div 
        className="bg-gray-600 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.p 
            className="text-center text-white text-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            All Rights Reserved. Copyright 2025
          </motion.p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
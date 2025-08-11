import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactItems = [
    { icon: Phone, title: "Phone", info: "18003453540 (Toll Free)" },
    { icon: Mail, title: "Email", info: "info@ediblegroup.in" },
    { icon: MapPin, title: "Address", info: "P-336, CIT Road Scheme VI-M 2nd Floor,\nPhool Bagan, Kankurgachi, Kolkata 700054,\nWest Bengal, India" },
    { icon: Clock, title: "Business Hours", info: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM" }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 0.4
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
          Contact Us
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring" as const, stiffness: 300 }
              }}
            >
              <motion.h2 
                className="text-3xl font-bold text-yellow-600 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-8 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We'd love to hear from you! Whether you have questions about our products, 
                need cooking tips, or want to share your feedback, our team is here to help.
              </motion.p>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ x: 10, transition: { type: "spring" as const, stiffness: 300 } }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { type: "spring" as const, stiffness: 300 }
                      }}
                    >
                      <item.icon className="w-6 h-6 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={formVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { type: "spring" as const, stiffness: 300 }
            }}
          >
            <motion.h2 
              className="text-3xl font-bold text-yellow-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Send us a Message
            </motion.h2>
            
            <form className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <motion.input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1)" }}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <motion.input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1)" }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <motion.input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1)" }}
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <motion.input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter the subject"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1)" }}
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <motion.textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your message"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(251, 191, 36, 0.1)" }}
                />
              </motion.div>
              
              <motion.button 
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-200"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  transition: { type: "spring" as const, stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
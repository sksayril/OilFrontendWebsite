import React from 'react';
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

  return (
    <footer className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Section - Logo and Disclaimer */}
          <div className="lg:col-span-1">
            {/* Doctor's Choice Logo */}
            <div className="mb-8">
              <img 
                src="/src/public/doctorlogo.png" 
                alt="Doctor's Choice Logo" 
                className="w-32 h-auto mb-4"
              />
            </div>
            
            {/* Disclaimer Box */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <div className="w-6 h-5 bg-green-600 rounded-sm mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-800 text-xs leading-relaxed">
                  Doctors' Choice is only a brand name or trademark and does not represent its true nature.
                </p>
              </div>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-4">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-black hover:text-gray-700 font-semibold text-sm transition-colors duration-200 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Corporate Office */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-black text-lg mb-6">CORPORATE OFFICE</h3>
            
            <div className="text-black text-sm mb-6 leading-relaxed">
              <p>P-336, CIT Road Scheme VI-M 2nd Floor,</p>
              <p>Phool Bagan, Kankurgachi, Kolkata 700054,</p>
              <p>West Bengal, India</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="text-black text-sm">
                <span className="font-medium">Toll Free Number:</span> 18003453540
              </div>
              <div className="text-black text-sm">
                <span className="font-medium">Email:</span> info@ediblegroup.in
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-600 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white text-sm">
            All Rights Reserved. Copyright 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
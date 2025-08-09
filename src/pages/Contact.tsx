import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-yellow-600 mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our products, 
                need cooking tips, or want to share your feedback, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">18003453540 (Toll Free)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@ediblegroup.in</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      P-336, CIT Road Scheme VI-M 2nd Floor,<br/>
                      Phool Bagan, Kankurgachi, Kolkata 700054,<br/>
                      West Bengal, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter the subject"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
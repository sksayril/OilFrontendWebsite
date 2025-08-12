// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCards = () => {
  const recipes = [
    {
      title: 'Parshe Macher Jhal Recipe',
      image: '/api/placeholder/300/200', // Placeholder for fish curry image
      description: 'Traditional Bengali fish curry with aromatic spices'
    },
    {
      title: 'Begun Sorse Bengali Recipe',
      image: '/api/placeholder/300/200', // Placeholder for eggplant curry image  
      description: 'Classic Bengali eggplant in mustard sauce'
    },
    {
      title: 'Bhetki Macher Malaikari Recipe in Bengali',
      image: '/api/placeholder/300/200', // Placeholder for fish curry image
      description: 'Creamy Bengali fish curry with coconut milk'
    },
    {
      title: 'Aloo Posto Recipe',
      image: '/api/placeholder/300/200', // Placeholder for potato curry image
      description: 'Bengali potato curry with poppy seeds'
    },
    {
      title: 'Chingri Macher Malaikari',
      image: '/api/placeholder/300/200', // Placeholder for prawn curry image
      description: 'Bengali prawn curry in coconut milk'
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

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="text-yellow-600"
              whileHover={{ 
                color: "#ca8a04",
                textShadow: "0 0 20px rgba(202, 138, 4, 0.3)"
              }}
            >
              RECIPES
            </motion.span>{' '}
            <span className="text-gray-700">FOR EVERY TASTE</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Recipe Cards Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="recipe-swiper"
          >
            {recipes.map((recipe, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { type: "spring" as const, stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Recipe Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Doctor's Choice Logo Overlay */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <img 
                        src="/doctorlogo.png" 
                        alt="Doctor's Choice" 
                        className="w-8 h-6 object-contain"
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Recipe Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-lg font-bold text-gray-800 mb-3 line-clamp-2"
                      whileHover={{ color: "#f59e0b" }}
                    >
                      {recipe.title}
                    </motion.h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    
                    {/* Explore Button */}
                    <motion.button 
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.button 
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-50 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button 
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-50 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .recipe-swiper .swiper-pagination {
            bottom: -50px !important;
          }
          
          .swiper-pagination-bullet-custom {
            width: 12px;
            height: 12px;
            background: #d1d5db;
            opacity: 1;
            margin: 0 6px;
            transition: all 0.3s ease;
          }
          
          .swiper-pagination-bullet-active-custom {
            background: #f59e0b;
            transform: scale(1.2);
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </motion.section>
  );
};

export default ProductCards;
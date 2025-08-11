import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DilKiChoice from './components/DilKiChoice';
import ProductShowcase from './components/ProductShowcase';
import ProductCards from './components/ProductCards';
import SunflowerSection from './components/SunflowerSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import RefinedSoybeanOil from './pages/RefinedSoybeanOil';
import RefinedMustardOil from './pages/RefinedMustardOil';
import RefinedRiceBranOil from './pages/RefinedRiceBranOil';
import RefinedSunflowerOil from './pages/RefinedSunflowerOil';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import CSR from './pages/CSR';

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DilKiChoice />
      <ProductShowcase />
      <ProductCards />
      <SunflowerSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/refined-soybean-oil" element={<RefinedSoybeanOil />} />
          <Route path="/products/refined-mustard-oil" element={<RefinedMustardOil />} />
          <Route path="/products/refined-rice-bran-oil" element={<RefinedRiceBranOil />} />
          <Route path="/products/refined-sunflower-oil" element={<RefinedSunflowerOil />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<div className="min-h-screen bg-yellow-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Community Center - Coming Soon</h1></div>} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
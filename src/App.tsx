import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DilKiChoice from './components/DilKiChoice';
import ProductShowcase from './components/ProductShowcase';
import ProductCards from './components/ProductCards';
import SunflowerSection from './components/SunflowerSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

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
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<div className="min-h-screen bg-yellow-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Community Center - Coming Soon</h1></div>} />
          <Route path="/csr" element={<div className="min-h-screen bg-yellow-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">CSR - Coming Soon</h1></div>} />
          <Route path="/blogs" element={<div className="min-h-screen bg-yellow-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-800">Blogs - Coming Soon</h1></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
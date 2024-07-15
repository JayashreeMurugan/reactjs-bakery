import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import  AboutPage  from './pages/AboutPage';
import  GalleryPage  from './pages/GalleryPage';
import { FoodPage } from './pages/FoodPage';
import { CartPage } from './pages/CartPage';
import  LocationPage  from './pages/LocationPage';
import  TestimonialPage  from './pages/TestimonialPage';
import { ServicePage } from './pages/ServicePage';
import { Footer } from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/services" element={<ServicePage />} />
          
        </Routes>
        <Footer />
       
      </div>
    </Router>
  );
};

export default App;

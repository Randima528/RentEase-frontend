import React from 'react';
import Navbar from '../../components/common/Navbar';
import Hero from '../../components/common/Hero';
import FeaturedProperties from '../../components/common/FeaturedProperties';
import StatsSection from '../../components/common/StatsSection';
import CTASection from '../../components/common/CTASection';
import Footer from '../../components/common/Footer';


const Home = () => {
  return (
  <div className="min-h-screen bg-gradient-to-r from-[#667eea] to-[#764ba2]">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <StatsSection />
      <CTASection />
      <Footer /> 
    </div>  
  );
};

export default Home;

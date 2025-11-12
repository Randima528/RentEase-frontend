import React from 'react';
import SearchBar from '../common/SearchBar';
import {Search , Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="text-center px-[5%] pt-20 pb-12 text-white">
      <h1 className="text-[3.5rem] max-md:text-[2.5rem] mb-4 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.2)] animate-[fadeInUp_0.8s_ease]">
        Find Your Perfect Home
      </h1>
      <p className="text-[1.3rem] mb-8 opacity-95 animate-[fadeInUp_0.8s_ease_0.2s_backwards]">
        Making renting easy and smooth for everyone
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 animate-[fadeInUp_0.8s_ease_0.3s_backwards]">
        <button className="px-10 py-4 rounded-[30px] border-none cursor-pointer font-semibold text-lg transition-all flex items-center justify-center gap-2 bg-white text-[#667eea] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]">
          <span> <Search size={20}/>  </span>
          Browse Properties
        </button>
        <button className="px-10 py-4 rounded-[30px] cursor-pointer font-semibold text-lg transition-all flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/70 hover:bg-white hover:text-[#667eea] hover:border-transparent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]">
          <span> <Building2 size={20}/> </span>
          List Your Property
        </button>
      </div>

      <SearchBar />
    </section>
  );
};

export default Hero;

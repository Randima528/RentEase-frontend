import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md backdrop-saturate-150 border border-white/40 px-[5%] py-3 flex justify-between items-center shadow-lg sticky top-0 z-[100]">
      <div >
      <img src="/images/RentEase_Logo2.png" alt="RentEase Logo" className="w-60 h-14"/>
      </div>
      <div className="hidden md:flex gap-13 items-center">
        <a href="/" className="no-underline text-[#333] font-medium transition-colors hover:text-[#667eea]">
          Home
        </a>
        <a href="#properties" className="no-underline text-[#333] font-medium transition-colors hover:text-[#667eea]">
          Properties
        </a>
        <a href="#about" className="no-underline text-[#333] font-medium transition-colors hover:text-[#667eea]">
          About
        </a>
        <a href="#contact" className="no-underline text-[#333] font-medium transition-colors hover:text-[#667eea]">
          Contact
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => window.location.href='/login'}
          className="min-w-[120px] h-11 flex items-center justify-center px-6 rounded-[25px] border-2 border-[#667eea] bg-transparent text-[#667eea]  cursor-pointer font-semibold transition-all hover:bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:text-white hover:-translate-y-0.5 hover:border-hidden hover:shadow-[0_8px_20px_rgba(102,126,234,0.4)]"
        >
          Login
        </button>
        <button 
          onClick={() => window.location.href='/register'}
          className="min-w-[120px] h-11 flex items-center justify-center px-6 rounded-[25px] bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none cursor-pointer font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(102,126,234,0.4)]"
        >
          Register
        </button>

        <div className="relative ml-3">
          <img
            src="/images/sri-lanka-flag.png"
            alt="Sri Lanka"
            title="Sri Lanka"
            className="w-8 h-8 rounded-full object-cover border border-white/30 shadow-sm"
          />
          <span className="absolute -bottom-1 -right-1 bg-black text-white text-[7px] font-semibold px-1 py-0.5 rounded-full border border-white/70 shadow-sm">
            LK
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

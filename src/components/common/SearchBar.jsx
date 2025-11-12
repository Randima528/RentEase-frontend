import React, { useRef, useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const PROPERTY_TYPES = ['House', 'Annex', 'Room', 'Apartment', 'Shop', 'Restaurant Space', 'Office Space'];

const SearchBar = () => {
  const prevOverflow = useRef('');
  const dropdownRef = useRef(null);

  const [type, setType] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => { 
      document.body.style.overflow = prevOverflow.current || '';
    };
  }, []);

  
  useEffect(() => {
    function onDoc(e) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  
  useEffect(() => {
    if (open) {
      prevOverflow.current = document.body.style.overflow || '';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow.current || '';
    }
    return () => {
      document.body.style.overflow = prevOverflow.current || '';
    };
  }, [open]);

  const handleFocus = () => {
    prevOverflow.current = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
  };

  const handleBlur = () => {
  
    if (!open) document.body.style.overflow = prevOverflow.current || '';
  };

  return (
    <div className="bg-white p-6 rounded-[50px] flex flex-col md:flex-row gap-4 max-w-[900px] mx-auto my-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)] animate-[fadeInUp_0.8s_ease_0.4s_backwards]">
      <input
        type="text"
        placeholder="Location (City, Area)"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="flex-1 px-5 py-3 border-2 border-[#f0f0f0] rounded-[25px] text-base outline-none transition-colors focus:border-[#667eea] text-black"
      />

      
      <div ref={dropdownRef} className="flex-1 relative">
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          onFocus={handleFocus}
          className="w-full text-left px-6 py-3 border-2 border-[#f0f0f0] rounded-[25px] text-base outline-none flex items-center justify-between gap-2 bg-white"
        >
          <span className={`text-black ${!type ? 'text-gray-400' : ''}`}>{type || 'Property Type'}</span>
          <span className="text-gray-500">▾</span>
        </button>

        {open && (
          <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-50 overflow-auto max-h-48 border border-gray-100">
            <li className="px-2">
              <div className="px-4 py-2 text-sm text-gray-500 font-semibold bg-gray-50 rounded-t-xl">
                Property Type
              </div>
            </li>

            {PROPERTY_TYPES.map((opt, idx) => (
              <li key={opt} className="px-2">
                <button
                  type="button"
                  onClick={() => { setType(opt); setOpen(false); }}
                  className={`w-full text-left px-4 py-3 ${idx === PROPERTY_TYPES.length - 1 ? 'rounded-b-xl' : ''} hover:bg-gray-100 text-black transition`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="number"
        placeholder="Max Rent (Rs.)"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="flex-1 px-6 py-3 border-2 border-[#f0f0f0] rounded-[25px] text-base outline-none transition-colors focus:border-[#667eea] text-black"
      />
      <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-10 py-3 border-none rounded-[25px] cursor-pointer font-semibold text-base transition-transform hover:scale-105 flex items-center gap-2 justify-center">
        <span><Search size={20}/> </span>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

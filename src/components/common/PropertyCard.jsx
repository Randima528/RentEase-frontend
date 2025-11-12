import React from 'react';
import { MapPin , House } from 'lucide-react';

const PropertyCard = ({ badge, title, location, price, image }) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all cursor-pointer hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
      <div className="w-full h-[220px] bg-gradient-to-r from-[#667eea30] to-[#764ba230] relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-2 rounded-[20px] text-sm font-semibold">
          {badge}
        </div>

        
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute text-[6rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
            <House />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-[1.4rem] text-[#333] mb-2 font-semibold">{title}</h3>
        <p className="text-[#666] mb-4 flex items-center gap-2">
          <span> <MapPin /> </span>
          {location}
        </p>
        <div className="flex justify-between items-center pt-4 border-t-2 border-[#f0f0f0]">
          <span className="text-[1.8rem] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            Rs.{price}<small className="text-base">/mo</small>
          </span>
          <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-2.5 rounded-[20px] border-none cursor-pointer font-semibold transition-transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

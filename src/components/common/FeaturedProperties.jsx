import React from 'react';
import PropertyCard from '../common/PropertyCard';

// import images
import house1 from '/images/house2.jpeg';
import house2 from '/images/house1.jpg';
import house3 from '/images/house3.jpg';
import house4 from '/images/house4.jpeg';
import house5 from '/images/house5.jpg';
import house6 from '/images/house6.jpeg';

const FeaturedProperties = () => {
  const properties = [
  { badge: 'Featured', title: 'Modern Apartment in Colombo City', location: 'Colombo 07, Cinnamon Gardens', price: '150,000', image: house1 },
  { badge: 'New', title: 'Spacious Family House', location: 'Kandy, Katugastota', price: '95,000', image: house2 },
  { badge: 'Hot', title: 'Luxury Penthouse Apartment', location: 'Colombo 03, Kollupitiya', price: '250,000', image: house3 },
  { badge: 'Featured', title: 'Cozy Annex for Rent', location: 'Galle, Richmond Hill', price: '45,000', image: house4 },
  { badge: 'New', title: 'Commercial Shop Space', location: 'Kurunegala, Town Center', price: '80,000', image: house5 },
  { badge: 'Hot', title: 'Restaurant Space with Parking', location: 'Negombo, Main Street', price: '120,000', image: house6 },
];


  return (
    <section className="bg-white px-[5%] py-16 rounded-t-[50px]">
      <h2 className="text-center text-[2.5rem] text-[#333] mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-sm">
        Featured Properties
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 mb-12">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;

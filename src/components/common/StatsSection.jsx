import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '10,000+', label: 'Properties Listed' },
    { number: '50,000+', label: 'Happy Tenants' },
    { number: '5,000+', label: 'Property Owners' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="bg-gradient-to-r from-[#667eea] to-[#764ba2] px-[5%] py-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 text-center text-white">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-5xl mb-2">{stat.number}</h3>
          <p className="text-lg opacity-90">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;

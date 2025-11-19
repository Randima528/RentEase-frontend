import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Key, MapPin, UserRound, AirVent, ArrowDownUp, SquareParking, Cctv, EvCharger, Signal, Hotel, ShowerHead, Dumbbell, WavesLadder } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock property data - In real app, fetch based on ID
  const property = {
    id: id,
    title: "Modern Luxury Apartment in Colombo City",
    location: "Colombo 07, Cinnamon Gardens, Sri Lanka",
    price: "150,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,450 sq ft",
    floor: "7th Floor",
    description: "This beautifully presented modern apartment is located in the heart of Colombo 07, one of the most prestigious and sought-after neighbourhoods in Sri Lanka. The spacious 3-bedroom, 2-bathroom unit offers elegant interiors, a bright open-plan living space, and floor-to-ceiling windows that provide stunning views of the city. The apartment includes a fully fitted pantry, high-quality tiled flooring, air conditioning in all rooms, and secure building access. Its prime location in Cinnamon Gardens ensures quick access to leading schools, supermarkets, cafés, hospitals, parks, and major city attractions. Perfect for families or professionals seeking a premium urban lifestyle with convenience and comfort.",
    amenities: [
    { icon: <AirVent />, name: "Air Conditioning (All Rooms)" },
    { icon: <ArrowDownUp />, name: "Elevator Access" },
    { icon: <SquareParking />, name: "Reserved Parking Slot" },
    { icon: <Cctv />, name: "24/7 Security & CCTV" },
    { icon: <EvCharger />, name: "Backup Generator" },
    { icon: <Signal />, name: "High-Speed Fiber Internet" },
    { icon: <Hotel />, name: "Balcony with City View" },
    { icon: <ShowerHead />, name: "Hot Water System" },
    { icon: <Dumbbell />, name: "Gym Access" },
    { icon: <WavesLadder />, name: "Swimming Pool" }
    ],
    owner: {
      name: "Mr. Dilshan Perera",
      role: "Property Owner",
      properties: 8,
      rating: 4.8
    },
    // <-- add this images array (use files from public/images/)
    images: [
      '/images/house1.1.jpg', // main / large image (will use index 0 as big)
      '/images/house1.2.jpg',
      '/images/house1.3.jpg',
      '/images/house1.4.jpg',
      '/images/house1.5.jpg'
    ]
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Navbar */}
      <nav className="bg-white px-[5%] py-5 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] sticky top-0 z-[100]">
        <div >
      <img src="/images/RentEase_Logo2.png" alt="RentEase Logo" className="w-60 h-14"/>
      </div>
        <button 
          onClick={() => navigate('/')}
          className="bg-[#f0f0f0] px-6 py-3 rounded-[20px] border-none cursor-pointer font-semibold transition-all hover:bg-[#e0e0e0] flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </button>
      </nav>

      {/* Container */}
      <div className="max-w-[1400px] mx-auto my-8 px-8">
        {/* Gallery */}
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 h-[500px] rounded-[20px] overflow-hidden mb-8 max-lg:grid-cols-[1fr_1fr] max-lg:h-[400px] max-md:grid-cols-2 max-md:h-[500px]">
         
          {(property.images && property.images.length ? property.images : ['/images/placeholder.jpg']).slice(0,5).map((src, index) => (
            <div
              key={src + index}
              className={`relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${index === 0 ? 'row-span-2 max-md:row-span-1' : ''}`}
            >
              <img
                src={src}
                alt={`${property.title} - image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          
        </div>
        

        {/* Content Grid */}
        <div className="grid grid-cols-[2fr_1fr] gap-8 max-lg:grid-cols-1">
          {/* Main Content */}
          <div className="bg-white p-10 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
            {/* Property Header */}
            <div className="flex justify-between items-start mb-8 pb-8 border-b-2 border-[#f0f0f0] max-md:flex-col max-md:gap-4">
              <div>
                <h1 className="text-[2.5rem] text-[#333] mb-2 max-md:text-[2rem]">{property.title}</h1>
                <div className="text-[#666] text-[1.1rem] flex items-center gap-2">
                  <MapPin /> {property.location}
                </div>
              </div>
              <div className="text-right max-md:text-left">
                <div className="text-[3rem] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent max-md:text-[2.5rem]">
                  Rs.{property.price}
                </div>
                <div className="text-[#666] text-[1.1rem]">per month</div>
              </div>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-4 gap-6 mb-8 pb-8 border-b-2 border-[#f0f0f0] max-md:grid-cols-2">
              <div className="text-center p-6 bg-gradient-to-br from-[#667eea10] to-[#764ba210] rounded-[15px]">
                <div className="text-[2.5rem] mb-2">🛏️</div>
                <div className="text-[#666] text-[0.9rem] mb-1">Bedrooms</div>
                <div className="text-[1.2rem] font-bold text-[#333]">{property.bedrooms}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#667eea10] to-[#764ba210] rounded-[15px]">
                <div className="text-[2.5rem] mb-2">🚿</div>
                <div className="text-[#666] text-[0.9rem] mb-1">Bathrooms</div>
                <div className="text-[1.2rem] font-bold text-[#333]">{property.bathrooms}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#667eea10] to-[#764ba210] rounded-[15px]">
                <div className="text-[2.5rem] mb-2">📏</div>
                <div className="text-[#666] text-[0.9rem] mb-1">Area</div>
                <div className="text-[1.2rem] font-bold text-[#333]">{property.area}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#667eea10] to-[#764ba210] rounded-[15px]">
                <div className="text-[2.5rem] mb-2">🏢</div>
                <div className="text-[#666] text-[0.9rem] mb-1">Floor</div>
                <div className="text-[1.2rem] font-bold text-[#333]">{property.floor}</div>
              </div>
            </div>

            {/* Description */}
            <h2 className="text-[1.8rem] text-[#333] mb-4">Description</h2>
            <p className="text-[#666] leading-[1.8] text-[1.05rem] mb-8">
              {property.description}
            </p>

            {/* Amenities */}
            <h2 className="text-[1.8rem] text-[#333] mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4 mb-8 max-md:grid-cols-1">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-[10px]">
                  <span className="text-[1.5rem]">{amenity.icon}</span>
                  <span className="text-[#333] font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Owner Card */}
            <div className="bg-white p-8 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] text-center">
              <div className="w-[100px] h-[100px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full mx-auto mb-4 flex items-center justify-center text-[3rem] text-white">
                <UserRound size={48} strokeWidth={1.5} className="text-white" />
              </div>
              <h3 className="text-[1.5rem] text-[#333] mb-1">{property.owner.name}</h3>
              <p className="text-[#666] mb-6">{property.owner.role}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#f8f9fa] rounded-[10px] text-center">
                  <div className="text-[1.5rem] font-bold text-[#667eea]">{property.owner.properties}</div>
                  <div className="text-[0.85rem] text-[#666] mt-1">Properties</div>
                </div>
                <div className="p-4 bg-[#f8f9fa] rounded-[10px] text-center">
                  <div className="text-[1.5rem] font-bold text-[#667eea]">{property.owner.rating}</div>
                  <div className="text-[0.85rem] text-[#666] mt-1">Rating</div>
                </div>
              </div>

              <button className="w-full p-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-[12px] text-[1.1rem] font-semibold cursor-pointer transition-transform hover:-translate-y-0.5 mb-3 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Owner
              </button>
              <button className="w-full p-4 bg-white text-[#667eea] border-2 border-[#667eea] rounded-[12px] text-[1.1rem] font-semibold cursor-pointer transition-all hover:bg-[#f8f9fa] flex items-center justify-center gap-2">
                <MessageSquare size={18} />
                Send Message
              </button>
            </div>

            {/* Request to Rent Card */}
            <div className="bg-white p-8 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
              <h3 className="text-[1.8rem] text-[#333] mb-4">Request to Rent</h3>
              <p className="text-[#666] mb-6 leading-[1.6]">
                Interested in this property? Submit a rental request to the owner and get a response within 24 hours.
              </p>
              <button className="w-full p-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-[12px] text-[1.2rem] font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)] flex items-center justify-center gap-2">
                <Key size={20} />
                Request to Rent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

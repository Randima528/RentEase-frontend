import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, Building2, KeyRound } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'owner',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Register logic
    console.log('Register submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4 py-8">
      <div className="bg-white rounded-[20px] sm:rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-w-[900px] w-full p-6 sm:p-8 md:p-12 animate-[slideIn_0.6s_ease]">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
              <img
                src="/images/RentEase_Logo2.png"
                alt="RentEase"
                className="h-18 w-auto align-center mx-auto"
              />
        </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#333] mb-2 font-semibold">
            Create Your Account
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666]">
            Join RentEase and start your rental journey today
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
            <label
              className={`p-2 sm:p-2 md:p-2 border-3 rounded-[70px] sm:rounded-[70px] text-center cursor-pointer transition-all hover:border-[#667eea] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)] ${
                formData.role === 'owner'
                  ? 'border-[#667eea] bg-gradient-to-br from-[#667eea10] to-[#764ba210]'
                  : 'border-[#e0e0e0]'
              }`}
            >
              <input
                type="radio"
                name="role"
                value="owner"
                checked={formData.role === 'owner'}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="hidden"
              />
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">
                <Building2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-10 mx-auto text-[#667eea]" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl text-[#333] mb-1 sm:mb-2 font-semibold">
                Property Owner
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#666]">
                List and manage your properties
              </p>
            </label>

            <label
              className={`p-2 sm:p-2 md:p-2 border-3 rounded-[70px] sm:rounded-[70px] h-[20vh] text-center cursor-pointer transition-all hover:border-[#667eea] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,0.2)] ${
                formData.role === 'tenant'
                  ? 'border-[#667eea] bg-gradient-to-br from-[#667eea10] to-[#764ba210]'
                  : 'border-[#e0e0e0]'
              }`}
            >
              <input
                type="radio"
                name="role"
                value="tenant"
                checked={formData.role === 'tenant'}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="hidden"
              />
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">
                <KeyRound className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-10 mx-auto text-[#667eea]" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl text-[#333] mb-1 sm:mb-2 font-semibold">
                Tenant
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#666]">
                Find your perfect rental home
              </p>
            </label>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
                First Name
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                  <User size={18} className="text-gray-500 sm:w-5 sm:h-5" />
                </span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
                Last Name
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                  <User size={18} className="text-gray-500 sm:w-5 sm:h-5" />
                </span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                <Mail size={18} className="text-gray-500 sm:w-5 sm:h-5" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="phone" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                <Phone size={18} className="text-gray-500 sm:w-5 sm:h-5" />
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+94 71 234 5678"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label htmlFor="password" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                  <Lock size={18} className="text-gray-500 sm:w-5 sm:h-5" />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-[#333] font-semibold text-sm sm:text-base">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                  <Lock size={18} className="text-gray-500 sm:w-5 sm:h-5" />
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mb-6 sm:mb-8">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="w-5 h-5 mt-0.5 cursor-pointer accent-[#667eea]"
            />
            <label htmlFor="terms" className="text-xs sm:text-sm md:text-base text-[#666] cursor-pointer">
              I agree to the{' '}
              <Link to="/terms" className="text-[#667eea] no-underline hover:underline">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#667eea] no-underline hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-[30px] sm:rounded-[30px] text-base sm:text-lg font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(102,126,234,0.4)]"
          >
            Create Account
          </button>

          {/* Login Link */}
          <div className="text-center mt-4 sm:mt-6 text-sm sm:text-base text-[#666]">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#667eea] no-underline font-semibold transition-colors hover:text-[#764ba2]"
            >
              Login Here
            </Link>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Register;

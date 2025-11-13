import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Home } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-[20px] sm:rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] w-full animate-[slideIn_0.6s_ease]">
        
        {/* Left Side */}
        <div className="hidden lg:flex bg-gradient-to-br from-[#667eea] to-[#764ba2] p-16 flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute text-[20rem] opacity-10 -bottom-16 -right-16 -rotate-[15deg]">
            
          </div>
          
          <div className="relative z-10">
            <h1 className="mb-4">
              <img
                src="/images/RentEase_Logo2.png"
                alt="RentEase"
                className="h-18 w-auto filter brightness-65"
              />
            </h1>
            <p className="text-xl opacity-70 leading-relaxed pr-10 pl-9 max-w-[400px]">
              Welcome back! Login to manage your properties, track rentals, and connect with tenants or owners seamlessly.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-6">
            <img
              src="/images/RentEase_Logo2.png"
              alt="RentEase"
              className="h-15 w-auto mx-auto"
            />
          </div>

          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] text-[#333] mb-2 font-semibold">
              Login to Your Account
            </h2>
            <p className="text-sm sm:text-base text-[#666]">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4 lg:mb-6">
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
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4 lg:mb-6">
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 border-2 border-[#e0e0e0] rounded-[30px] sm:rounded-[30px] text-sm sm:text-base outline-none transition-all focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] text-black"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-4 lg:mb-6">
              <Link 
                to="/forgot-password" 
                className="text-[#667eea] no-underline text-xs sm:text-sm transition-colors hover:text-[#764ba2] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-[30px] sm:rounded-[30px] text-base sm:text-lg font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(102,126,234,0.4)]"
            >
              Login
            </button>

            {/* Divider */}
            <div className="text-center my-6 lg:my-8 relative">
              <span className="bg-white px-3 sm:px-4 relative text-[#666] z-10 text-sm sm:text-base">OR</span>
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#e0e0e0]"></div>
            </div>

            {/* Register Link */}
            <div className="text-center text-[#666] text-sm sm:text-base">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="text-[#667eea] no-underline font-semibold transition-colors hover:text-[#764ba2]"
              >
                Register Now
              </Link>
            </div>
          </form>
        </div>
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

export default Login;

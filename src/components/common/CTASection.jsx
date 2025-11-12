import React from 'react';
import { Building2, KeyRound } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-white px-[5%] py-20 text-center">
      <div>
        <h2 className="text-[2.8rem] text-[#333] mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-[#666] mb-10 max-w-[700px] mx-auto">
          Join thousands of property owners and tenants who trust RentEase for hassle-free rental management. Sign up today and experience the difference!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
          <button
            onClick={() => window.location.href = '#register'}
            className="px-12 py-5 rounded-[50px] border-none cursor-pointer font-semibold text-lg transition-all bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)] w-full md:w-auto flex items-center gap-3 justify-center"
          >
            <Building2 size={18} />
            <span>Register as Owner</span>
          </button>

          <button
            onClick={() => window.location.href = '#register'}
            className="px-12 py-5 rounded-[50px] border-none cursor-pointer font-semibold text-lg transition-all bg-gradient-to-r from-[#10b981] to-[#059669] text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.4)] w-full md:w-auto flex items-center gap-3 justify-center"
          >
            <KeyRound size={18} />
            <span>Register as Tenant</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

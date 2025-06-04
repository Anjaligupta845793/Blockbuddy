import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#0F172A] py-20 text-[#F8FAFC] font-sans relative">
      {/* Two-tone grid background */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#0F172A] col-span-7"></div>
        <div className="bg-[#1e2b23] col-span-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] px-4 mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#1A73E8] mb-8">
          Let's Work Together
        </h1>

        <div className="flex justify-center mt-8 gap-6 flex-wrap">
          <button className="px-10 py-5 bg-[#1A73E8] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#6366F1] text-[#F8FAFC] font-bold rounded-2xl shadow-[-4px_6px_0px_0px_rgba(26,115,232,0.25)] uppercase tracking-wider border border-[#E0F2FE] transition">
            Contact Us
          </button>
          <button className="px-10 py-5 bg-[#1A73E8] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#6366F1] text-[#F8FAFC] font-bold rounded-2xl shadow-[-4px_6px_0px_0px_rgba(26,115,232,0.25)] uppercase tracking-wider border border-[#E0F2FE] transition">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

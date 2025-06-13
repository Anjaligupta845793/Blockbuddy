import React from "react";

const Contact = () => {
  return (
    <div className="bg-[var(--primary)] py-20">
      <div className="max-w-[760px] mx-auto">
        <p className="text-7xl text-white font-extrabold  tracking-wider ">
          Get Started Now ?
        </p>
        <p className="py-3 text-2xl text-[#C6CDCA]">
          Art Developer Membantu anda dalam mengembangkan Bisnis dan kami
          memberikan Solusi dan Strategi yang tepat untuk Bisnis anda
        </p>
        <div className="flex md:flex-row flex-col  gap-3 mt-4  justify-center">
          <button className="bg-[var(--secondary))] border-1 text-black font-bold px-10 py-4 rounded-lg">
            Conatact Us
          </button>
          <button className="bg-[var(--primary)] border-1 text-gray-400 font-bold px-10 py-4 rounded-lg">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

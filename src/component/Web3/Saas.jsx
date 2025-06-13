import React from "react";
import Image from "next/image";
const Saas = () => {
  return (
    <div className="bg-[var(--primary)] text-[var(--secondary)] py-20">
      <div className="max-w-[1260px] mx-auto px-3 flex md:flex-row flex-col md:gap-10 gap-4">
        <div className="md:w-[40%] w-full">
          <Image
            src="https://mfadhlillahrasyid.github.io/art-developer/assets/img/index/3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="md:w-[60%] w-full py-10 ">
          <div className="max-w-[600px]">
            <p className="md:text-6xl text-4xl  text-white font-bold md:text-left text-center  ">
              Affiliate Markeing automation
            </p>
            <p className="text-gray-600 text-lg mt-3">
              Tanpa anda sadari teknologi sekarang semakin berkembang, untuk
              bisa menguasai dibidang digital anda harus bisa menyesuaikan semua
              sistem untuk bisa membangun kerajaan bisnis yang Relevan. Namun
              kesulitan apa yang anda hadapi untuk bisa membuat bisnis anda
              menjadi bertumbuh ?
            </p>
            <button className="bg-[var(--secondary))] border-1 text-black font-bold px-10 py-3  mt-2 rounded-lg">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;

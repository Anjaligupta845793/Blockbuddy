import React from "react";

const ServiceCard = ({ imagePath, title, subtitle }) => {
  return (
    <div className="relative bg-[#162219] border border-green-500 rounded-2xl pt-14 px-6 pb-8 hover:border-green-400 transition duration-300 shadow-lg">
      <img
        src={imagePath}
        alt={title}
        className="w-20 h-20 object-contain absolute -top-10 left-6"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-base text-gray-300 mb-4 max-w-[280px]">{subtitle}</p>
      <div className="bg-green-500 hover:bg-green-600 text-black text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full border border-white">
        +
      </div>
    </div>
  );
};

export default ServiceCard;

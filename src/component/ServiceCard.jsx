import React from "react";

const ServiceCard = ({ imagePath, title, subtitle }) => {
  return (
    <div className="relative bg-[#1E293B] border border-[#3B82F6] rounded-2xl pt-14 px-6 pb-8 hover:border-[#60A5FA] transition duration-300 shadow-lg">
      <img
        src={imagePath}
        alt={title}
        className="w-20 h-20 object-contain absolute -top-10 left-6"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-base text-[#CBD5E1] mb-4 max-w-[280px]">{subtitle}</p>
      <div className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full border border-white">
        +
      </div>
    </div>
  );
};

export default ServiceCard;

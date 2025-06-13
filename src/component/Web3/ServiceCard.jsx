import React from "react";
import Link from "next/link";

const ServiceCard = ({ svg: Icon, title, subtitle, bg }) => {
  return (
    <div
      className={`rounded-lg p-8 text-[var(--secondary)] ${
        !bg ? "bg-[#0a0a0a]" : "bg-transparent"
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-[#13240C] rounded-full mb-4 ">
        <Icon className="text-[var(--secondary)] " width={20} hight={20} />
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>

      {/* Subtitle */}
      <p className="text-[#C6CDCA] text-sm tracking-wider">{subtitle}</p>
      <p className="text-[var(--secondary)] font-bold mt-2">Contact Now →</p>
    </div>
  );
};

export default ServiceCard;

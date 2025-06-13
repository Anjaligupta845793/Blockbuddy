import React from "react";
import Image from "next/image";

const FounderCard = () => {
  return (
    <div className="bg-[#0A1D4E] text-[#FFE082] p-6 md:p-10 max-w-md rounded-lg relative font-sans">
      {/* Top Blue Bar */}
      <div className="h-4 w-24 bg-[#5FB1FF] mb-4"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">MEET OUR FOUNDER</h2>
      <p className="text-sm text-white mb-4">
        Let me introduce our professional team.
      </p>

      {/* Image + Badge */}
      <div className="relative mb-4">
        <Image
          src="/founder.jpg" // Replace with your actual image path
          alt="Founder - James William"
          width={400}
          height={400}
          className="rounded-md w-full"
        />
        <div className="absolute top-2 left-2 bg-[#0A1D4E] text-white p-1 rounded-full">
          {/* Checkmark badge */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#5FB1FF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Waves */}
      <div className="absolute top-20 right-0 transform translate-x-6 -rotate-12 text-[#5FB1FF] text-3xl">
        ~~~
      </div>
      <div className="absolute bottom-10 left-0 transform -translate-x-6 rotate-12 text-[#5FB1FF] text-3xl">
        ~~~
      </div>

      {/* Name + Username */}
      <div className="mt-4">
        <h3 className="text-2xl font-bold">JAMES WILLIAM</h3>
        <p className="text-white text-sm">@jameswilliam</p>
      </div>

      {/* Dotted decoration */}
      <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-1">
        <span className="h-2 w-2 bg-[#FFE082] rounded-full"></span>
        <span className="h-2 w-2 bg-[#FFE082] rounded-full"></span>
        <span className="h-2 w-2 bg-[#FFE082] rounded-full"></span>
        <span className="h-2 w-2 bg-[#FFE082] rounded-full"></span>
      </div>
    </div>
  );
};

export default FounderCard;

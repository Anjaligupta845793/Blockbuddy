import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Social Media",
    subtitle: "We help you maximize your potential online",
    imagePath:
      "https://static.wixstatic.com/media/2f2ef0_744ba7d41f81458b9bc644f717c81191~mv2.png",
  },
  {
    title: "Content Creation",
    subtitle: "We create content that captures more attention",
    imagePath:
      "https://static.wixstatic.com/media/2f2ef0_139c72b2977c4cdf9db3d9684a33a872~mv2.png",
  },
  {
    title: "Community Growth",
    subtitle: "We build crypto communities with real, passionate people",
    imagePath:
      "https://static.wixstatic.com/media/2f2ef0_8b805014313f49f8a62f10128670079f~mv2.png",
  },
  {
    title: "KOL Marketing",
    subtitle: "Leverage the power of KOLs and takeover the timeline",
    imagePath:
      "https://static.wixstatic.com/media/2f2ef0_87973598b6ad4dfb800373d8a0ec0e1a~mv2.png",
  },
];

const Services = () => {
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] py-20 relative z-10 font-sans">
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#1E293B] col-span-7"></div>
        <div className="bg-[#0F172A] col-span-5"></div>
      </div>

      <div className="relative z-10 px-4 max-w-[1260px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          What We <span className="text-[#3B82F6] italic">Do</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imagePath={service.imagePath}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import ServiceCard from "./ServiceCard";
import { CalendarDays, Lightbulb, User, ShieldEllipsis } from "lucide-react";
const serviceData = [
  {
    id: "1",
    svg: CalendarDays,
    title: "Social Media Marketing",
    Subtitle:
      "Grow your brand and engage your audience with tailored social media strategies",
  },
  {
    id: "2",
    svg: Lightbulb,
    title: " Marketplace Optimization",
    Subtitle:
      "Naikkan produk kamu dan jangkau audience potensial dengan Beriklan...",
  },
  {
    id: "3",
    svg: User,
    title: "Content Creation",
    Subtitle:
      "Create compelling content that captures attention and drives action.",
  },
  {
    id: "4",
    svg: CalendarDays,
    title: "  Performance Marketing",
    Subtitle:
      " Maximize ROI with data-driven ad campaigns across top digital platforms.",
  },
  {
    id: "5",
    svg: Lightbulb,
    title: "Influencer Marketing",
    Subtitle:
      "Amplify your reach through authentic collaborations with trusted influencers",
  },
];

const Services = () => {
  return (
    <div className="bg-[var(--primary)] py-20">
      <div className="max-w-[1260px] mx-auto px-3 ">
        <p className="bg-[#13240C] p-2 rounded-4xl w-[100px] text-center mx-auto ">
          Why Us
        </p>
        <p className="text-5xl font-bold text-white text-center mt-4">
          Upaya kami untuk Memberikan Layanan <br /> Digital di Indonesia
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-20 gap-5">
          {serviceData.map((item) => (
            <ServiceCard
              svg={item.svg}
              title={item.title}
              subtitle={item.Subtitle}
              key={item.id}
              bg={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

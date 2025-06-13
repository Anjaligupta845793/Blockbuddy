import React from "react";
import WhyUsCard from "./WhyUsCard";
import { CalendarDays, Lightbulb, User, ShieldEllipsis } from "lucide-react";
const CardData = [
  {
    id: "1",
    svg: CalendarDays,
    title: "Membantu Bertumbuh",
    Subtitle:
      "Memberikan Pendapat dan Solusi untuk anda sehingga bisnis bisa Mendapatkan Hasil yang Maksimal dan menjadi Semakin Bertumbuh dan Relevan",
  },
  {
    id: "2",
    svg: Lightbulb,
    title: "Memberikan Impact",
    Subtitle:
      "Bisnis yang sehat mampu memberikan dampak yang Luar biasa terhadap Operasional, hal ini bertujuan untuk berkembang dalam melakukan inovasi",
  },
  {
    id: "3",
    svg: User,
    title: "Market yang Tepat",
    Subtitle:
      "Bisnis Tanpa Strategi yang tepat tentu bisnis anda bisa dibilang akan berjalan ditempat karena mereka terlalu sering menebak-nebak dalam penargetan",
  },
];

const WhyUs = () => {
  return (
    <div className="py-20 bg-[var(--primary)] ">
      <div className="max-w-[1260px] px-3 mx-auto ">
        <p className="bg-[var(--secondary)] p-2 rounded-4xl w-[100px] text-center mx-auto ">
          Why Us
        </p>
        <p className="text-5xl font-bold text-white text-center mt-4">
          Upaya kami untuk Memberikan Layanan <br /> Digital di Indonesia
        </p>
        <div className="bg-gradient-to-b to-[var(--primary)] p-5 rounded-lg from-[#0a0a0a]">
          <div className="grid md:grid-cols-3 gap-5 grid-cols-1 mt-20">
            {CardData.map((item) => (
              <WhyUsCard
                svg={item.svg}
                title={item.title}
                subtitle={item.Subtitle}
                key={item.id}
                bg={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

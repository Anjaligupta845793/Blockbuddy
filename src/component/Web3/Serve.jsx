"use client";
import React from "react";
import { CalendarDays, Lightbulb, User, ShieldEllipsis } from "lucide-react";
import WhyUsCard from "./WhyUsCard";

const serveData = [
  {
    id: "1",
    icon: CalendarDays,
    title: "Berpengalaman",
    subtitle:
      "Dengan lebih dari 5 tahun pengalaman, kami membantu Perusahaan besar & Startup",
  },
  {
    id: "2",
    icon: Lightbulb,
    title: "Inovatif",
    subtitle:
      "Kami terus memberikan solusi digital yang kreatif dan up-to-date.",
  },
  {
    id: "3",
    icon: User,
    title: "Fokus pada Klien",
    subtitle: "Kepuasan klien adalah prioritas kami dalam setiap proyek.",
  },
  {
    id: "4",
    icon: ShieldEllipsis,
    title: "Aman & Terpercaya",
    subtitle: "Keamanan dan kepercayaan adalah landasan layanan kami.",
  },
];

const Serve = () => {
  return (
    <div className="py-20 bg-[var(--primary)] ">
      <div className="max-w-[1260px] mx-auto px-2 flex md:flex-row flex-col gap-20">
        <div className="md:w-[40%]">
          <p className="bg-[var(--secondary)] p-2 rounded-4xl w-[200px] md:mx-0 mx-auto text-center ">
            We Serve You Better
          </p>
          <p className="text-5xl text-white font-bold mt-4">
            Layanan Digital terbaik untuk Bisnis Anda
          </p>
          <p className="text-[#C6CDCA] text-md tracking-wider mt-4">
            Kami layanan digital berpusat di kota medan yang berfokus pada
            strategi digital untuk setiap tujuan bisnis tentunya dengan
            menjangakau banyak customer potensial secara online.
          </p>
          <p className="text-[#C6CDCA] text-md tracking-wider">
            Berpengalaman lebih dari 5 tahun,kami selalu melakukan analisa
            target market yang tepat & meningkatkan konversi. Selain itu kami
            selalu berfokus menemukan Unique-Value dari bisnis / brand anda agar
            bisa bersaing bahkan...
          </p>
          <button className="bg-[var(--secondary))] border-1 text-black font-bold px-8 mt-3 py-2 rounded-lg w-full md:w-auto">
            Conatact Us
          </button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:w-[60%]  px-10">
          {serveData.map((item) => (
            <WhyUsCard
              svg={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              bg={false}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serve;

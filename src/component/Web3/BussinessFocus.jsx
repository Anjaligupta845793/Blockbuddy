import React from "react";
import { CalendarDays, Lightbulb, User, ShieldEllipsis } from "lucide-react";
import WhyUsCard from "./WhyUsCard";

const focusData = [
  {
    id: "1",
    svg: Lightbulb,
    title: "Melakukan Pitching Dengan Investor",
    Subtitle:
      "Untuk mendapatkan lebih banyak sokongan dana yang dapat membuat perusahaan lebih stabil dan menjadi lebih dikenal oleh investor",
  },
  {
    id: "2",
    svg: User,
    title: "Memastikan Operasional Tetap Stabil",
    Subtitle:
      "Dengan Digital agensi anda bisa tetap memantau seluruh proses bisnis anda tetap berjalan dengan semestinya tanpa hambatan sedikitpun",
  },
  {
    id: "3",
    svg: CalendarDays,
    title: "Memantau Performa Divisi Lainnya",
    Subtitle:
      "Memastikan Divisi lain bekerja lebih baik sehingga Performa lain bisa lebih maksimal dan semua pencapaian company anda terwujud",
  },
];

const BussinessFocus = () => {
  return (
    <div className="bg-[var(--primary)] py-20">
      <div className="max-w-[1260px] mx-auto px-3 ">
        <p className="bg-[var(--secondary)] p-2 rounded-4xl w-[200px] text-center mx-auto ">
          Bussiness Focus
        </p>
        <p className="text-5xl font-bold text-white text-center mt-4">
          Bersama kami anda cuman Fokus <br />
          dengan Bisnis bukan Hal Teknis
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-20 gap-5">
          {focusData.map((item) => (
            <WhyUsCard
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

export default BussinessFocus;

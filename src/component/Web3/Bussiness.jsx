import React from "react";
import { CalendarDays, Lightbulb, User, ShieldEllipsis } from "lucide-react";

const bussinessData = [
  {
    id: "1",
    svg: User,
    title: "Kami Mempelajari",
    Subtitle:
      "Kami mempelajari dari model bisnis anda dari Flow hingga Produk Sehingga kami melihat goal yang ingin anda capai",
  },
  {
    id: "2",
    svg: CalendarDays,
    title: "Analisa Kebutuhan",
    Subtitle:
      "Kami menganalisa setiap kebutuhan bisnis, setiap bisnis memiliki konsep yang berbeda termasuk model bisnis anda",
  },
  {
    id: "3",
    svg: Lightbulb,
    title: "Strategi Bisnis",
    Subtitle:
      "Memberikan model Strategi yang tepat untuk Kinerja bisnis anda karena membutuhakan data yang Matang & Efesien",
  },
  {
    id: "4",
    svg: Lightbulb,
    title: "Data Eksekusi",
    Subtitle:
      "Data mencakup keseluruhan dari konsep bisnis anda untuk menemukan Goal yang akurat dan Relevan",
  },
];
const Bussiness = () => {
  return (
    <div className="py-20 bg-[var(--primary)]">
      <div className="max-w-[1260px] mx-auto px-2">
        <p className="bg-[#13240C] text-green-400  font-bold p-3 rounded-3xl w-[200px] text-center">
          Business Flow
        </p>

        <p className="text-5xl font-bold text-white text-center mt-4">
          Kami Mewujudkan Flow Bisnis yang Sehat dan Relevan
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-5">
          {bussinessData.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg p-8 
                bg-[#0a0a0a] hover:bg-[var(--secondary)]  
              `}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#13240C] rounded-full mb-4   ">
                <item.svg
                  className="text-[var(--secondary)] "
                  width={20}
                  hight={20}
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-2xl mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[#C6CDCA] text-md tracking-wider">
                {item.Subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;

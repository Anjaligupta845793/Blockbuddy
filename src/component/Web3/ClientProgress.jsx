import React from "react";
import Image from "next/image";

const ClientProgress = () => {
  return (
    <div className="py-20 bg-[var(--primary)] ">
      <div className="max-w-[1260px] mx-auto px-2 flex md:flex-row flex-col gap-19 ">
        <div className="w-[40%]">
          <p className="bg-[var(--secondary)] p-2 rounded-4xl w-[200px] md:mx-0 mx-auto text-center ">
            We Serve You Better
          </p>
          <p className="text-5xl text-white font-bold mt-4">
            Kami Dipercaya untuk Membantu Bisnis Mereka Bertumbuh
          </p>
          <p className="text-[#C6CDCA] text-md tracking-wider mt-4">
            Kami hadir untuk membantu bisnis anda dengan memberikan strategy
            bisnis yang relevan mengedepankan layanan dan hasil yang Nyata.
            Banyak agensi diluar sana yang hanya manis didepan saja, namun hasil
            yang diberikan tidak sebanding dengan apa yang telah kita bayar.
          </p>

          <div className="bg-[#0a0a0a] rounded-lg p-8">
            <p className="` text-[#C6CDCA] tracking-wider">
              Seandainya dari dulu tau agency ini, bisnis saya mungkin gak bakal
              down kekgini. Apalagi pandemi tahun lalu bikin usaha makin down,
              terpaksa saya handel iklan sendiri jadi makin gabisa fokus
            </p>
            <p className="text-xl text-white font-bold ">Hendra Yudianto</p>
            <p className="`rounded-lg text-md tracking-wider bg-[#0a0a0a] text-[#C6CDCA]">
              Owner Zivva Body Wear
            </p>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://mfadhlillahrasyid.github.io/art-developer/assets/img/index/4.png"
            }
            width={400}
            height={400}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientProgress;

import React from "react";
import Image from "next/image";

const Strategy = () => {
  return (
    <div className="py-20 bg-[var(--primary)] ">
      <div className="max-w-[1260px] mx-auto px-2 flex md:flex-row flex-col gap-4 ">
        <div className="w-[60%]">
          <Image
            src={
              "https://mfadhlillahrasyid.github.io/art-developer/assets/img/index/4.png"
            }
            width={400}
            height={400}
            alt="image"
            className="w-[80%] h-full "
          />
        </div>
        <div className="w-[40%]">
          <p className="bg-[#13240C] p-2 rounded-4xl w-[200px] md:mx-0 mx-auto text-center ">
            We Serve You Better
          </p>
          <p className="text-5xl text-white font-bold mt-4">
            Layanan Digital terbaik untuk Bisnis Anda
          </p>
          <p className="text-[#C6CDCA] text-md tracking-wider mt-4">
            Jangan sampai kamu lewatkan. Dengan berjuta ide kreatif kami, Art
            Developer selalu bisa menemukan sesuatu yang beda dan unik di bisnis
            kamu. Menganalisis dan selalu mengikuti apa yang menjadi kesukaan
            dan dicari oleh audiens. Dengan menjadi unik dan beda bisnis kamu
            akan sangat mudah bersaing dan dilirik oleh banyak audiens
          </p>
          <p className="text-[var(--secondary)] font-bold mt-2 ">
            Look At Our Case Study →
          </p>
          <div className="bg-[#0a0a0a] rounded-lg p-8">
            <p className="` text-[#C6CDCA] tracking-wider">
              Gilasih mau percaya atau enggak, tapi Service mereka bener-bener
              Luar biasa. Yang biasanya Omset Sehari cuman 3jt an, Sekarang bisa
              sampe 2x Lipat bahkan 3x lipat.. Bener-bener Profesional banget
              Art Developer
            </p>
            <p className="text-xl text-white font-bold ">Iqbal Ramadhan</p>
            <p className="`rounded-lg text-md tracking-wider bg-[#0a0a0a] text-[#C6CDCA]">
              Owner CV Creative Youth Vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;

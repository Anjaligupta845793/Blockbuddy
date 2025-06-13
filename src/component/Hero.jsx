import React from "react";

const Home = () => {
  return (
    <div className="bg-[#0F172A] py-20 text-[#F8FAFC] font-sans">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        <div className="bg-[#0F172A] col-span-7"></div>
        <div className="bg-[#1E293B] col-span-5"></div>
      </div>

      <div className="max-w-[1260px] mx-auto px-3 flex flex-col-reverse md:flex-row md:gap-0 gap-8 md:py-24 py-16">
        {/* Text Section */}
        <div className="md:w-[60%] space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Web3 Marketing.{" "}
            <span className="italic text-[#3B82F6]">Made Simple</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] border-l-4 border-[#3B82F6] pl-4 max-w-[550px]">
            We help brands and individuals scale their Web3 business online.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-6 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white">
              Get Started
            </button>
            <span className="text-sm font-mono border px-3 py-1 border-white text-[#60A5FA]">
              #MarketingRevolution
            </span>
          </div>

          <div className="overflow-x-auto whitespace-nowrap border-t border-b border-[#334155] py-2 text-xs tracking-widest text-[#94A3B8] font-mono">
            &nbsp;→&nbsp; NO CRINGE. NO BLOAT. JUST DECENTRALIZED
            VALUE.&nbsp;&nbsp;→&nbsp;&nbsp;GET ONCHAIN OR GET LEFT
            BEHIND.&nbsp;&nbsp;→&nbsp;
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[40%] flex flex-col items-center justify-center relative">
          <div className="border-2 border-[#3B82F6] p-2">
            <img
              src="https://static.wixstatic.com/media/2f2ef0_1c69a3b464f1431680c3b6c70180cb99~mv2.png/v1/fill/w_569,h_578,al_c,lg_1,q_85,enc_avif,quality_auto/2f2ef0_1c69a3b464f1431680c3b6c70180cb99~mv2.png"
              alt="Hero"
              className="w-full h-[400px] max-w-[400px] object-contain"
            />
          </div>
          <span className="mt-4 text-xs text-[#64748B] italic">
            — Your Growth Catalyst
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

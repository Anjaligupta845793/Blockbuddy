import React from "react";

const Home = () => {
  return (
    <div className="bg-[#0f1b14]  py-20 text-[#f5f5f5] font-sans">
      {/* Grid background with contrasting columns */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none ">
        <div className="bg-[#0f1b14] col-span-7"></div>
        <div className="bg-[#1e2b23] col-span-5"></div>
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto flex md:flex-row flex-col gap-10 px-4">
        {/* Text Section */}
        <div className="md:w-[60%] space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Web3 Marketing.{" "}
            <span className="italic text-green-400">Made Simple</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9ca3af] border-l-4 border-green-500 pl-4 max-w-[550px]">
            We help brands and individuals scale their Web3 business online.
          </p>

          {/* Call to action section */}
          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white">
              Get Started
            </button>
            <span className="text-sm font-mono border px-3 py-1 border-white text-green-400">
              #MarketingRevolution
            </span>
          </div>

          {/* Horizontal scroll / anti design label */}
          <div className="overflow-x-auto whitespace-nowrap border-t border-b border-[#2e3a33] py-2 text-xs tracking-widest text-[#a3a3a3] font-mono">
            &nbsp;→&nbsp; NO CRINGE. NO BLOAT. JUST DECENTRALIZED
            VALUE.&nbsp;&nbsp;→&nbsp;&nbsp;GET ONCHAIN OR GET LEFT
            BEHIND.&nbsp;&nbsp;→&nbsp;
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[40%] flex flex-col items-center justify-center relative">
          <div className="border-2 border-green-500 p-2">
            <img
              src="https://static.wixstatic.com/media/2f2ef0_1c69a3b464f1431680c3b6c70180cb99~mv2.png/v1/fill/w_569,h_578,al_c,lg_1,q_85,enc_avif,quality_auto/2f2ef0_1c69a3b464f1431680c3b6c70180cb99~mv2.png"
              alt="Hero Image"
              className="w-full h-[400px] max-w-[400px] object-contain"
            />
          </div>
          <span className="mt-4 text-xs text-gray-500 italic">
            — Your Growth Catalyst
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

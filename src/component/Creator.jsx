import React from "react";

const Creator = () => {
  return (
    <div className="bg-[#0f1b14] min-h-screen py-20 text-[#f5f5f5] font-sans relative">
      {/* Two-tone grid background */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#1e2b23] col-span-7"></div>
        <div className="bg-[#0f1b14] col-span-5"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1260px] mx-auto flex md:flex-row flex-col gap-10 px-4">
        {/* Left Column */}
        <div className="md:w-[60%] space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Get Paid to <span className="italic text-green-400">Post</span>{" "}
            Online
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-[#9ca3af] max-w-[600px]">
            <p>
              Want to make money simply by posting about Web3 projects on social
              media? Well now you can.
            </p>
            <p>
              If you have at least 500 followers and have a passion for Web3,
              you can join the SCAL3 Creator Program.
            </p>
            <p>
              An exclusive engagement network that connects passionate content
              creators to Web3 brands.
            </p>
          </div>

          <div className="flex md:flex-row flex-col gap-5">
            <div className="border border-green-500 rounded-3xl p-6 bg-[#13301b] flex-1 shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">For Creators</h2>
              <ul className="list-disc list-inside space-y-1 text-[#a0d39a]">
                <li>Get paid to post online</li>
                <li>Work with top Web3 brands</li>
                <li>No hassle or headaches to manage dealflow</li>
              </ul>
            </div>
            <div className="border border-green-500 rounded-3xl p-6 bg-[#13301b] flex-1 shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">For Brands</h2>
              <ul className="list-disc list-inside space-y-1 text-[#a0d39a]">
                <li>Instant access to an audience of thousands of followers</li>
                <li>Boost your brand presence</li>
                <li>Real people & results, no bots</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-[40%] space-y-8">
          <div className="border border-green-500 rounded-4xl p-8 bg-[#1e2b23] shadow-lg text-center">
            <h2 className="text-4xl font-semibold mb-6">Current Stats</h2>
            <div className="grid grid-cols-2 gap-6 text-[#a0d39a] text-3xl font-bold">
              <div>
                <p>1.2M</p>
                <p className="text-base font-normal mt-1">Combined Audience</p>
              </div>
              <div>
                <p>250+</p>
                <p className="text-base font-normal mt-1">Unique Creators</p>
              </div>
              <div>
                <p>4</p>
                <p className="text-base font-normal mt-1">Social Platforms</p>
              </div>
              <div>
                <p>7</p>
                <p className="text-base font-normal mt-1">Web3 Niches</p>
              </div>
            </div>
          </div>

          <div className="border border-green-500 rounded-4xl p-8 bg-[#13301b] shadow-lg text-center text-[#9ca3af]">
            <p className="text-2xl font-semibold mb-6 text-[#f5f5f5]">
              Want to get involved?
            </p>
            <div className="flex justify-around gap-6 flex-wrap">
              <div>
                <p className="text-lg text-green-400 font-semibold mb-3">
                  Creator
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white">
                  Join the Program
                </button>
              </div>
              <div>
                <p className="text-lg text-green-400 font-semibold mb-3">
                  Brands
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white">
                  Work With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;

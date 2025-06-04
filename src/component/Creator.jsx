import React from "react";

const Creator = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen py-20 text-[#F8FAFC] font-sans relative">
      {/* Two-tone grid background */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#1e2b23] col-span-7"></div>
        <div className="bg-[#0F172A] col-span-5"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1260px] mx-auto flex md:flex-row flex-col gap-10 px-4">
        {/* Left Column */}
        <div className="md:w-[60%] space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Get Paid to <span className="italic text-[#22D3EE]">Post</span>{" "}
            Online
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-[#94A3B8] max-w-[600px]">
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
            <div className="border border-[#22D3EE] rounded-3xl p-6 bg-[#13301b] flex-1 shadow-lg">
              <h2 className="text-2xl font-semibold mb-3 text-[#1A73E8]">
                For Creators
              </h2>
              <ul className="list-disc list-inside space-y-1 text-[#22D3EE]">
                <li>Get paid to post online</li>
                <li>Work with top Web3 brands</li>
                <li>No hassle or headaches to manage dealflow</li>
              </ul>
            </div>
            <div className="border border-[#22D3EE] rounded-3xl p-6 bg-[#13301b] flex-1 shadow-lg">
              <h2 className="text-2xl font-semibold mb-3 text-[#1A73E8]">
                For Brands
              </h2>
              <ul className="list-disc list-inside space-y-1 text-[#22D3EE]">
                <li>Instant access to an audience of thousands of followers</li>
                <li>Boost your brand presence</li>
                <li>Real people & results, no bots</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-[40%] space-y-8">
          <div className="border border-[#22D3EE] rounded-4xl p-8 bg-[#1e2b23] shadow-lg text-center">
            <h2 className="text-4xl font-semibold mb-6 text-[#1A73E8]">
              Current Stats
            </h2>
            <div className="grid grid-cols-2 gap-6 text-[#22D3EE] text-3xl font-bold">
              <div>
                <p>1.2M</p>
                <p className="text-base font-normal mt-1 text-[#94A3B8]">
                  Combined Audience
                </p>
              </div>
              <div>
                <p>250+</p>
                <p className="text-base font-normal mt-1 text-[#94A3B8]">
                  Unique Creators
                </p>
              </div>
              <div>
                <p>4</p>
                <p className="text-base font-normal mt-1 text-[#94A3B8]">
                  Social Platforms
                </p>
              </div>
              <div>
                <p>7</p>
                <p className="text-base font-normal mt-1 text-[#94A3B8]">
                  Web3 Niches
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#22D3EE] rounded-4xl p-8 bg-[#13301b] shadow-lg text-center text-[#94A3B8]">
            <p className="text-2xl font-semibold mb-6 text-[#F8FAFC]">
              Want to get involved?
            </p>
            <div className="flex justify-around gap-6 flex-wrap">
              <div>
                <p className="text-lg text-[#22D3EE] font-semibold mb-3">
                  Creator
                </p>
                <button className="bg-[#1A73E8] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#6366F1] text-[#F8FAFC] font-bold px-6 py-2 rounded-md shadow-[-4px_6px_0px_0px_rgba(26,115,232,0.25)] uppercase tracking-wider border border-[#E0F2FE] transition">
                  Join the Program
                </button>
              </div>
              <div>
                <p className="text-lg text-[#22D3EE] font-semibold mb-3">
                  Brands
                </p>
                <button className="bg-[#1A73E8] hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#6366F1] text-[#F8FAFC] font-bold px-6 py-2 rounded-md shadow-[-4px_6px_0px_0px_rgba(26,115,232,0.25)] uppercase tracking-wider border border-[#E0F2FE] transition">
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

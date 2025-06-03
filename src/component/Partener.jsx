import React from "react";

const parterData = [
  {
    id: 1,
    name: "Brands that need content & social media management",
  },
  {
    id: 2,
    name: "Individuals looking to increase engagement online",
  },
  {
    id: 3,
    name: "Startups needing to grow their social presence",
  },
  {
    id: 4,
    name: "Creators that want to get paid",
  },
];

const Partener = () => {
  return (
    <div className="py-32 bg-[#0f1b14] text-[#f5f5f5] font-sans relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#0f1b14] col-span-7"></div>
        <div className="bg-[#1e2b23] col-span-5"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex md:flex-row flex-col gap-10">
        <div className="md:w-[60%]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Who We <span className="text-green-400">Work</span> With
          </h2>

          <div className="space-y-6">
            {parterData.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 border-l-4 border-green-500 pl-4"
              >
                <span className="text-green-400 text-xl mt-[2px]">✅</span>
                <p className="text-lg md:text-xl text-[#d1d5db] font-medium">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[40%] flex items-center justify-center relative">
          <div className="relative w-[250px] h-[250px]">
            <img
              src="https://static.wixstatic.com/media/2f2ef0_46d4230fb14242fca67df35619214220~mv2.png/v1/fill/w_279,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2f2ef0_46d4230fb14242fca67df35619214220~mv2.png"
              alt="Partner 1"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover absolute md:-top-10 md:left-0 left-[200px] top-5"
            />
            <img
              src="https://static.wixstatic.com/media/2f2ef0_36a7f251e4fe4ec48b3ea575d9fc1274~mv2.png/v1/fill/w_319,h_319,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.png"
              alt="Partner 2"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover absolute top-[140px] md:left-[120px] left-[20px] right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partener;

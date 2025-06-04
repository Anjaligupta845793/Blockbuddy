import React from "react";

const Results = () => {
  return (
    <div className="py-40 bg-[#0F172A]">
      <div className=" py-10 bg-[#1E293B] text-white">
        <h1 className=" md:text-8xl text-5xl font-extrabold  font-sans text-center my-8">
          The Results
        </h1>
        <div className="flex md:flex-row flex-col mx-4 text-center md:gap-2 gap-8 justify-around px-6">
          <div>
            <p className="text-8xl font-extrabold font-sans">20+</p>
            <h2 className="text-2xl font-semibold">Unique Clients</h2>
          </div>
          <div>
            <p className="text-8xl font-extrabold font-sans">1.5M</p>
            <h2 className="text-2xl font-semibold">Total Followers</h2>
          </div>
          <div>
            <p className="text-8xl font-extrabold font-sans">75+</p>
            <h2 className="text-2xl font-semibold">Impressions Generated</h2>
          </div>
          <div>
            <p className="text-8xl font-extrabold font-sans">$4M</p>
            <h2 className="text-2xl font-semibold">Raised for Clients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

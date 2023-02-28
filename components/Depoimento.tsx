import React from "react";

const Depoimento = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row mt-20">
      <div className=" w-full md:w-1/2">
        <img src="/images/depoimento.png" alt="" className="w-full h-full" />
      </div>
      <div className="w-full md:w-1/2 bg-[#FFBB00] p-10 flex flex-col gap-3 justify-between">
        <img src="/images/dec2.png" alt="" className="w-10 h-10 " />
        <div>
          <div className="flex">
            <img src="/images/quotes1.png" alt="" className="w-5 h-5" />
            <p className="font-black text-4xl">
              Cycling has always been my passion, what the people at Bikcraft
              have done is intensify my love for this activity. I recommend it
              to everyone I love.
            </p>
            <img src="/images/quotes2.png" alt="" className="w-5 h-5" />
          </div>
          <div className="text-[#A66F00] font-semibold text-2xl pl-5 mt-5">
            Ana Julia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimento;

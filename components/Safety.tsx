import React from "react";
import { Container } from "./Container";

const CheckIcon = () => {
  return <img src="/images/svg/check.svg" alt="" className="w-5 h-5" />;
};

const Safety = () => {
  return (
    <div className="w-full h-auto text-white bg-[#121212]">
      <Container>
        <h1 className="text-[32px] md:text-[64px] font-bold p-4">safety</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center py-24">
          <div className="h-auto w-full bg-black p-4">
            <div className="flex justify-between">
              <h1 className="uppercase text-[#9C9C9C] text-[36px] font-semibold">
                SILVER
              </h1>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-semibold">$199</span>
                <p className="text-[#9C9C9C] text-right text-base">monthly</p>
              </div>
            </div>
            <div className="text-lg">
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Two exchanges per year</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Technical assistance</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Support 08:00 to 18:00</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>State coverage</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#121212] py-4 px-8 uppercase text-lg rounded-[5px] text-[#CCCCCC] mt-5 ">
                SIGN UP
              </button>
            </div>
          </div>
          <div className="h-auto w-full bg-black p-4">
            <div className="flex justify-between">
              <h1 className="uppercase text-[#FFBB00] text-[36px] font-semibold ml-6">
                GOLD
              </h1>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-semibold">$299</span>
                <p className="text-[#9C9C9C] text-right text-base">monthly</p>
              </div>
            </div>
            <div className="text-lg">
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Five exchanges per year</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Special assistance</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Support 24h</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>National coverage</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Partner discounts</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckIcon />
                <p>Access to the Bikecraft Club</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#F2A60C] py-4 px-8 uppercase text-lg rounded-[5px] text-[#332200] mt-5 ml-6">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Safety;

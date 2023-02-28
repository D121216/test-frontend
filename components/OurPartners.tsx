import React from "react";
import { Container } from "./Container";

const OurPartners = () => {
  return (
    <Container>
      <div className="mt-10">
        <h1 className="text-[32px] md:text-[64px] font-semibold uppercase">
          Our partners.
        </h1>
        <div className="w-full flex flex-wrap relative my-10">
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/1.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/2.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/3.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/4.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/6.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/5.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/7.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="w-1/4 h-11 flex justify-center items-center my-6">
            <img
              src="/images/ourPartner/8.png"
              alt=""
              className=" w-16 h-5 md:w-[147px] md:h-[32px]"
            />
          </div>
          <div className="absolute w-full h-1 bg-[#EDEDED] top-1/2 "></div>
          <div className="absolute h-full w-1 bg-[#EDEDED] left-1/4"></div>
          <div className="absolute h-full w-1 bg-[#EDEDED] left-2/4"></div>
          <div className="absolute h-full w-1 bg-[#EDEDED] left-3/4"></div>
        </div>
      </div>
    </Container>
  );
};

export default OurPartners;

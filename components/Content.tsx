import React from "react";
import { Container } from "./Container";

function XeSVG() {
  return <img src="images/svg/xe.svg" className="w-5 h-5 " />;
}
function GoalSVG() {
  return <img src="images/svg/goal.svg" className="w-5 h-5 " />;
}

const Content = () => {
  return (
    <div className="bg-black w-screen h-auto mt-28 text-white">
      <Container className="flex flex-col md:flex-row gap-5 w-full font-poppins">
        <div className="w-full md:w-1/2 flex flex-col gap-5 my-10">
          <p className="uppercase text-[#B3B3B3] text-2xl font-roboto text-center md:text-left">
            Advanced technology
          </p>
          <h1 className="font-semibold font-poppins text-[50px] md:text-[64px] text-center md:text-left">
            You choose your colors and components.
          </h1>
          <p className="text-[#B3B3B3] font-roboto text-2xl text-center md:text-left">
            Each Bikcraft is unique and has its own identity. The measurements
            will be exact for your body and height, ensuring greater comfort and
            ergonomics in your pedaling. You can also completely customize its
            colors.
          </p>
          <a
            href="/"
            className="uppercase underline text-[#FFBB00] text-2xl font-semibold text-center md:text-left"
          >
            Choose a model
          </a>
          <div className="mt-20 flex gap-5">
            <div className="flex gap-5 flex-col">
              <XeSVG />
              <h2 className="text-2xl font-bold">Electric Motor</h2>
              <p className="text-[#B3B3B3] font-roboto text-base">
                Every Bikcraft is equipped with an electric motor that lasts up
                to 120 hours. The battery is recharged with your energy expended
                when pedaling.
              </p>
            </div>
            <div className="flex gap-5 flex-col">
              <GoalSVG />
              <h2 className="text-2xl font-bold">Tracker</h2>
              <p className="text-[#B3B3B3] font-roboto text-base">
                We know how precious your Bikcraft is, so we've added tracking
                and anti-theft systems to ensure your peace of mind.
              </p>
            </div>
          </div>
        </div>
        <div className="w-ful md:w-1/2 ">
          <img
            src="/images/content/content.png"
            alt=""
            className="h-[500px] md:h-[1000px] w-full md:-mt-8 md:-mb-8"
          />
        </div>
      </Container>
    </div>
  );
};

export default Content;

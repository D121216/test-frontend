import React from "react";
import { Container } from "./Container";

const Banner = () => {
  return (
    <div className=" bg-black w-auto h-auto md:h-[580px] relative text-white">
      <div className="absolute bottom-4 left-4 hidden md:block">
        <img src="/images/dec.png" alt="" />
      </div>
      <Container className="flex flex-col gap-10 md:flex-row w-full md:w-[80%] h-auto">
        <div className="flex flex-col gap-3 w-full md:w-1/2 item-center justify-center md:items-start md:justify-start md:mt-36">
          <h1 className="font-poppins text-bold text-[64px] text-center md:text-left">
            Custom made bikes.
          </h1>
          <p className="font-roboto text-center">
            Electric bicycles of high precision and quality, tailor-made for the
            customer. Explore the world at your own speed with Bikcraft.
          </p>
          <button className="mx-auto my-0 md:m-0 px-8 py-4 bg-[#F2A60C] w-[180px] h-[56px]  uppercase rounded-[5px]">
            your select{" "}
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/banner/xe.png"
            className="w-full h-[400px] md:h-[700px] object-cover "
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;

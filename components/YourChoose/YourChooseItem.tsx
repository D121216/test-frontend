import React from "react";

const YourChooseItem = ({ image, name, des }: any) => {
  return (
    <div className="flex flex-col gap-3 mt-10">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-[300px] md:h-[520px] md:w-[460px]"
      />
      <h3 className="font-semibold text-[32px] text-base">{name}</h3>
      <p className="relative pl-10 text-[#595959] text-lg after:content-[' '] after:bg-[#FFBB00] after:absolute after:left-2 after:top-3 after:w-3 after:h-2">
        {des}
      </p>
    </div>
  );
};

export default YourChooseItem;

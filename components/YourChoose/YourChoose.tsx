import React from "react";
import { Container } from "../Container";
import YourChooseItem from "./YourChooseItem";

const YourChoose = () => {
  const yourChooseList = [
    {
      name: "MAGIC MiGTH",
      des: "R$ 2499",
      image: "/images/YourChoose/xe1.png",
    },
    {
      name: "Nimbus Stark",
      des: "R$ 4909",
      image: "/images/YourChoose/xe2.png",
    },
    {
      name: "Nebula Cosmic",
      des: "R$ 3999",
      image: "/images/YourChoose/xe3.png",
    },
  ];
  return (
    <Container className="font-poppins mt-40">
      <h1 className="text-[32px] md:text-[64px] font-semibold uppercase">
        your choose.
      </h1>
      <div className="mt-4 flex flex-col md:flex-row gap-5">
        {yourChooseList.map((yourchoose: any, index: number) => {
          return (
            <YourChooseItem
              key={index}
              image={yourchoose.image}
              name={yourchoose.name}
              des={yourchoose.des}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default YourChoose;

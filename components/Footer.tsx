import React from "react";
import { Container } from "./Container";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black text-white">
      <Container className="flex flex-col-reverse md:flex-row gap-5 h-auto pt-10">
        <div className="flex flex-col md:justify-between">
          <div className="flex justify-center">
            <img src="/images/logo.png" alt="" className="w-20 h-8" />
          </div>
          <p className="text-[#9C9C9C] text-lg text-center">
            Bikcraft © Alguns rireitos reservados.
          </p>
        </div>
        <div className="flex gap-10 text-[#B3B3B3] w-full">
          <div className="flex flex-col gap-3 w-1/2">
            <h1 className="text-2xl uppercase text-white">Contact</h1>
            <p>+55 22 99999-9999</p>
            <p>contact@bikcraft.com</p>
            <hr className="bg-[#121212]" />
            <p>Rua Ali Perto, 42 - BotafogoRio</p>
            <p>Rio de Janeiro - RJ</p>
            <hr className="bg-[#121212]" />

            <div className="flex gap-3 pb-5">
              <img src="/images/footer/ins.png" alt="" className="w-10 h-10" />
              <img src="/images/footer/fb.png" alt="" className="w-10 h-10" />
              <img src="/images/footer/yt.png" alt="" className="w-10 h-10" />
            </div>
          </div>
          <div className="text-[#B3B3B3] flex flex-col gap-3 w-1/2">
            <h1 className="text-2xl uppercase text-white">INFORMATION</h1>
            <a href="/">Bicycles</a>
            <a href="/">Insurance</a>
            <a href="/">Contacr</a>
            <a href="/">Terms and conditions</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

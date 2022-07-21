import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#090909] ">
      <div className="w-full bg-MaskgroupFallGuys h-[770px] bg-no-repeat bg-cover">
        <Navbar />
        <div className="flex flex-col">
          <h1 className="font-['Poppins500'] text-[#D2A300] text-bv">
            Bem Vindo ao
          </h1>
          <h1>Fall Guys : Ultimate!</h1>
          <p>
            Bem Vindo ao Mussum Ipsum, cacilds vidis litro abertis. Interagi no
            mé, cursus quis, vehicula ac nisi.Mauris nec dolor in eros commodo
            tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Mé faiz
            elementum girarzis, nisi eros vermeio.Atirei o pau no gatis, per
            gatis num morreus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

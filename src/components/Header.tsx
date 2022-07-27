import React from "react";
import Navbar from "./Navbar";
import Users from "../assets/users.svg";
import Plataformas from "../assets/plataformas.svg";

const Header = () => {
  return (
    <div className="bg-[#090909] ">
      <div className=" flex flex-col items-center bg-MaskgroupFallGuys h-[770px] bg-no-repeat bg-cover">
        <Navbar />
        <div className="flex flex-col  w-[580px] h-full  my-[4rem]">
          <div className="font-['Poppins700'] font-bold">
            <h1 className=" text-[#D2A300] text-bv">Bem Vindo ao</h1>
            <h1 className="text-fgu text-white">Fall Guys : Ultimate!</h1>
          </div>

          <p className="text-white ">
            Bem Vindo ao Mussum Ipsum, cacilds vidis litro abertis. Interagi no
            mé, cursus quis, vehicula ac nisi.Mauris nec dolor in eros commodo
            tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Mé faiz
            elementum girarzis, nisi eros vermeio.Atirei o pau no gatis, per
            gatis num morreus.
          </p>
          <button className="w-[340px] h-[70px] bg-[#D72798] my-8 rounded-xl">
            Saiba Mais
          </button>
          <div className=" flex ">
            <img src={Users} alt="users" />
            <p className="m-2 text-white">+ 20 milhões de jogadores</p>
          </div>
          <div className=" text-white mt-24">
            <p>Integração com as maiores plataformas do mundo</p>
            <img src={Plataformas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

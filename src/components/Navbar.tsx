import Logo from "../assets/LogoFallGuys.svg";

const Navbar = () => {
  return (
    <div className=" border-b border-white/[.20] w-full">
      <div className="flex justify-evenly  items-center ">
        <img src={Logo} alt="" />
        <div className=" flex items-center justify-evenly w-1/4  text-white">
          <a href="">Sobre</a>
          <a href="">Download</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

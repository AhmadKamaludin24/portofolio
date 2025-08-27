import React, { useState } from "react";
import { navigation } from "../constans";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Github, Instagram } from "lucide-react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathName = useLocation().hash;

  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };

  const handleNavClick = () => {
    if (!openNav) return;

    enablePageScroll();
    setOpenNav(false);
  };

  console.log(pathName);
  return (
    <div className="fixed top-0 max-sm:bg-n-8 left-0 w-full lg:backdrop-blur-xl z-50  border-b-2 border-n-6">
      <div className="flex  items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="text-xl font-bold font-code" href="#home">
          Ahmad kamaludin
        </a>
        <nav
          className={`${
            openNav ? "flex" : "hidden"
          } fixed right-0 left-0 bottom-0 top-[4.9rem] bg-n-8 lg:flex lg:static lg:bg-transparent lg:mx-auto`}>
          <div className="relative flex z-2 flex-col justify-center items-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                href={item.url}
                onClick={handleNavClick}
                key={item.id}
                className={`block max-sm:text-2xl font-code px-6 py-6 hover:text-violet-400 transition-colors duration-200 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${pathName === item.url ? "text-white" : "text-gray-400"}`}>
                {item.title}
              </a>
            ))}

            <div className="lg:hidden z-10 absolute -bottom-20 flex justify-between items-center gap-6">
              <a href="https://www.instagram.com/ahmadkamaludin97">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors duration-200" />
              </a>
              <a href="https://github.com/AhmadKamaludin24">
                <Github className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors duration-200" />
              </a>
            </div>
          </div>
          <HamburgerMenu />
        </nav>
        <div className="lg:flex hidden justify-between items-center gap-5">
          <a href="https://www.instagram.com/ahmadkamaludin97">
            <Instagram className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors duration-200" />
          </a>
          <a href="https://github.com/AhmadKamaludin24">
            <Github className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors duration-200" />
          </a>
        </div>
        <Button className={`lg:hidden ml-auto`} px={"px-3"} onClick={toggleNav}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
import "../globals.css";
import SlideMenuMobile from "./SlideMenuMobile";
import PersonLoggedIn from "./PersonLoggedIn";
import NavMenu from "./NavMenu";

function HeaderHomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);
  const handleBurgerClick = () => {
    setShow(!show);
  };
  const handleRotateClick = () => {
    setRotate(!rotate);
  };
  
  return (
    <>
      <div
        className={`w-[60vw] h-screen bg-white md:hidden lg:hidden absolute block transition-[left] duration-500 p-3 ${
          !show ? "-left-full" : "left-0"
        }`}><SlideMenuMobile/></div>
      <header className="h-[80px] lg:h-[125px] md:h-[100px] w-full md:px-[4%] lg:px-[4%] px-[2%] py-[40px] flex lg:flex-row md:flex-row bg-white lg:justify-between md:justify-between justify-between items-center md:items-center lg:items-center">
        <Link href="#" className="w-[82px] lg:w-[110px] lg:h-[79px] md:w-[90px]">
          <Image src="/logo.png" alt="logo" height="83" width="114" />
        </Link>
        <div onClick={handleBurgerClick} className="md:hidden lg:hidden block">
          <Hamburger color="#5B5B5B" toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div className="hidden lg:flex md:flex lg:flex-row md:flex-row md:justify-end md:items-center lg:items-center text-[#5B5B5B] lg:gap-12 md:gap-5">
          <NavMenu/>
          {/* <div className="flex flex-col"> */}
            <div>
              <PersonLoggedIn handleRotateClick={handleRotateClick} rotate={rotate}/>
            </div>
          {/* </div> */}
        </div>
      </header>
      <div
        className={`md:block lg:block hidden transition-all duration-300 ${
          rotate
            ? "md:mt-[-21px] lg:mt-[-21px]"
            : "md:mt-[-255px] lg:mt-[-255px]"
        }`}>
        <DropDownMenu />
      </div>
    </>
  );
}

export default HeaderHomePage;

import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import bluneo from "../../public/logo.png";
import MobileNav from "../navbar/mobileNavbar.js";

const Navbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="w-screen">
      <div className="flex justify-between items-center flex-row mx-4 h-20">
        <div className="flex justify-center items-center">
          <Image src={bluneo} height={60} width={50} />
        </div>

        <div className="flex items-center relative group z-10">
          <div className="hidden max-[858px]:block">
            <div className=" w-10 h-10 flex justify-center items-center hover:cursor-pointer ">
              <RxHamburgerMenu
                className="h-full w-full"
                onClick={handleFunction}
              />
            </div>
            {dropdownOpen ? <MobileNav handler={handleFunction} /> : ""}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-6 max-[858px]:hidden text-sm font-bold">
          <ul>Home</ul>
          <ul>Recommendation</ul>
          <ul>Subscribtion</ul>
          <ul>Community</ul>
          <ul>Review</ul>
          <div className="">
            <button class="bg-black hover:bg-red-500  text-white font-bold p-1 rounded-full h-10 w-44">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

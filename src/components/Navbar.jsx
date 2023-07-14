import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/images/1683020860metamask-logo-white.png";
function NavebarItem({ title, classProps }) {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

function Navbar() {
  const [toggleManu, setToggleManu] = useState(false);
  return (
    <div>
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img className="w-32 cursor-pointer" src={logo} alt="logo" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Market", "Exchange", "Tutorials", "wallet"].map((item, index) =>
            <NavebarItem key={index} title={item} />
          )}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
        <div className="flex relative">
          {toggleManu
            ? <AiOutlineClose
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleManu(false)}
              />
            : <HiMenuAlt4
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleManu(true)}
              />}
          {toggleManu &&
            <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in text-white
            ">
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleManu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "wallet"].map((item, index) =>
            <NavebarItem key={index} title={item} classProps='my-2 text-lg'/>
          )}
            </ul>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

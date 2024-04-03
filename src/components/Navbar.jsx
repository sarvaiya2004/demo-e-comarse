import React from "react";
import { useState } from "react";
import TextIcon from "../image/svg/textIcon4.gif";
import { Button } from "@mui/material";
import { ReactComponent as Close } from "../image/svg/Close.svg";
import { ReactComponent as Hamburger } from "../image/svg/Hamburger.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-6 w-full flex-col md:flex-row ">
        <div className="flex ">
          <div className="   text-black mr-6">
            <img src={TextIcon} alt="" />
          </div>
          <div className="block md:hidden   ">
            <button
              className="   px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-white"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                
                <Close className="h-4 w-auto " />
              ) : (
                <Hamburger className="h-4 w-auto" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`w-full  md:flex  md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="/Home"
              className=" mt-4 px-2 flex justify-between items-center text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black mr-4"
            >
              Home
            </a>
            <a
              href="/About"
              className=" mt-4 px-2 flex justify-between items-center text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black mr-4"
            >
              About
            </a>

            <a
              href="/contact"
              className=" mt-4 px-2 flex justify-between items-center text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              Contact
            </a>
            <a
              href="/productPage"
              className=" mt-4 px-2 flex justify-between items-center text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              All Products
            </a>
            <a
              href="/myOrder"
              className=" mt-4 px-2 flex justify-between items-center text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              my Orders
            </a>
            <button
                className="bg-rose-400 hover:bg-green-500 text-white font-bold mr-5 px-4 py-2 rounded mb-4 mt-2" >
                LOG OUT
              </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

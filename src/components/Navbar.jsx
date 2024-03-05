import React from "react";
import TextIcon from "../image/svg/textIcon4.gif";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-6 w-full flex-col md:flex-row ">
        <div className="flex gap-3">
          <div className="block md:hidden items-start  ">
            <button className="flex  items-start px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-white"></button>
          </div>
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <img src={TextIcon} alt="" />
          </div>
        </div>
        <div
          className={`w-full flex-grow md:flex text-center md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="/Home"
              className="block mt-4 text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black mr-4"
            >
              Home
            </a>
            <a
              href="/About"
              className="block mt-4 text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black mr-4"
            >
              About
            </a>

            <a
              href="/contact"
              className="block mt-4 text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              Contact
            </a>
            <a
              href="/productPage"
              className="block mt-4 px-4 text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              All Products
            </a>
            <a
              href="/myorder"
              className="block mt-4  text-sm md:inline-block md:mt-0 text-gray-500 hover:text-black"
            >
              my Orders
            </a>
          </div>
          <div className="flex md:ml-auto justify-center py-5 md:py-0">
            <div className="flex ">
              {/* <p className="  ">{cart.length}</p> */}
            </div>

            <Button color="primary">Logout</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

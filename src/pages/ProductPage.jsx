

import React from "react";
import Footer from './Footer';

import Navbar from "../components/Navbar";
const ProductPage = ({
  
}) => {

  return (
    <div>
                      <Navbar />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-7 mt-7  justify-evenly px-5">
        <div className="mb-4 mt-20">
          <label htmlFor="sortOption" className="mr-2">
            Sort By:
          </label>
          <select
            id="sortOption"
            className="p-2 border w-full border-gray-300 rounded"
          >
            <option value="">None</option>
            <option value="atoz">A to Z</option>
            <option value="hightolow">Price High to Low</option>
            <option value="lowtohigh">Price Low to High</option>
          </select>
        </div>

        <div className="">
          <div className="mb-4">
            <label htmlFor="priceRange" className="mr-2">
              Price Range: <span className="font-bold"> Select the range</span>
            </label>
            
          </div>
        </div>

        <div className="mb-4 mt-20">
          <label htmlFor="searchQuery" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="searchQuery"
            className="p-2 border w-full border-gray-300 rounded"
            placeholder="search any items..."
          />
        </div>
        <div className="mb-4 mt-20">
          <label htmlFor="categoryOption" className="mr-2">
            Category:
          </label>
          <select
            id="categoryOption"
            className="p-2 border w-full border-gray-300 rounded"
          >
            
            
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 px-2 mx-auto md:gap-6">
      
      </div>
      <Footer />
    </div>
  );
};



export default ProductPage;


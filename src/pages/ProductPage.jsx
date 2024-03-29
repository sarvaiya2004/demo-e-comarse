

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReviewBox from "../components/ReviewBox";
import abc from "../image/images/buy-1.jpg";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import n from "../image/images/buy-2.jpg";
import d from "../image/images/buy-3.jpg";
import e from "../image/images/category-1.jpg";
import f from "../image/images/category-2.jpg";
import g from "../image/images/category-3.jpg";
import h from "../image/images/product-3.jpg";
import i from "../image/images/product-4.jpg";
import j from "../image/images/product-5.jpg";
import k from "../image/images/product-7.jpg";


const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Women's Top",
      image: abc,
      price: "$229.99",
      size: "M",
    },
    {
      id: 2,
      name: "Preety Graceful",
      image: n,
      price: "$199.",
      size: "L",
    },
    {
      id: 1,
      name: "Women's Top",
      image: d,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: e,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: f,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: g,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: h,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: i,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: j,
      price: "$229.99",
      size: "M",
    },
    {
      id: 1,
      name: "Women's Top",
      image: k,
      price: "$229.99",
      size: "M",
    },

    // Add more products with reviews and sizes
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-evenly px-5">
        <div className="mb-4">
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
        <div className="mb-4">
          <label htmlFor="priceRange" className="mr-2">
            Price Range:
          </label>
          <select
            id="priceRange"
            className="p-2 border w-full border-gray-300 rounded"
          >
            <option value="">Select Price Range</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-500">$200 - $500</option>
            <option value="500+">$500+</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="searchQuery" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="searchQuery"
            className="p-2 border w-full border-gray-300 rounded"
            placeholder="Search any items.."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryOption" className="mr-2">
            Category:
          </label>
          <select
            id="categoryOption"
            className="p-2 border w-full border-gray-300 rounded"
          >
            <option value="">Select Your Category </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Boys & Girls 2+ Years">Boys & Girls 2+ Years</option>
            <option value="kids">kids</option>
            <option value="Girl">Girl</option>
            <option value="Boy">Boy</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-evenly px-5">
        {/* {/ Product grid /} */}
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
            <div className="flex items-center mt-1">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* {/ Modal for showing product details /} */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center h-auto justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-40 w-[450px] object-cover mb-4"
            />

            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700 font-semibold mt-1">
              {selectedProduct.price}
            </p>
            {/* rediogroupbutton */}
            <div className="mt-4">
              <div className=" flex items-center justify-between">
                <p>
                  SIZE :
                  <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    className=" ml-3" >
                    <ToggleButton value="left" >
                      S
                    </ToggleButton>
                    <ToggleButton value="center"  className=" text-black">
                      XL
                    </ToggleButton>
                    <ToggleButton value="right" >
                      L
                    </ToggleButton>
                    <ToggleButton value="" >
                    XS
                    </ToggleButton>
                  </ToggleButtonGroup>
                </p>
              </div>
              <ReviewBox />
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;

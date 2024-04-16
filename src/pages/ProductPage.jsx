import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReviewBox from "../components/ReviewBox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { products } from "../Temp-deta/ProductDate";

const ProductPage = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  const [, setAlignment] = React.useState("left");

  // eslint-disable-next-line no-unused-vars
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
            className="cursor-pointer">

            <Link to={`/product-detail/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-auto w-full object-contain mb-auto"/>
            </Link>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
            <div className="flex items-center mt-1">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2 hover:bg-green-500"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* {/ Modal for showing product details /} */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center h-auto justify-center bg-gray-800 bg-opacity-80 overflow-y-auto">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-auto w-[450px] object-contain mb-auto"
            />
            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700 font-semibold mt-1">
              {selectedProduct.price}
            </p>
            {/* radio group button */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-3 justify-between">
                  <p className="gap-3 space-x-3">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <p>
                          SIZE :
                          <FormControlLabel
                            value="S"
                            control={<Radio />}
                            label="S"
                          />
                          <FormControlLabel
                            value="L"
                            control={<Radio />}
                            label="L"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="M"
                          />
                          <FormControlLabel
                            value="XL"
                            control={<Radio />}
                            label="XL"
                          />
                          <FormControlLabel
                            value="XXL"
                            control={<Radio />}
                            label="XXL"
                          />
                        </p>
                      </RadioGroup>
                    </FormControl>
                  </p>
                </div>
              </div>
              <ReviewBox />
              <button
                onClick={handleCloseModal}
                className="bg-blue-500  hover:bg-green-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <br />
      <Footer />
    </>
  );
};

export default ProductPage;

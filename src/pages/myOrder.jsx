/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReviewBox from "../components/ReviewBox";
import abc from "../image/images/buy-1.jpg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import n from "../image/images/buy-2.jpg";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Red t- shirt",
      image: abc,
      price: "$149",
      size: "M",
    },
    {
      id: 2,
      name: "black",
      image: n,
      price: "$299.",
      size: "L",
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
  const [setAlignment] = React.useState("left");
  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Navbar />

      <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4">
        {/* {/ Product grid /} */}
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer ml-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-[200px] object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
            <div className="flex items-center mt-1">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 hover:bg-green-500 text-white font-bold flex items-center justify-around mr-5 px-4 py-2 rounded mb-4 mt-2"
              >
                My Order Info
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

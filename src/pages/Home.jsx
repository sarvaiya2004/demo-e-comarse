/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

import Slider from "react-slick";
import ReviewBox from "../components/ReviewBox";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Laptop from "../image/images/Carousal5.jpg";
import MensWear3 from "../image/images/Carousal1.jpg";
import Shoes from "../image/images/MainPageSideDesign.png";
import { useNavigate } from "react-router-dom";
import abc from "../image/images/buy-1.jpg";
import n from "../image/images/buy-2.jpg";
import d from "../image/images/buy-3.jpg";
import e from "../image/images/category-1.jpg";
import f from "../image/images/category-2.jpg";
import h from "../image/images/product-3.jpg";
import i from "../image/images/product-4.jpg";
import j from "../image/images/product-5.jpg";
import k from "../image/images/product-7.jpg";
import Footer from "./Footer";

const CarousalLayout = () => {
  const products = [
    {
      id: 1,
      name: "Red Printed T-shirt",
      image: abc,
      price: "$229.99",
      size: "M",
    },
    {
      id: 2,
      name: "black ",
      image: n,
      price: "$199.",
      size: "L",
    },
    {
      id: 3,
      name: "night pent",
      image: d,
      price: "$229.99",
      size: "M",
    },
    {
      id: 4,
      name: " Sports Shoes For Men",
      image: e,
      price: "$229.99",
      size: "M",
    },
    {
      id: 5,
      name: " Sports Shoes For Men",
      image: f,
      price: "$229.99",
      size: "M",
    },

    {
      id: 6,
      name: "night pent",
      image: h,
      price: "$229.99",
      size: "M",
    },
    {
      id: 7,
      name: "blue pent T-shirt",
      image: i,
      price: "$229.99",
      size: "M",
    },
    {
      id: 8,
      name: "Shoes For Men",
      image: j,
      price: "$229.99",
      size: "M",
    },
    {
      id: 9,
      name: "Shopes For Men",
      image: k,
      price: "$229.99",
      size: "M",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <>
      <Navbar />

      <Slider {...settings} className="overflow-hidden">
        <div>
          <div className="bg-blue-300 md:h-[550px] w-full   aspect-video flex flex-col lg:flex-row justify-evenly">
            <div className="flex flex-col w-full lg:w-[30%] pt-10  items-start justify-center">
              <h1 className="text-5xl text-center lg:text-left">
                Welcome To ProStore Ecommerce
              </h1>
              <button
                className="bg-black hover:bg-white hover:text-black hover:font-semibold duration-300 px-6 py-2 text-white my-5 mx-auto lg:mx-0"
                onClick={() => navigate("/productPage")}>
                Shop Now
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img src={Shoes} alt="Image 1" className="aspect-square h-auto md:h-96 w-auto"/>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={MensWear3} alt="Image 2" className="aspect-video h-[550px] w-full object-cover" />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white text-5xl font-bold mb-4">
                explore our prostore and exiting offers
              </h1>
              <button
                className="bg-black  text-white hover:bg-white  hover:text-black duration-300 rounded-lg px-6 py-2"
                onClick={() => navigate("/productPage")}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={Laptop} alt="Image 3" className="aspect-video h-[550px] w-full object-cover"/>
        </div>
      </Slider>
      <h2 className="font-bold text-[18px] pl-4">men's category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-evenly px-5 pt-3">
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
                className="bg-blue-500 hover:bg-green-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2"
              >
                Buy Now
              </button>

              {/* {/ Render stars based on product rating /} */}
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center h-auto justify-center bg-gray-800 bg-opacity-100">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-40 w-[450px] object-contain mb-4"
            />
            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700 font-semibold mt-1">
              {selectedProduct.price}
            </p>
            {/* rediogroupbutton */}
            <div className="mt-4">
              <p className="text-black font-bold flex items-center justify-around ">
                Size :
                <div>
                  <Button className="" variant="outlined">
                    L
                  </Button>
                </div>
                <div>
                  <Button className="" variant="outlined">
                    XL
                  </Button>
                </div>
                <Button className="" variant="outlined">
                  Small
                </Button>
              </p>
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
      <br />
      <Footer />
    </>
  );
};

export default CarousalLayout;

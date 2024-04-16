/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewBox from "../components/ReviewBox";
import DetailBox from "../components/DetailBox";
import Navbar from "../components/Navbar";
import { products } from "../Temp-deta/ProductDate";
const ProductDetails = () => {
  const { id } = useParams();

  // Find the product with the matching id
  const [product, setProduct] = useState(
    products.find((product) => product.id === parseInt(id))
  );
  if (!product) {
    return (
      <>
        <div>Product not found</div>;
      </>
    );
  }
  const handleSmallImageClick = (image) => {
    setProduct({ ...product, image: image.url });
  };
  return (
    <div>
      <Navbar />
      <p>{product.description}</p>

      <div className="flex items-center justify-between">
        <div className="ml-7 h-[550px] w-[450px] ">
          <img src={product.image} alt="Product" />
        </div>
        <div
          className="small-img-row"
          style={{ position: "relative", top: "-90px" }}
        >
          <div className="row">
            <div className="col-2 m-4">
              <div className="small-img-row">
                <div className="small-img-col m-2 mt-12">
                  {product.moreimage.map((img) => {
                    return (
                      <div className="mb-5 mt-24">
                        <img
                          src={img.url}
                          alt="abc Image"
                          width="100%"
                          id={img.id}
                          className="w-1/4"
                          onClick={() => handleSmallImageClick(img)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-[150px]">
          <ReviewBox />
          <DetailBox />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

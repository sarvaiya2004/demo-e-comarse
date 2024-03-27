// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import abc from "../image/images/buy-1.jpg";
// import s from "../image/images/buy-2.jpg";
// import d from "../image/images/buy-3.jpg";
// import e from "../image/images/category-1.jpg";
// import f from "../image/images/category-2.jpg";
// import g from "../image/images/category-3.jpg";
// import h from "../image/images/product-3.jpg";
// import i from "../image/images/product-4.jpg";
// import j from "../image/images/product-5.jpg";
// import k from "../image/images/product-7.jpg";
// import ReviewBox from "../components/ReviewBox";

// const ProductPage = () => {
//   const products = [
//     {
//       name: "Man t-shirt",
//       description:
//         "This stylish and comfortable top is perfect for any occasion",
//       image: abc,
//       price: "price: 200$",
//     },
//     {
//       name: "New ",
//       description: "Description for Preety Graceful product",
//       image: s,
//       price: "price: 200$",

//     },
//     {
//       name: "Classy Graceful",
//       description: "Description for Graceful Another Product",
//       image: d,
//       price: "price: 200$",
//     },
//     {
//       name: "Classy Elegant",
//       description: "Description for Yet Graceful Another Product",
//       image: e,
//       price: "price: 200$",
//     },
//     {
//       name: "Comfy Sensitive",
//       description: "Description for One More Product",
//       image: f,
//       price: "price: 200$",
//     },
//     {
//       name: "Classy",
//       description: "Description for Last Product",
//       image: g,
//       price: "price: 200$",
//     },
//     {
//       name: "Stylish",
//       description: "Description for One More Product",
//       image: h,
//       price: "price: 200$",
//     },
//     {
//       name: "Preety",
//       description: "Description for One More Product",
//       image: i,
//       price: "price: 200$",
//     },
//     {
//       name: "Preety Retro",
//       description: "Description for One More Product",
//       image: j,
//       price: "price: 200$",
//     },
//     {
//       name: "Stylish Fabulous",
//       description: "Description for One More Product",
//       image: k,
//       price: "price: 200$",
//     },
//   ];

//   const renderRatingStars = (rating) => {
//     const filledStars = "★".repeat(Math.floor(rating));
//     const emptyStars = "☆".repeat(Math.floor(5 - rating));
//     return (
//       <div className="star-rating">
//         <span style={{ width: `${rating * 20}%` }}>{filledStars}</span>
//         <span>{emptyStars}</span>
//       </div>
//     );
//   };
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-evenly px-5">
//         <div className="mb-4">
//           <label htmlFor="sortOption" className="mr-2">
//             Sort By:
//           </label>
//           <select
//             id="sortOption"
//             className="p-2 border w-full border-gray-300 rounded"
//           >
//             <option value="">None</option>
//             <option value="atoz">A to Z</option>
//             <option value="hightolow">Price High to Low</option>
//             <option value="lowtohigh">Price Low to High</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="priceRange" className="mr-2">
//             Price Range:
//           </label>
//           <select
//             id="priceRange"
//             className="p-2 border w-full border-gray-300 rounded"
//           >
//             <option value="">Select Price Range</option>
//             <option value="0-50">$0 - $50</option>
//             <option value="50-100">$50 - $100</option>
//             <option value="100-200">$100 - $200</option>
//             <option value="200-500">$200 - $500</option>
//             <option value="500+">$500+</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="searchQuery" className="mr-2">
//             Search:
//           </label>
//           <input
//             type="text"
//             id="searchQuery"
//             className="p-2 border w-full border-gray-300 rounded"
//             placeholder="Search any items.."
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="categoryOption" className="mr-2">
//             Category:
//           </label>
//           <select
//             id="categoryOption"
//             className="p-2 border w-full border-gray-300 rounded"
//           >
//             <option value="">Select Your Category </option>
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Boys & Girls 2+ Years">Boys & Girls 2+ Years</option>
//             <option value="kids">kids</option>
//             <option value="Girl">Girl</option>
//             <option value="Boy">Boy</option>
//           </select>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 px-2 mx-auto gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="bg-gray-100 p-4 rounded-lg ">
//             <img
//               src={product.image}
//               alt={`Image ${index + 1}`}
//               className="h-56 w-full object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-700">{product.description}</p>
//             <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
//             <div className="flex items-center mt-1">
//               <ReviewBox />
//             </div>
//           </div>
//         ))}
//         {selectedProduct && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//             <div className="bg-white p-4 rounded-lg">
//               <h2 className="text-2xl font-semibold mb-2">
//                 {selectedProduct.name}
//               </h2>
//               {/* {/ Display reviews here /} */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Reviews:</h3>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductPage;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReviewBox from "../components/ReviewBox";
import abc from "../image/images/buy-1.jpg";
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
      image: j ,
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

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-evenly px-5">
        {/* {/ Product grid /} */}
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)} className="cursor-pointer">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
            <div className="flex items-center mt-1">
            <button onClick={handleCloseModal} className="bg-blue-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2">Buy Now</button>

              {/* {/ Render stars based on product rating /} */}
              
            </div>
          </div>
        ))}
      </div>
      
      {/* {/ Modal for showing product details /} */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center h-auto justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            
            <img src={selectedProduct.image} alt={selectedProduct.name} className="h-40 w-[450px] object-cover mb-4" />

            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700 font-semibold mt-1">{selectedProduct.price}</p>
            {/* rediogroupbutton */}
            <div className="mt-4">
              <ReviewBox />
              <button onClick={handleCloseModal} className="bg-blue-500 text-white flex items-center justify-around px-4 py-2 rounded mt-2">Close</button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;

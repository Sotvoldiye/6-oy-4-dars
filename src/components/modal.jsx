import { useEffect, useState } from "react";
import Price from "./price";
const Modal = ({ products, setInmodal, inModal }) => {
    // useEffect(() => {
    //     // document.body.style.overflow = "hidden";
    //     return () => {

    //         document.body.style.overflow = "auto";
    //     };
    // }, []);
    // document.body.style.overflow = "hidden";
  const rewiew = products.reviews;
  console.log(rewiew);
  return (
    <div className=" absolute w-auto  z-100 left-1/2 top-auto/2 overfolw-hidden transform -translate-x-1/2 -translate-y-1/2 ">
   <div className="bg-gray-100 bg-opacity-50 flex flex-col px-2 py-2 rounded-2xl">
   <button
        onClick={() => setInmodal(false)}
        className="rotate-y-3 text-black text-3xl items-end ml-auto mr-5 pr-3 mt-3 "
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="flex items-center justify-center">
        <img className="w-100 h-100" src={products.thumbnail} alt="" />
        <div className="flex flex-col">
          <h1 className="text-4xl">{products.title}</h1>
          <p className="">{products.description}</p>
          <Price products={products} />
        </div>
      </div>
      <div className="flex flex-col items-start mx-auto">
      <h1 className="text-2xl mb-2">Comments</h1>
        <ul className="flex gap-2 items-center justify-center ">
          
          {rewiew.map((element, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-sm">
              <h2>{element.reviewerName}</h2>
              <h3>{element.date}</h3>
              <p>{element.comment}</p>
              <p>⭐{element.rating}</p>
            </li>
          ))}
        </ul>
      </div>
   </div>
    </div>
      
  );
};

export default Modal;

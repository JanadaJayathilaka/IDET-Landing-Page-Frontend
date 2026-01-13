import React from "react";
import { validateCustomerToken } from "../helper/authChecker";
import toast from "react-hot-toast";
const WatchCard = ({
  img,
  title,
  price,
  description1,
  description2,
  description3,
}) => {
  const handleOrderNow = async (watch) => {
    const isValidated = await validateCustomerToken();
    if (!isValidated) {
      toast.error("Please log in to place an order.");
      return;
    }
    toast.success(`Order placed for ${watch}`);
  };
  return (
    <div className="text-center sm:w-[33%]">
      <img src={img} alt="" className="mb-5" />
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="text-preorder text-2xl">{price}</p>
      <p className="text-center text-[12px] sm:text-[15px] text-amber-50">
        {description1}
        <br />
        {description2}
        <br />
        {description3}
      </p>
      <button
        className="bg-green-500 text-black p-2 rounded-xl font-semibold mt-2"
        onClick={() => handleOrderNow(title)}
      >
        Order Now
      </button>
    </div>
  );
};

export default WatchCard;

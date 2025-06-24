import React from "react";
import Button from "../Button";

const Card = (props) => {
  const {
    children,
    desc = "lorem ipsum dolor sit amet",
    price = "Rp.2000",
    text = "Add to Cart",
  } = props;
  return (
    <div className="w-full max-w-sm bg-gradient-to-tl p-3 from-slate-950 via-slate-800 to-slate-950 rounded-lg border border-gray-200 shadow">
      <a href="">
        <img src="/images/gambar.jpg" alt="" className="rounded-t-lg" />
      </a>
      <h5 className="text-white font-semibold my-3">{children}</h5>
      <p className="text-slate-400 mb-8">{desc}</p>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-2xl text-white">{price}</span>
        <Button classname="bg-slate-600">{text}</Button>
      </div>
    </div>
  );
};

export default Card;

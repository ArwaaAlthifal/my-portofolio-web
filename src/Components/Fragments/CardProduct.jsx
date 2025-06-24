import React from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs p-3 mx-2 bg-slate-700 rounded-lg border border-gray-200 shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="" className="rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="h-full">
      <a href="">
        <h5 className="text-white font-semibold my-3">{title}</h5>
        <p className="text-slate-400 mb-8">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, buttonName } = props;
  return (
    <div className="flex justify-between items-center">
      <h5 className="text-white font-bold text-xl">{price}</h5>
      <Button>{buttonName}</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

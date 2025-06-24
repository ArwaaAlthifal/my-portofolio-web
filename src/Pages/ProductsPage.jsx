import React from "react";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/gambar.jpg",
    title: "Product 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, optio.",
    price: "Rp. 3000",
  },
  {
    id: 2,
    image: "/images/gambar.jpg",
    title: "Product 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, optio.",
    price: "Rp. 3000",
  },
];

function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} buttonName={"Buy Now"} />
        </CardProduct>
      ))}
    </div>
  );
}

export default ProductsPage;

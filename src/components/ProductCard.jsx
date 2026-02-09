import React from "react";
import Button from "./button";

export default function ProductCard(props) {
  const { brand, price, image } = props;
  return (
    <>
      <img src={image} alt="laptop" />
      <h1>{brand}</h1>
      <p>Price: ${price}</p>
    </>
  );
}

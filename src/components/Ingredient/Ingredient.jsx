import React from "react";

export default function Ingredient({ ingredient }) {
  const { name, quantity } = ingredient;
  return (
    <>
      <span>{name}</span>
      <span>{quantity}</span>
    </>
  );
}

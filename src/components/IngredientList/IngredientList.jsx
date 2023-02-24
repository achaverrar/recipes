import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import { v4 as uuidv4 } from "uuid";

export default function IngredientList({ ingredients }) {
  return (
    <div className="ingredients">
      {ingredients.map((ingredient) => {
        return <Ingredient key={uuidv4()} ingredient={ingredient} />;
      })}
    </div>
  );
}

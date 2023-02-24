import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import IngredientList from "../IngredientList/IngredientList";
import "./Recipe.css";

export default function Recipe({ recipe, setIdToEdit }) {
  const { id, title, time, servings, instructions, ingredients } = recipe;
  const { handleDeleteRecipe } = useContext(RecipesContext);
  return (
    <article>
      <header>
        <h2>{title || "Name"}</h2>
        <div className="buttons">
          <button onClick={() => setIdToEdit(id)}>Edit</button>
          <button onClick={() => handleDeleteRecipe(id)}>Delete</button>
        </div>
      </header>
      <section>
        <p>Cooking Time: {time}</p>
        <p>Servings: {servings}</p>
        <div>
          <p>Instructions:</p>
          <div className="instructions">{instructions}</div>
        </div>
        <div>
          Ingredients:
          <br />
          <IngredientList ingredients={ingredients} />
        </div>
      </section>
    </article>
  );
}

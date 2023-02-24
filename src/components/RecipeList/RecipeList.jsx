import React, { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Form from "../Form/Form";
import Recipe from "../Recipe/Recipe";

export default function RecipeList() {
  const { recipes, handleAddRecipe, selectedRecipeId, setSelectedRecipeId } =
    useContext(RecipesContext);
  const [formVisibility, setFormVisibility] = useState(false);
  const selectedRecipe = recipes.filter(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    if (isNaN(selectedRecipeId)) return;
    setFormVisibility(true);
  }, [selectedRecipeId]);

  return (
    <>
      <section>
        {recipes.map((recipe) => (
          <Recipe
            recipe={recipe}
            key={recipe.id}
            setIdToEdit={setSelectedRecipeId}
          />
        ))}
        <button onClick={handleAddRecipe()}>Add recipe</button>
        <section>
          {formVisibility && (
            <Form show={setFormVisibility} recipe={selectedRecipe} />
          )}
        </section>
      </section>
    </>
  );
}

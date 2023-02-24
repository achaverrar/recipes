import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const RecipesContext = createContext();

const sampleRecipes = [
  {
    id: 1,
    title: "Plain Chicken",
    time: "1:45",
    servings: "3",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      { id: 1, name: "Chicken", quantity: "2 Pounds" },
      { id: 2, name: "Salt", quantity: "1 Tbs" },
    ],
  },
  {
    id: 2,
    title: "Plain Pork",
    time: "0:45",
    servings: "5",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      { id: 1, name: "Pork", quantity: "3 Pounds" },
      { id: 2, name: "Paprika", quantity: "2 Tbs" },
    ],
  },
];

export default function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      title: "Name",
      time: "",
      servings: "",
      instructions: "",
      ingredients: [],
    };
    setRecipes(
      (prevRecipes) => [...prevRecipes, newRecipe],
      () => setSelectedRecipeId(newRecipe.id)
    );
  };

  const handleDeleteRecipe = (id) => {
    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => recipe.id !== id);
    });
  };

  const handleEditRecipe = () => {};

  /* const recipesContextValue = {
    recipes,
    setRecipes,
    handleAddRecipe,
    handleDeleteRecipe,
    handleEditRecipe,
    selectedRecipeId,
    setSelectedRecipeId,
  }; */
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        handleAddRecipe,
        handleDeleteRecipe,
        handleEditRecipe,
        selectedRecipeId,
        setSelectedRecipeId,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

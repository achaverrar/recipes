import { useContext } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipesProvider, { RecipesContext } from "./context/RecipesContext";

function App(props) {
  //console.log("Props", props);
  //const { recipesContextValue } = useContext(RecipesContext);
  //console.log("Context", recipesContextValue);
  return (
    <div>
      <RecipesProvider>
        <RecipeList />
      </RecipesProvider>
    </div>
  );
}

export default App;

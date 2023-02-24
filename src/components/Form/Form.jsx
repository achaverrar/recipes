import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";

const Form = ({ show, recipe }) => {
  function handleInput(e) {}
  return (
    <section>
      <button onClick={() => show(false)}>&times;</button>
      <form>
        <div>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            value={recipe.title}
            onInput={handleInput}
          />
        </div>
        <div>
          <label htmlFor="time">Cook Time</label>
          <input type="text" id="time" value={recipe.time} />
        </div>
        <div>
          <label htmlFor="servings">Servings</label>
          <input type="number" id="servings" min={1} value={recipe.servings} />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea type="text" id="instructions" value={recipe.instructions} />
        </div>
        <fieldset>
          <legend>Ingredients</legend>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" />
          <button>x</button>
        </fieldset>
        <input type="button" value="Add ingredient" />
      </form>
    </section>
  );
};

export default Form;

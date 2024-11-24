import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found. Try a different search term!</p>
      )}
    </div>
  );
};

export default RecipeList;

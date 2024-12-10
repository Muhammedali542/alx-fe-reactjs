import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          console.error(`Failed to fetch: ${response.statusText}`);
          setLoading(false);
          return;
        }
        const data = await response.json();
        const foundRecipe = data.find((r) => r.id === parseInt(recipeId, 10));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          console.error(`Recipe with ID ${recipeId} not found.`);
        }
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return <p>Loading recipe...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-md rounded-lg mb-4"
      />
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Cooking Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;

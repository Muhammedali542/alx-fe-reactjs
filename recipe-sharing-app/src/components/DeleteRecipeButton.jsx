import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore((state) => ({
    deleteRecipe: state.deleteRecipe,
  }));

  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // Delete the recipe from the store
      navigate("/"); // Navigate to the home page (or RecipeList page) after deletion
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;

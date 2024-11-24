import React, { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore((state) => ({
    updateRecipe: state.updateRecipe,
  }));

  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  useEffect(() => {
    setFormData({ title: recipe.title, description: recipe.description });
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    // Explicitly prevent the default form submission behavior
    event.preventDefault();
    updateRecipe({ ...recipe, ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

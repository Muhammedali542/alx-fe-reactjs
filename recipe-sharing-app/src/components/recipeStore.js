import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array to hold the IDs of favorite recipes
  recommendations: [], // Array to hold recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) &&
          Math.random() > 0.5 // Mock logic for recommendations
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;

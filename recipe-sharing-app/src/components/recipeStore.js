import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // Original recipe list
  searchTerm: "", // Current search term
  filteredRecipes: [], // Filtered recipe results

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes, // Initialize filteredRecipes with all recipes
    })),
}));

export default useRecipeStore;

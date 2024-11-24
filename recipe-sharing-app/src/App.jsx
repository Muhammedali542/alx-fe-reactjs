import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import useRecipeStore from "./components/recipeStore";

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Mock recipe data
  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "A classic Italian dish.",
      },
      { id: 2, title: "Chicken Curry", description: "Spicy and flavorful." },
      {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "Healthy and quick to make.",
      },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

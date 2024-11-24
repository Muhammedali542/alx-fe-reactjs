import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm"; // Import AddRecipeForm
import RecipeDetails from "./components/RecipeDetails"; // Import RecipeDetails

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />{" "}
          {/* AddRecipeForm route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />{" "}
          {/* RecipeDetails route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

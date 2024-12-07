import React, { useEffect, useState } from "react";
import { use } from "react";

function HomePage() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw Error("Faild to fetch data");
        }

        return res.json();
      })
      .then((data) => {
        setRecipe(data);

        console.log("Fetched data:", recipe);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {recipe.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

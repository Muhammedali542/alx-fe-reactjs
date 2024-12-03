import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link> | <Link to="/blog/1">View Blog Post 1</Link>
      </nav>
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
};

export default App;

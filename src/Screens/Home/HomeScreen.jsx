import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const HomeScreen = () => {
  return (
    <div>
      <div className="header-style">
        <Header />
      </div>
      <Hero />
    </div>
  );
};

export default HomeScreen;

import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Slider from "./components/Slider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Slider />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;

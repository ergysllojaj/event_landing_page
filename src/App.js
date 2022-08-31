import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;

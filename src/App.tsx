import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/header/Header";
import './components/style/style.css'
import Hero from "./components/hero/Hero";
import Platfrom from "./components/platform/Platfrom";
import HowitWorks from "./components/howitWorks/HowitWork";
function App() {
  return (
    <div className="App">
      <Header />
       <Hero />
       <Platfrom />
       <HowitWorks />
    </div>
    
  );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import HomePage from "./components/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navigation from "./components/navigation";
import noise from "./assets/noise.png";
import { color } from "framer-motion";

const Layout = () => {
  const navItems = [
    { text: "Home", color: "bg-gradient-blue" },
    { text: "Menu", color: "bg-gradient-yellow" },
    { text: "Blog", color: "bg-gradient-green" },
  ];
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="App h-screen bg-gradient-blue relative">
      <Navigation
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        navItems={navItems}
        isOpen={true}
      />
      <Outlet /> {/* This will render the component of the matched route */}
      <img
        src={noise}
        alt="Noise Texture"
        className="absolute top-0 left-0 w-full h-full z-[1]"
      />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;

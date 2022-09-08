import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import "./App.css";

function App() {
  return (
    <div className="App  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

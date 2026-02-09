import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

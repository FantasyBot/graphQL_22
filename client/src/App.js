import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      {/* header */}
      <h1>Header...</h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1> '*' Error...</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

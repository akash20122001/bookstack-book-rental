import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FrontPage from "./Pages/FrontPage";
import Home from "./Pages/Home";
import background from "./assets/bg.jpg";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <div className="App " style={{ backgroundImage: `url(${background})` }}>
        <Routes>
          <Route path="/" element={<FrontPage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

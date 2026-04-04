import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Root/Navbar";
import Home from "./Root/Home";
import Admin from "./Product/Admin";
import Create from "./Product/Create";
import List from "./Product/List";
import Update from "./Product/Update";

function App() {
  const [products, setProducts] = useState("ram");

  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
         <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />

          <Route path="/admin" element={<Admin/>} />
          <Route path="/create" element={<Create/>} />
          

          <Route path="/list" element={<List />}/>
          <Route path="/update/:_id" element={<Update/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import {BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import YogaRetreat from "./Components/YogaRetreat";

import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="/yoga-retreat" element={<YogaRetreat />}/>
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Camera from "./Camera";
import Home from "./Home";

const App = () => {
  const [distanceInInches, setDistanceInInches] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/details"
          element={<ProductDetails distanceInInches={distanceInInches} />}
        />
        <Route
          path="/camera"
          element={<Camera setDistanceInInches={setDistanceInInches} />}
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
};

export default App;

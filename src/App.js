import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE } from "./constants/Route";
import { PokeEntry } from "./screens/PokeEntry";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={ROUTE.entry} element={<PokeEntry />} />
        </Routes>
      </Router>
    </>
  );
};

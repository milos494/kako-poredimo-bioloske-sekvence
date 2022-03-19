import React from "react";
import { Route, Routes } from "react-router-dom";
import LCSBacktrackPage from "./pages/LCSBacktrackPage";
import ManhattanPage from "./pages/ManhattanPage";

const App = () => {
  return (
    <Routes>
      <Route path='/manhattan' element={<ManhattanPage />} />
      <Route path='/lcs' element={<LCSBacktrackPage />} />
    </Routes>
  );
};

export default App;

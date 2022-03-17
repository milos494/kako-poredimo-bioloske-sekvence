import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ManhattanPage from './pages/ManhattanPage';

const App = () => {
  return (
    <Routes>
      <Route path="/manhattan" element={<ManhattanPage />} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LCSBacktrackPage from './pages/LCSBacktrackPage';
import ManhattanPage from './pages/ManhattanPage';
import GlobalAlignmentPage from './pages/GlobalAlignmentPage';

import SideBar from './components/SideBar';
import { StyledAppWrapper } from './AppStyles';

const App = () => {
  return (
    <StyledAppWrapper>
      <SideBar />
      <Routes>
        <Route path="/manhattan" element={<ManhattanPage />} />
        <Route path="/lcs" element={<LCSBacktrackPage />} />
        <Route path="/global-alignment" element={<GlobalAlignmentPage />} />
      </Routes>
    </StyledAppWrapper>
  );
};

export default App;

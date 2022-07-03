import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LCSBacktrackPage from './pages/LCSBacktrackPage';
import ManhattanPage from './pages/ManhattanPage';
import GlobalAlignmentPage from './pages/GlobalAlignmentPage';
import LocalAlignmentPage from './pages/LocalAlignmentPage';
import AffineGapPenaltyAlignment from './pages/AffineGapPenaltyAlignmentPage';
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
        <Route path="/local-alignment" element={<LocalAlignmentPage />} />
        <Route path="/affine-gap-penalty-alignment" element={<AffineGapPenaltyAlignment />} />
      </Routes>
    </StyledAppWrapper>
  );
};

export default App;

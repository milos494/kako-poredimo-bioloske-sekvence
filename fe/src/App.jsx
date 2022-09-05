import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LCSBacktrackPage from './pages/LCSBacktrackPage';
import ManhattanPage from './pages/ManhattanPage';
import GlobalAlignmentPage from './pages/GlobalAlignmentPage';
import LocalAlignmentPage from './pages/LocalAlignmentPage';
import AffineGapPenaltyAlignment from './pages/AffineGapPenaltyAlignmentPage';
import SideBar from './components/SideBar';
import { StyledAppWrapper, StyledTitle } from './AppStyles';
import Page404 from './pages/404';

const App = () => {
  return (
    <StyledAppWrapper>
      <SideBar />
      <div>
        <StyledTitle>ALGORITMI ZA PORAVNANJE BIOLOŠKIH SEKVENCI - ELEKTRONSKA LEKCIJA</StyledTitle>
        <Routes>
          <Route path="/manhattan" element={<ManhattanPage />} />
          <Route path="/lcs" element={<LCSBacktrackPage />} />
          <Route path="/globalno-poravnanje" element={<GlobalAlignmentPage />} />
          <Route path="/local-alignment" element={<LocalAlignmentPage />} />
          <Route path="/affine-gap-penalty-alignment" element={<AffineGapPenaltyAlignment />} />
          <Route path="*" exact element={<Page404 />} />
        </Routes>
      </div>
    </StyledAppWrapper>
  );
};

export default App;

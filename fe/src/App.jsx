import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LCSBacktrackPage from './pages/LCSBacktrackPage';
import ManhattanPage from './pages/ManhattanPage';
import GlobalAlignmentPage from './pages/GlobalAlignmentPage';
import LocalAlignmentPage from './pages/LocalAlignmentPage';
import AffineGapPenaltyAlignment from './pages/AffineGapPenaltyAlignmentPage';
import SideBar from './components/SideBar';
import { StyledAppWrapper, StyledGlobalAppWrapper, StyledTitle } from './AppStyles';
import Page404 from './pages/404';
import HomePage from './pages/HomePage';
import AlignmentPage from './pages/AlignmentPage';
import DynamicPage from './pages/DynamicProgramming';
import DAGPage from './pages/DAGPage';
import SpaceImprovementPage from './pages/SpaceImprovementPage';
import MultipleAlignmentPage from './pages/MultipleAlignementPage';

const App = () => {
  return (
    <StyledAppWrapper>
      <SideBar />
      <StyledGlobalAppWrapper>
        <StyledTitle id="pocetak">
          ALGORITMI ZA PORAVNANJE BIOLOŠKIH SEKVENCI - ELEKTRONSKA LEKCIJA
        </StyledTitle>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poravnanje-sekvenci" element={<AlignmentPage />} />
          <Route path="/menhetn-turista" element={<ManhattanPage />} />
          <Route path="/problem-kusura" element={<DynamicPage />} />
          <Route path="/problem-poravnanja" element={<LCSBacktrackPage />} />
          <Route path="/proizvoljni-graf" element={<DAGPage />} />
          <Route path="/globalno-poravnanje" element={<GlobalAlignmentPage />} />
          <Route path="/lokalno-poravnanje" element={<LocalAlignmentPage />} />
          <Route path="/afine-kazne" element={<AffineGapPenaltyAlignment />} />
          <Route path="/prostorna-poboljsanja" element={<SpaceImprovementPage />} />
          <Route path="/visestruko-poravnanje" element={<MultipleAlignmentPage />} />

          <Route path="*" exact element={<Page404 />} />
        </Routes>
      </StyledGlobalAppWrapper>
    </StyledAppWrapper>
  );
};

export default App;

import React from "react";
import { LEADERBOARD_PATH, PRESENTATION_PATH } from "../utils/constants";
import { Routes, Route } from "react-router-dom";
import LeaderboardPage from "../pages/LeaderboardPage";
import PresentationPage from "../pages/PresentationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={LEADERBOARD_PATH} element={<LeaderboardPage />} />
        <Route path={PRESENTATION_PATH} element={<PresentationPage />} />
      </Routes>
    </>
  );
};

export default App;

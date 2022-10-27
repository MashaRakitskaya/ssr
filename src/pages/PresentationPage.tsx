import React from "react";
import { LEADERBOARD_PATH, PRESENTATION_PATH } from "../utils/constants";
import { Link } from "react-router-dom";
const PresentationPage = () => {
  return (
    <>
      <h1>Presentation Page</h1>

      <Link to={LEADERBOARD_PATH}>Go Leaderboard</Link>
    </>
  );
};
export default PresentationPage;

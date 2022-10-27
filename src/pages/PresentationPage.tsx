import React from "react";
import { LEADERBOARD_PATH, PRESENTATION_PATH } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import svg from "../images/power.svg";
const PresentationPage = () => {
  const location = useLocation();
  const isPresentationPathname = location.pathname === PRESENTATION_PATH;

  return (
    <>
      <h1>Presentation Page</h1>
      <Link to={LEADERBOARD_PATH}>Go Leaderboard</Link>
      {isPresentationPathname && <div>useLocation()</div>}
      <img src={svg} width="200" height="200" alt="poverImg" />
    </>
  );
};
export default PresentationPage;

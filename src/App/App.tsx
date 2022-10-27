import React, { useEffect, useState } from "react";
import { LEADERBOARD_PATH, PRESENTATION_PATH } from "../utils/constants";
import { Routes, Route, Link } from "react-router-dom";

const LeaderboardPage = () => {
  const [count, setCount] = useState(6);
  const [loy, setLow] = useState(false);

  console.log("outside useEffect");

  useEffect(() => {
    console.log("inside useEffect");
    if (count > 5) {
      setLow(true);
    }
  }, [count, setLow]);

  return (
    <>
      <h1>Leaderboard Page</h1>
      <Link to={PRESENTATION_PATH}>Presentation of the game</Link>
      <div> Count !: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      {loy && <div>useEffect work</div>}
    </>
  );
};

const PresentationPage = () => (
  <>
    <h1>Presentation Page</h1>

    <Link to={LEADERBOARD_PATH}>Go Leaderboard</Link>
  </>
);

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

import { useState, memo } from "react";
import Ratedstar from "./star-rating/Ratedstar";
import StarsRatings from "./star-rating/StarsRatings";

function App() {
  const [givenRating, setGivenRating] = useState(0);
  const starsGiven = (ratings) => {
    setGivenRating(ratings);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <StarsRatings star_count={5} starsGiven={starsGiven} />
      <Ratedstar rating={givenRating} />
    </div>
  );
}

export default memo(App);

import { useState, memo } from "react";
import Ratedstar from "./star-rating/Ratedstar";
import Stars from "./star-rating/Stars";

function App() {
  const [givenRating, setGivenRating] = useState(0);
  const starsGiven = (ratings) => {
    setGivenRating(ratings);
    console.log(ratings);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Stars star_count={5} starsGiven={starsGiven} />
      <Ratedstar rating={givenRating} />
    </div>
  );
}

export default memo(App);

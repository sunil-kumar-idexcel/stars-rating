import react, { memo } from "react";
const Ratedstar = ({ rating }) => {
  return <p>You have given {rating} ratings.</p>;
};
export default memo(Ratedstar);

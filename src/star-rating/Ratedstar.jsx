import { memo } from "react";
const Ratedstar = ({ rating }) => {
  return <p>You have given {rating} rating(s).</p>;
};
export default memo(Ratedstar);

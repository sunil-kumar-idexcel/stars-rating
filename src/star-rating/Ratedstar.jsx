import { memo } from "react";
import PropTypes from "prop-types";

const Ratedstar = ({ rating }) => {
  return <p>You have given {rating} rating(s).</p>;
};

Ratedstar.propTypes = {
  rating: PropTypes.number,
};
export default memo(Ratedstar);

import { memo } from "react";
import PropTypes from "prop-types";

const Ratedstar = ({ rating }) => {
  return <p> {rating} rating(s).</p>;
};

Ratedstar.propTypes = {
  rating: PropTypes.number,
};
export default memo(Ratedstar);

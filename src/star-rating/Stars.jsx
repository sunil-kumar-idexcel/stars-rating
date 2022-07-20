import { Fragment, useState, memo } from "react";
import PropTypes from "prop-types";

const Stars = ({ star_count, starsGiven }) => {
  const [ratings, setRating] = useState(-1);

  return (
    <Fragment>
      {[...Array(star_count)].map((item, index) => {
        return (
          <span
            key={index}
            className={`px-2 my-4 d-inline-block ${
              index <= ratings ? "text-warning" : "text-secondary opacity-25"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setRating(index);
              starsGiven(index + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
        );
      })}
    </Fragment>
  );
};

Stars.propTypes = {
  star_count: PropTypes.number,
  starsGiven: PropTypes.func,
};
export default memo(Stars);

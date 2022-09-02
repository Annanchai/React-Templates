import React from "react";
import { BsStarFill } from "react-icons/bs";
import "../Styles/Rating.css";

const Rating = ({
  rate,
  starUnclick1,
  starUnClick2,
  starClick2,
  starUnClick3,
  starClick3,
  starUnClick4,
  starClick4,
  starUnClick5,
  starClick5,
}) => {
  return (
    <div className="rating d-flex gap-2">
      {rate >= 1 ? (
        <BsStarFill
          onClick={starUnclick1}
          className="star active cursor-pointer"
        />
      ) : (
        <BsStarFill className="star cursor-pointer" />
      )}
      {rate >= 2 ? (
        <BsStarFill
          onClick={starUnClick2}
          className="star active cursor-pointer"
        />
      ) : (
        <BsStarFill onClick={starClick2} className="star cursor-pointer" />
      )}
      {rate >= 3 ? (
        <BsStarFill
          onClick={starUnClick3}
          className="star active cursor-pointer"
        />
      ) : (
        <BsStarFill onClick={starClick3} className="star cursor-pointer" />
      )}
      {rate >= 4 ? (
        <BsStarFill
          onClick={starUnClick4}
          className="star active cursor-pointer"
        />
      ) : (
        <BsStarFill onClick={starClick4} className="star cursor-pointer" />
      )}
      {rate >= 5 ? (
        <BsStarFill
          onClick={starUnClick5}
          className="star active cursor-pointer"
        />
      ) : (
        <BsStarFill onClick={starClick5} className="star cursor-pointer" />
      )}
    </div>
  );
};

export default Rating;

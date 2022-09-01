import React from "react";
import "../Styles/Counter.css";

export const Counter = ({ dec, count, inc }) => {
  return (
    <div className="counterContainer pt-2 pb-2 ps-3 pe-3 d-flex gap-3 justify-content-center align-items-center">
      <p onClick={dec}>-</p>
      <p>{count}</p>
      <p onClick={inc}>+</p>
    </div>
  );
};

export const dec = (count, setCount) => {
  if (count === 1) {
    return count;
  } else {
    setCount(count - 1);
  }
};
export const inc = (count, setCount) => {
  setCount(count + 1);
};

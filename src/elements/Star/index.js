import React from "react";

import propTypes from "prop-types";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, width: width, marginRight: spacing }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: leftPos, width: width - spacing }}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star placeholder"
        key={`star-${index}`}
        style={{ left: index * width, width: width, marginRight: spacing }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["start", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};

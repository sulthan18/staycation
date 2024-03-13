import React from "react";
import propTypes from "prop-types";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftpos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftpos = leftpos + width;
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{ left: i * width, width: width, marginRight: spacing }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{ left: leftpos, width: width - spacing }}
      ></div>
    );

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    leftpos = leftpos + width;
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${i}`}
        style={{ left: i * width, width: width, marginRight: spacing }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
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

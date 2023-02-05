import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
  ...props
}) {
  // const [selectedStar, setSelectedStars] = useState(0);

  // const handleSelected = (index) => {
  //   setSelectedStars(index + 1);
  // };

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          // onSelect={() => handleSelected(i)}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {" "}
        {selectedStars} of {totalStars} star selected{" "}
      </p>
    </div>
  );
}

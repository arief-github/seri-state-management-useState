import React, { useState } from "react";
import "./styles.css";
import StarRating from "./components/StarRating";
import ColorList from "./components/ColorList";
import colorData from "./data/color-data.json";

export default function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <div className="App">
      <h1>Learning State Management</h1>
      <h2>Star Rating</h2>
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => {
          alert("you clicked me twice");
        }}
      />
      <hr />
      <h2>Color List</h2>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const filteredColors = colors.filter((color) => color.id !== id);
          setColors(filteredColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </div>
  );
}

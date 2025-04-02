import React from "react";

const NumberSelector = ({ onSelect }) => {
  return (
    <div className="selector-container">
      <label>select number type:</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="p">Prime</option>
        <option value="f">Fib</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
    </div>
  );
};

export default NumberSelector;

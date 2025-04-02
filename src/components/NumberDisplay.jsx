import React from "react";

const NumberDisplay = ({ data }) => {
  if (!data) return <p>No data is found!</p>;

  return (
    <div className="results">
      <p><strong>previous Window:</strong> {JSON.stringify(data.windowPrevState)}</p>
      <p><strong>current Window:</strong> {JSON.stringify(data.windowCurrState)}</p>
      <p><strong>fetched Numbers:</strong> {JSON.stringify(data.numbers)}</p>
      <p><strong>average:</strong> {data.avg}</p>
    </div>
  );
};

export default NumberDisplay;

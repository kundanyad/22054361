import React, { useState } from "react";
import axios from "axios";
import NumberSelector from "./components/NumberSelector";
import NumberDisplay from "./components/NumberDisplay";
import "./App.css"
// code

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNumbers = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${type}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Average Calci</h1>
      <NumberSelector onSelect={fetchNumbers} />
      {loading ? <p>Loading...</p> : <NumberDisplay data={data} />}
    </div>
  );
};

export default App;

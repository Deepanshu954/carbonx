import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bot() {
  const [state, setState] = useState('');
  const [mines, setMines] = useState([]);
  const [selectedMine, setSelectedMine] = useState('');
  const [mineDetails, setMineDetails] = useState(null);

  const handleStateChange = async (e) => {
    setState(e.target.value);
    const response = await axios.get(`http://localhost:5000/api/mines/${e.target.value}`);
    setMines(response.data);
  };

  const handleMineSelect = async (e) => {
    setSelectedMine(e.target.value);
    const response = await axios.get(`http://localhost:5000/api/mines/${state}/${e.target.value}`);
    setMineDetails(response.data);
  };

  return (
    <div>
      <h2>CarbonX Bot</h2>
      <div>
        <label>Select State: </label>
        <select value={state} onChange={handleStateChange}>
          <option value="">Select a state</option>
          <option value="State1">State1</option>
          <option value="State2">State2</option>
          {/* Add more states as needed */}
        </select>
      </div>
      {mines.length > 0 && (
        <div>
          <label>Select Mine: </label>
          <select value={selectedMine} onChange={handleMineSelect}>
            <option value="">Select a mine</option>
            {mines.map((mine) => (
              <option key={mine._id} value={mine.name}>{mine.name}</option>
            ))}
          </select>
        </div>
      )}
      {mineDetails && (
        <div>
          <h3>Mine Details</h3>
          <p>Name: {mineDetails.name}</p>
          <p>Location: {mineDetails.location}</p>
          <p>Carbon Emissions: {mineDetails.carbonEmissions} tons</p>
          <p>Production Capacity: {mineDetails.productionCapacity} tons</p>
        </div>
      )}
    </div>
  );
}

export default Bot;

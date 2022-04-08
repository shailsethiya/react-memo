import React, { useState, useMemo } from 'react';
import './App.css'


const randomNumbers = Array.from({length: 10000} , () => Math.random(1));

function App() {
  const [clicks, setClicks] = useState(0);
  const [filter, setFilter] = useState('');

  const filteredList = useMemo(
    () => randomNumbers.filter((it) => it.toString().includes(filter)),
    [filter]
  );

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={() => setClicks((prev) =>  prev + 1)} >
        click
      </button>
      {clicks}
      <input
        placeholder='filter value'
        onChange={handleFilter}
        value={filter}
      />
      <ul>
        {filteredList.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
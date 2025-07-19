import React, { useState } from 'react';

function Filter() {
  const [search, setSearch] = useState('');
  const names = ['Aman', 'Priya', 'Ravi', 'Sneha', 'Rohit','Nisha'];

  const filtered = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🔍 Filter Names</h2>
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;

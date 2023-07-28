import React, { useState } from 'react';
import SearchBox from './serchbox';

const Box = () => {
  const initialData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grapes',
    'Kiwi',
    'Mango',
    'Orange',
    'Peach',
    'Pear'
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <h1>Search Example</h1>
      <SearchBox data={initialData} onSearch={handleSearch} />

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Box;

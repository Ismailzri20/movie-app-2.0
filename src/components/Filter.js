import React from 'react';

const Filter = ({ title, rating, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={e => onFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={e => onFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;

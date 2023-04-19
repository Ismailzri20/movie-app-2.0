import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]); // State to store movies
  const [filterTitle, setFilterTitle] = useState(''); // State to store filter by title value
  const [filterRating, setFilterRating] = useState(''); // State to store filter by rating value

  // Function to add a new movie
  const handleAddMovie = (title, description, posterURL, rating) => {
    const newMovie = {
      id: new Date().getTime(), // Generate a unique ID (for demo purposes only)
      title,
      description,
      posterURL,
      rating
    };
    setMovies([...movies, newMovie]); // Add the new movie to the movies state
  };

  // Function to handle filter changes
  const handleFilterChange = (type, value) => {
    if (type === 'title') {
      setFilterTitle(value); // Update the filter by title value
    } else if (type === 'rating') {
      setFilterRating(value); // Update the filter by rating value
    }
  };

  // Filter movies based on filterTitle and filterRating values
  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <div>
      <h1>Movie App</h1>
      <Filter
        title={filterTitle}
        rating={filterRating}
        onFilterChange={handleFilterChange}
      />
      <MovieList movies={filteredMovies} />
      {/* Render MovieCard components based on filteredMovies */}
    </div>
  );
};

export default App;

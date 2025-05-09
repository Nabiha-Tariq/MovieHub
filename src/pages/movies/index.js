import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
        const res = await fetch(`http://localhost:3000/api/movies`); 
      const data = await res.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;

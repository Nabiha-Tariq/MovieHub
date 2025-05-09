// pages/genres/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GenreDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchMoviesByGenre = async () => {
        const res = await fetch(`/api/genres/${id}/movies`);
        const data = await res.json();
        setMovies(data);
      };

      fetchMoviesByGenre();
    }
  }, [id]);

  if (!movies.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Movies in this Genre</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreDetailPage;

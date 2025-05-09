// src/pages/movies/[id]/director.js
import { useRouter } from 'next/router';
import Link from 'next/link';

const MovieDirectorPage = ({ director }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Director: {director.name}</h1>
      <p>{director.bio}</p>
      <h2>Other Movies Directed:</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie._id}>
            <Link href={`/movies/${movie._id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetch the director's information based on the movie's director ID
export const getStaticPaths = async () => {
  const res = await fetch('/api/movies');
  const movies = await res.json();

  // Generate paths for each movie and its director page
  const paths = movies.map((movie) => ({
    params: { id: movie._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  // Fetch the movie and its director
  const movieRes = await fetch(`/api/movies/${params.id}`);
  const movie = await movieRes.json();

  // Fetch the director's details using the directorId from the movie
  const directorRes = await fetch(`/api/directors/${movie.directorId}`);
  const director = await directorRes.json();

  return {
    props: {
      director,
    },
  };
};

export default MovieDirectorPage;

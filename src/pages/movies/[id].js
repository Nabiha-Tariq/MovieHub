import { useRouter } from 'next/router';

const MovieDetailPage = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/movies');
  const movies = await res.json();

  const paths = movies.map(movie => ({
    params: { id: movie._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/movies/${params.id}`); 
  const movie = await res.json();

  return { props: { movie } };
};

export default MovieDetailPage;

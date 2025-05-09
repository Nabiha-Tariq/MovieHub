// src/pages/directors/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Fetch and display director details
const DirectorPage = ({ director }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{director.name}</h1>
      <p>{director.bio}</p>
      <h2>Movies Directed:</h2>
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

// Fetch the list of directors to generate static paths
export const getStaticPaths = async () => {
  // Fetch all directors from your API
  const res = await fetch('http://localhost:3000/api/directors');
  const directors = await res.json();

  const paths = directors.map(director => ({
    params: { id: director._id }, // assuming the director ID is _id
  }));

  return { paths, fallback: true };
};

// Fetch director data based on the movie's directorId
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/directors/${params.id}`);
  const director = await res.json();

  return { props: { director } };
};

export default DirectorPage;

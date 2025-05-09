import MovieCard from '@/components/MovieCard.jsx';

export default function Home({ movies }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
          onClick={() => window.location.href = '/genres'}
        >
          Browse Genres
        </button>
      </div>
    </div>
  );
}

import dbConnect from '@/lib/dbconnect';
import Movie from '@/models/Movie';

export async function getStaticProps() {
  await dbConnect();
  const movies = await Movie.find().limit(6).lean();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
    revalidate: 60,
  };
}

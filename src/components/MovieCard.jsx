import Link from 'next/link';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">{movie.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Rating: {movie.rating}</p>
        <Link href={`/movies/${movie._id}`} className="text-pink-600 dark:text-pink-400">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;

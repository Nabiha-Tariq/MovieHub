// pages/genres/index.js
import Link from 'next/link';
import { useEffect, useState } from 'react';

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch('/api/genres');
      const data = await res.json();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold text-purple-600 dark:text-pink-400'>Genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre._id}>
            <Link href={`/genres/${genre._id}`}>
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;

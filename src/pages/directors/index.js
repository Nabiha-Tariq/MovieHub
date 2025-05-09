// src/pages/directors/index.js
import { useEffect, useState } from 'react';
import Link from 'next/link';

const DirectorsPage = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetching the list of directors from the API
    const fetchDirectors = async () => {
      const res = await fetch('/api/directors');
      const data = await res.json();
      setDirectors(data);
    };
    fetchDirectors();
  }, []);

  return (
    <div>
      <h1>Directors</h1>
      <ul>
        {directors.map(director => (
          <li key={director._id}>
            <Link href={`/directors/${director._id}`}>
              {director.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectorsPage;

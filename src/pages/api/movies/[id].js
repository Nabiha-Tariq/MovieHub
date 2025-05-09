// /pages/api/movies/[id].js
import dbConnect from '@/lib/dbconnect';
import Movie from '@/models/Movie';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const movie = await Movie.findById(id);
      if (!movie) return res.status(404).json({ error: 'Movie not found' });
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movie details' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

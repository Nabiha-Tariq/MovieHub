// /pages/api/movies/index.js
import dbConnect from '@/lib/dbconnect';
import Movie from '@/models/Movie';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const movies = await Movie.find({});
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

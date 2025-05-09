// /pages/api/directors/[id].js
import dbConnect from '@/lib/dbconnect';
import Director from '@/models/Director';
import Movie from '@/models/Movie';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const director = await Director.findById(id);
      if (!director) return res.status(404).json({ error: 'Director not found' });

      const movies = await Movie.find({ directorId: id });

      res.status(200).json({ ...director._doc, movies });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch director and their movies' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

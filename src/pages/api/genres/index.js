// /pages/api/genres/index.js
import dbConnect from '@/lib/dbconnect';
import Genre from '@/models/Genre';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const genres = await Genre.find({});
      res.status(200).json(genres);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch genres' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

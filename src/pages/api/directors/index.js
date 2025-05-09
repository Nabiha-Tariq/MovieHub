// /pages/api/directors/index.js
import dbConnect from '@/lib/dbconnect';
import Director from '@/models/Director';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const directors = await Director.find({});
      res.status(200).json(directors);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch directors' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

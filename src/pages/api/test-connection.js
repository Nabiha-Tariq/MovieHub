// pages/api/test-connection.js

import dbConnect from '../../lib/dbconnect';

export default async function handler(req, res) {
  try {
    // Try connecting to the database
    await dbConnect();
    res.status(200).json({ message: 'Databasee connected successffully!' });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed', error: error.message });
  }
}

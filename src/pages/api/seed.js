// src/pages/api/seed.js
import dbConnect from '../../lib/dbconnect';
import Genre from '../../models/Genre';
import Director from '../../models/Director';
import Movie from '../../models/Movie';

const seedData = async () => {
  await dbConnect();

  // Seed genres
  const genres = [
    { name: "Science Fiction" },
    { name: "Adventure" },
    { name: "Drama" },
    { name: "Thriller" }
  ];
  
  const genreDocs = await Genre.insertMany(genres);

  // Seed directors
  const directors = [
    { name: "Christopher Nolan", biography: "British-American director known for complex storytelling and visual innovation." },
    { name: "Baz Luhrmann", biography: "Australian director known for visually extravagant films like Moulin Rouge! and The Great Gatsby." },
    { name: "Bong Joon-ho", biography: "South Korean filmmaker acclaimed for combining drama, social commentary, and thrills." },
    { name: "The Wachowskis", biography: "Sibling duo behind groundbreaking sci-fi films including The Matrix trilogy." },
    { name: "Damien Chazelle", biography: "American director known for musical dramas like Whiplash and La La Land." }
  ];

  const directorDocs = await Director.insertMany(directors);

  // Seed movies
  const movies = [
    { title: "Inception", description: "A mind-bending thriller about dreams within dreams.", releaseYear: 2010, rating: 8.8, genreId: genreDocs[0]._id, directorId: directorDocs[0]._id },
    { title: "The Great Gatsby", description: "A mysterious millionaire throws lavish parties in 1920s New York.", releaseYear: 2013, rating: 7.2, genreId: genreDocs[2]._id, directorId: directorDocs[1]._id },
    { title: "Interstellar", description: "A team of explorers travel through a wormhole in space.", releaseYear: 2014, rating: 8.6, genreId: genreDocs[1]._id, directorId: directorDocs[0]._id },
    { title: "Parasite", description: "A poor family schemes to become employed by a wealthy household.", releaseYear: 2019, rating: 8.6, genreId: genreDocs[3]._id, directorId: directorDocs[2]._id },
    { title: "The Matrix", description: "A hacker discovers the reality he lives in is a simulation.", releaseYear: 1999, rating: 8.7, genreId: genreDocs[0]._id, directorId: directorDocs[3]._id },
    { title: "La La Land", description: "A jazz musician and an aspiring actress fall in love in Los Angeles.", releaseYear: 2016, rating: 8.0, genreId: genreDocs[2]._id, directorId: directorDocs[4]._id }
  ];

  await Movie.insertMany(movies);

  console.log("Data seeded successfully");
};

export default async function handler(req, res) {
  try {
    await seedData();
    res.status(200).json({ message: 'Data seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to seed data' });
  }
}

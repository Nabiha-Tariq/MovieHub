// src/models/Movie.js
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  },
  directorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  }
});

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);

// src/models/Genre.js
import mongoose from 'mongoose';

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.models.Genre || mongoose.model('Genre', genreSchema);

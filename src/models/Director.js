// src/models/Director.js
import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  }
});

export default mongoose.models.Director || mongoose.model('Director', directorSchema);

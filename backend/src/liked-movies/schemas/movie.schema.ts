import { Schema } from 'mongoose';

export const MovieSchema = new Schema({
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  imdbID: { type: String, required: true },
  Type: { type: String, required: true },
  Poster: { type: String, required: true },
});
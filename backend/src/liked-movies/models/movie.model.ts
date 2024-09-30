// models/movie.model.ts
import { model } from 'mongoose';
import { Movie } from '../interfaces/movie.interface';
import { MovieSchema } from '../schemas/movie.schema'

export const MovieModel = model<Movie>('Movie', MovieSchema);

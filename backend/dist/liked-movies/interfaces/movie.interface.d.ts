import { Document } from 'mongoose';
export interface Movie extends Document {
    title: string;
    year: number;
    imdbID: string;
    type: string;
    poster: string;
}

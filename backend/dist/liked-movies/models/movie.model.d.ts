import { Movie } from '../interfaces/movie.interface';
export declare const MovieModel: import("mongoose").Model<Movie, {}, {}, {}, import("mongoose").Document<unknown, {}, Movie> & Movie & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>;

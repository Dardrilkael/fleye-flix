import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';
import { Model } from 'mongoose';
import { Movie } from "./interfaces/movie.interface";
export declare class LikedMoviesService {
    private readonly movieModel;
    constructor(movieModel: Model<Movie>);
    create(createLikedMovieDto: CreateLikedMovieDto): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Movie> & Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateLikedMovieDto: UpdateLikedMovieDto): string;
    findMovieByImdbId(imdbid: string): Promise<import("mongoose").Document<unknown, {}, Movie> & Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    removeMovieByImdbId(imdbid: string): Promise<import("mongodb").DeleteResult>;
    remove(id: string): Promise<void>;
}

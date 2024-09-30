import { LikedMoviesService } from './liked-movies.service';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';
export declare class LikedMoviesController {
    private readonly likedMoviesService;
    constructor(likedMoviesService: LikedMoviesService);
    create(createLikedMovieDto: CreateLikedMovieDto): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/movie.interface").Movie> & import("./interfaces/movie.interface").Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./interfaces/movie.interface").Movie> & import("./interfaces/movie.interface").Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getMovieByImdbId(imdbID: string): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/movie.interface").Movie> & import("./interfaces/movie.interface").Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/movie.interface").Movie> & import("./interfaces/movie.interface").Movie & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateLikedMovieDto: UpdateLikedMovieDto): string;
    removeMovieByImdbId(imdbID: string): Promise<void>;
    remove(id: string): Promise<void>;
}

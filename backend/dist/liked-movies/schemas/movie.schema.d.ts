import { Schema } from 'mongoose';
export declare const MovieSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}>> & import("mongoose").FlatRecord<{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;

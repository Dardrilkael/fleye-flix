import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateLikedMovieDto  {
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsInt()
    year: number;
  
    @IsNotEmpty()
    @IsString()
    imdbID: string;
  
    @IsNotEmpty()
    @IsString()
    type: string;
  
    @IsNotEmpty()
    @IsString()
    poster: string;
  }

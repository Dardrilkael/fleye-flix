import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateLikedMovieDto  {
    @IsNotEmpty()
    @IsString()
    Title: string;
  
    @IsNotEmpty()
    @IsString()
    Year: string;
  
    @IsNotEmpty()
    @IsString()
    imdbID: string;
  
    @IsNotEmpty()
    @IsString()
    Type: string;
  
    @IsNotEmpty()
    @IsString()
    Poster: string;
  }

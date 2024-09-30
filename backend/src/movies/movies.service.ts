import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return `This action returns all movies`;
  }

  async findOne(movieName: string) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=925eba28&s=${movieName}`);
      if (!response.ok) 
        throw new Error(`Error fetching data: ${response.statusText}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch movie data'); // You can customize this message
    }
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}

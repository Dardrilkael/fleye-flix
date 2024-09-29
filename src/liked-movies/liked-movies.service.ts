import { Injectable } from '@nestjs/common';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';

@Injectable()
export class LikedMoviesService {
  create(createLikedMovieDto: CreateLikedMovieDto) {
    return createLikedMovieDto;
  }

  findAll() {
    return `This action returns all likedMovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likedMovie`;
  }

  update(id: number, updateLikedMovieDto: UpdateLikedMovieDto) {
    return `This action updates a #${id} likedMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} likedMovie`;
  }
}

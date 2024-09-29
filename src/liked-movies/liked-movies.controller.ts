import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { LikedMoviesService } from './liked-movies.service';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';

@Controller('liked-movies')
export class LikedMoviesController {
  constructor(private readonly likedMoviesService: LikedMoviesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createLikedMovieDto: CreateLikedMovieDto) {
    return this.likedMoviesService.create(createLikedMovieDto);
  }

  @Get()
  findAll() {
    return this.likedMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikedMovieDto: UpdateLikedMovieDto) {
    return this.likedMoviesService.update(+id, updateLikedMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likedMoviesService.remove(+id);
  }
}

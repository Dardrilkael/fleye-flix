import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { LikedMoviesService } from './liked-movies.service';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';
import { error } from 'console';

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



  @Get('by-imdbid')
  async getMovieByImdbId(@Query('imdbid') imdbID: string) {
    
    const movie = await this.likedMoviesService.findMovieByImdbId(imdbID);
    return movie;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedMoviesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikedMovieDto: UpdateLikedMovieDto) {
    return this.likedMoviesService.update(id, updateLikedMovieDto);
  }

  @Delete('by-imdbid')
  async removeMovieByImdbId(@Query('imdbid') imdbID: string) {
    await this.likedMoviesService.removeMovieByImdbId(imdbID);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.likedMoviesService.remove(id);
  }
}

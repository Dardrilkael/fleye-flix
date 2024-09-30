import { Injectable } from '@nestjs/common';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { UpdateLikedMovieDto } from './dto/update-liked-movie.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Movie} from "./interfaces/movie.interface"
import { error } from 'console';

@Injectable()
export class LikedMoviesService {

  constructor(@InjectModel("Movie") private readonly movieModel: Model<Movie>){

  }

  async create(createLikedMovieDto: CreateLikedMovieDto) {
    const newMovie = new this.movieModel(createLikedMovieDto);
    return await newMovie.save(); // Save to the database
  }

  async findAll() {
    return await this.movieModel.find().exec();
  }

  async findOne(id: string) {
    const movie = await this.movieModel.findById(id).exec();
    if (!movie) {
      throw new error(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  update(id: string, updateLikedMovieDto: UpdateLikedMovieDto) {
    return `This action updates a #${id} likedMovie`;
  }

  async findMovieByImdbId(imdbid: string) {
    
    try {
      let movie = await this.movieModel.findOne( { imdbID: imdbid });
      return movie;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error; 
    }
  }

  async removeMovieByImdbId(imdbid: string) {
    
    try {
      let movie = await this.movieModel.deleteOne( { imdbID: imdbid });
      return movie;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error; 
    }
  }

  async remove(id: string) {
    const result = await this.movieModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new error(`Movie with ID ${id} not found`);
    }
  }
}

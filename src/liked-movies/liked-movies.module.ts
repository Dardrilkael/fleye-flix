import { Module } from '@nestjs/common';
import { LikedMoviesService } from './liked-movies.service';
import { LikedMoviesController } from './liked-movies.controller';

@Module({
  controllers: [LikedMoviesController],
  providers: [LikedMoviesService],
})
export class LikedMoviesModule {}

import { Module } from '@nestjs/common';
import { LikedMoviesService } from './liked-movies.service';
import { LikedMoviesController } from './liked-movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './schemas/movie.schema';

@Module({
  controllers: [LikedMoviesController],
  providers: [LikedMoviesService],
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
  ],
})
export class LikedMoviesModule {}

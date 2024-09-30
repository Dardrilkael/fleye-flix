import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikedMoviesModule } from './liked-movies/liked-movies.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [LikedMoviesModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

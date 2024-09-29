import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikedMoviesModule } from './liked-movies/liked-movies.module';

@Module({
  imports: [LikedMoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

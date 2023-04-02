import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsfeedController } from './newsfeed.controller';
import { NewsfeedService } from './newsfeed.service';
import {NewsFeed} from "./models/entities/models.entity";
import {Repository} from "typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [NewsFeed]
    )
  ],
  controllers: [NewsfeedController],
  providers: [NewsfeedService,Repository],
  exports: [NewsfeedService]
})

export class NewsfeedModule {}

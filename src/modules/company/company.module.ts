import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import {Repository} from "typeorm";
import {NewsFeed} from "../newsfeed/models/entities/models.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [NewsFeed]
    )
  ],
  controllers: [CompanyController],
  providers: [CompanyService,Repository],
  exports: [CompanyService]
})

export class CompanyModule {}

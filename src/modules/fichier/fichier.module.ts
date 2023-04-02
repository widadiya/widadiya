import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FichierController } from './fichier.controller';
import { FichierService } from './fichier.service';
import {Repository} from "typeorm";
import {Fichier} from "./models/entities/fichier.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Fichier]
    )
  ],
  controllers: [FichierController],
  providers: [FichierService,Repository],
  exports: [FichierService]
})

export class FichierModule {}

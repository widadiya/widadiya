import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import {IsDate} from "class-validator";
import {NewsFeed} from "../../../newsfeed/models/entities/models.entity";
import {Fichier} from "../../../fichier/models/entities/fichier.entity";
import {User} from "../../../user/models/entities/user.entity";


@Entity()
export class Company extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    ville: string;

    @ApiProperty()
    @Column()
    residence: string;

    // @OneToMany(() => NewsFeed, (newsFeed) => newsFeed.company)
    // newsFeed: NewsFeed[]
    //
    // @OneToMany(() => Fichier, (fichier) => fichier.company)
    // fichier: Fichier[]
    //
    // @OneToMany(() => User, (User) => newsFeed.company)
    // newsFeed: User[]

}

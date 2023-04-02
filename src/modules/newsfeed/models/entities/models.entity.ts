import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import {IsDate} from "class-validator";
import {Company} from "../../../company/models/entities/company.entity";


@Entity()
export class NewsFeed extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    content: string;

    @ApiProperty()
    @Column()
    @CreateDateColumn()
    date: Date;

    @Column()
    imagePath: string;

    @Column()
    groupRef: string;

    // @ManyToOne(() => Company, (company) => company.newsFeed)
    // company: Company

}

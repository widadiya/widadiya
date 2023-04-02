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
import {Company} from "../../../company/models/entities/company.entity";


@Entity()
export class Fichier extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    label: string;

    @Column()
    category:string

    @Column()
    size: string;

    // @ManyToOne(() => Company, (company) => company.fichier)
    // company: Company

    @Column()
    mimetype: string;

    @Column()
    groupRef: string;

    @CreateDateColumn()
    dateCreated: Date;


}

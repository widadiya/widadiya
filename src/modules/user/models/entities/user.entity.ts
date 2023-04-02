import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

import { UserRole } from 'src/enums/role.enum';
import { Exclude } from 'class-transformer';
import {Company} from "../../../company/models/entities/company.entity";

@Entity()
export class User extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column({ unique:true })
    email: string;

    @Exclude({ toPlainOnly: true })
    @Column()
    password: string;

    @ApiProperty()
    // @Exclude({ toPlainOnly: true })
    @Column({ type: "enum", enum: UserRole, default: UserRole.USERN })
    role: UserRole;

    // @ManyToOne(() => Company, (company) => company.user)
    // company: Company

    @Column()
    groupRef: string;

    @ApiProperty()
    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    echu: number;

    @Column()
    regle: number;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

}

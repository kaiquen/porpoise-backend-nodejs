import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserModel } from "../../../domain/repositories/user-repository";

@Entity({name:"user"})
export class UserEntity implements UserModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false, unique:true})
    cpf: string;

    @Column({type:"date"})
    birth: Date;

    @Column({nullable: true, unique:true})
    phone: string;

    @Column({nullable: false, unique:true})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false, default: false})
    deleted: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
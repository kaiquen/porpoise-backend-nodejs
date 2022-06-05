import { User } from "../entities/user";

export interface UserModel {
    id: string;
    name: string;
    cpf: string;
    birth: Date;
    phone: string;

    email: string;
    password: string;

    deleted: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface UserRepository {
    create(user: User):Promise<UserModel>
}
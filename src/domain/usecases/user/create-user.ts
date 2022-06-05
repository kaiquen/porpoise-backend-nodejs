import { User } from "../../entities/user";
import { UserModel } from "../../repositories/user-repository";

export interface CreateUser {
    create(user:User):Promise<UserModel>
}
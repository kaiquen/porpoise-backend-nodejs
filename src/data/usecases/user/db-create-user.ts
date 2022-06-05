import { User } from "../../../domain/entities/user";
import { UserModel, UserRepository } from "../../../domain/repositories/user-repository";
import { CreateUser } from "../../../domain/usecases/user/create-user";

export class DbCreateUser implements CreateUser {
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async create(user: User): Promise<UserModel> {
        const data = await this.userRepository.create(user);
        return data;
    }
}
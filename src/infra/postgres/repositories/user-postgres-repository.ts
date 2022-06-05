import { User } from "../../../domain/entities/user";
import { UserEntity } from "../entities/user-entity";
import { UserModel, UserRepository } from "../../../domain/repositories/user-repository";

import { connection } from "../../../main/server";
import { EmailAlreadyExistsValidatorAdapter } from "../../../utils/validation/user/email-already-exists-validator-adapter";

export class UserPostgresRepository implements UserRepository {

    private readonly repository = connection.getRepository(UserEntity)

    async create(user: User): Promise<UserModel> {
        const create_user = this.repository.create(user);
        const data = await this.repository.save(create_user);
        return data;
    }
}
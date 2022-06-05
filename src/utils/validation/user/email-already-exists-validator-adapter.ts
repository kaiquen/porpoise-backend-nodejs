import { UserEntity } from "../../../infra/postgres/entities/user-entity";
import { connection } from "../../../main/server";
import { EmailAlreadyExistsValidator } from "../../../presentation/protocols/validation/user/email-already-exists-validator";

export class EmailAlreadyExistsValidatorAdapter implements EmailAlreadyExistsValidator {
    private readonly repository = connection.getRepository(UserEntity);
    async emailExists(email: string): Promise<boolean> {
        const user = await this.repository.findOne({where: {email: email}});
        return user ? true : false;
    }
}
import { UserEntity } from "../../../infra/postgres/entities/user-entity";
import { connection } from "../../../main/server";
import { PhoneAlreadyExistsValidator } from "../../../presentation/protocols/validation/user/phone-already-exists-validator";

export class PhoneAlreadyExistsValidatorAdapter implements PhoneAlreadyExistsValidator {
    private readonly repository = connection.getRepository(UserEntity);
    async phoneExists(phone: string): Promise<boolean> {
        const user = await this.repository.findOne({where: {phone: phone}});
        return user ? true : false;
    }
}
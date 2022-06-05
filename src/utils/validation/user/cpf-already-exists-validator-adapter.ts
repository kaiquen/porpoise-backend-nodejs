import { UserEntity } from "../../../infra/postgres/entities/user-entity";
import { connection } from "../../../main/server";
import { CpfAlreadyExistsValidator } from "../../../presentation/protocols/validation/user/cpf-already-exists-validator";

export class CpfAlreadyExistsValidatorAdapter implements CpfAlreadyExistsValidator {
    private readonly repository = connection.getRepository(UserEntity);
    async cpfExists(cpf: string): Promise<boolean> {
        const user = await this.repository.findOne({where: {cpf: cpf}});
        return user ? true : false;
    }
}
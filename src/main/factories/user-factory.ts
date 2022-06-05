import { DbCreateUser } from "../../data/usecases/user/db-create-user";
import { UserPostgresRepository } from "../../infra/postgres/repositories/user-postgres-repository";
import { UserController } from "../../presentation/controller/user-controller";
import { CpfValidatorAdapter } from "../../utils/validation/cpf-validator-adapter";
import { DateValidatorAdapter } from "../../utils/validation/date-validator-adapter";
import { EmailValidatorAdapter } from "../../utils/validation/email-validator-adapter";
import { InvalidObjectValidatorAdapter } from "../../utils/validation/invalid-object-validator-adapter";
import { MissingObjectValidatorAdapter } from "../../utils/validation/missing-object-validator-adapter";
import { PasswordValidatorAdapter } from "../../utils/validation/password-validator-adapter";
import { PhoneValidatorAdapter } from "../../utils/validation/phone-validator-adapter";
import { TextValidatorAdapter } from "../../utils/validation/text-validator-adapter";
import { CpfAlreadyExistsValidatorAdapter } from "../../utils/validation/user/cpf-already-exists-validator-adapter";
import { EmailAlreadyExistsValidatorAdapter } from "../../utils/validation/user/email-already-exists-validator-adapter";
import { PhoneAlreadyExistsValidatorAdapter } from "../../utils/validation/user/phone-already-exists-validator-adapter";

export const makeUser = ():UserController => {
    const repository = new UserPostgresRepository();

    const createUser = new DbCreateUser(repository);

    const phoneAlreadyExists = new PhoneAlreadyExistsValidatorAdapter();
    const emailAlreadyExists = new EmailAlreadyExistsValidatorAdapter();
    const cpfAlreadyExists = new CpfAlreadyExistsValidatorAdapter();
    const missingObjectValidator = new MissingObjectValidatorAdapter();

    const emailValidator = new EmailValidatorAdapter();
    const phoneValidator = new PhoneValidatorAdapter();
    const passwordValidator = new PasswordValidatorAdapter();
    const dateValidator = new DateValidatorAdapter();
    const textValidator = new TextValidatorAdapter();
    const cpfValidator = new CpfValidatorAdapter();
    
    const invalidObjectValidator = new InvalidObjectValidatorAdapter(
        emailValidator, 
        phoneValidator, 
        passwordValidator, 
        dateValidator, 
        textValidator,
        cpfValidator
    );

    return new UserController(
        createUser,
        phoneAlreadyExists,
        emailAlreadyExists,
        cpfAlreadyExists,
        missingObjectValidator,
        invalidObjectValidator
    );
}
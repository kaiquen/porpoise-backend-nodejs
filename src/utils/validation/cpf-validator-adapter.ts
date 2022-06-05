import { CpfValidator } from "../../presentation/protocols/validation/cpf-validator";
import { cpf as validator} from "cpf-cnpj-validator";

export class CpfValidatorAdapter implements CpfValidator {
    isValid(cpf:string): boolean {
        return validator.isValid(cpf);
    }
}
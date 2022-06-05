import isMobilePhone from 'validator/lib/isMobilePhone';
import { PhoneValidator } from "../../presentation/protocols/validation/phone-validator";

export class PhoneValidatorAdapter implements PhoneValidator {
    isValid(phone: string): boolean {
        return isMobilePhone(phone,'pt-BR');
    }
}
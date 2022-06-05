import { EmailValidator } from "../../presentation/protocols/validation/email-validator";
import isEmail from 'validator/lib/isEmail';

export class EmailValidatorAdapter implements EmailValidator {
    isValid(email: string): boolean {
        return isEmail(email);
    }
}
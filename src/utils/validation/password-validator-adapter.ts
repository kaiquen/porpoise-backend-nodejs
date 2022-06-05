import isStrongPassword from 'validator/lib/isStrongPassword';
import { PasswordValidator } from '../../presentation/protocols/validation/password-validator';

export class PasswordValidatorAdapter implements PasswordValidator {
    isValid(password: string): boolean {
        return isStrongPassword(password, {minUppercase: 0, minSymbols: 0})
    }
}
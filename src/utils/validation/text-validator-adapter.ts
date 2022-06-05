import { TextValidator } from "../../presentation/protocols/validation/text-validator";
import isAlpha from 'validator/lib/isAlpha'
export  class TextValidatorAdapter implements TextValidator {
    isValid(text: string): boolean {
        return isAlpha(text, 'pt-BR', {ignore: ' '});
    }
}
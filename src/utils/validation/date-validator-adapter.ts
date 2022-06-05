import { DateValidator } from "../../presentation/protocols/validation/date-validator";
import isDate from 'validator/lib/isDate'
export class DateValidatorAdapter implements DateValidator {
    isValid(date: string): boolean {
        return isDate(date, {format: 'YYYY/MM/DD'});
    }
}
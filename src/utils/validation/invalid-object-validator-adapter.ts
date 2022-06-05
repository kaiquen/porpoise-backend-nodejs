import { CpfValidator } from "../../presentation/protocols/validation/cpf-validator";
import { DateValidator } from "../../presentation/protocols/validation/date-validator";
import { EmailValidator } from "../../presentation/protocols/validation/email-validator";
import { InvalidObjectValidator } from "../../presentation/protocols/validation/invalid-object-validator";
import { ObejectError } from "../../presentation/protocols/validation/obeject-error";
import { PasswordValidator } from "../../presentation/protocols/validation/password-validator";
import { PhoneValidator } from "../../presentation/protocols/validation/phone-validator";
import { TextValidator } from "../../presentation/protocols/validation/text-validator";

export class InvalidObjectValidatorAdapter implements InvalidObjectValidator {
    constructor(
        private readonly emailValidator: EmailValidator,
        private readonly phoneValidator: PhoneValidator,
        private readonly passwordValidator: PasswordValidator,
        private readonly dateValidator: DateValidator,
        private readonly textValidator: TextValidator,
        private readonly cpfValidator: CpfValidator
    ){}
    isValid(object: any): void {
        let error:ObejectError = {
            statusCode: 400,
        
            body: {
                code: 400,
                errors: []
            }
        };
    
        (Object.values(object).map((item:string,index) => {
            if(Object.keys(object)[index] === 'name' || Object.keys(object)[index] === 'title') {
                const data = this.textValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }  
            if(Object.keys(object)[index] === 'email') {
                const data = this.emailValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }   
            if(Object.keys(object)[index] === 'phone') {
                const data = this.phoneValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }   
            if(Object.keys(object)[index] === 'password') {
                const data = this.passwordValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }  
            if(Object.keys(object)[index] === 'birth') {
                const data = this.dateValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }  
            if(Object.keys(object)[index] === 'cpf') {
                const data = this.cpfValidator.isValid(item);
                data ? true : error.body.errors.push(`Invalid param ${Object.keys(object)[index]}`)
            }  
        }));
        
        if(error.body.errors.length > 0) throw error
    }
}
import { MissingObjectValidator } from "../../presentation/protocols/validation/missing-object-validator";
import { ObejectError } from "../../presentation/protocols/validation/obeject-error";

export class MissingObjectValidatorAdapter implements MissingObjectValidator {
    isValid(object: any): void {
        let error:ObejectError = {
            statusCode: 400,
        
            body: {
                code: 400,
                errors: []
            }
        };
    
        (Object.values(object).map((item,index) => {
            if(!item) error.body.errors.push(`Missing param ${Object.keys(object)[index]}`);
        }));
    
        if(error.body.errors.length > 0) throw error
    }
}
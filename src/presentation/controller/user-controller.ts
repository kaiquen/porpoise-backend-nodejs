import { CreateUser } from "../../domain/usecases/user/create-user";
import { created, ok, serverError } from "../helpers/http-helper";
import { ControllerCreate } from "../protocols/controllers/controller-create";
import { ControllerList } from "../protocols/controllers/controller-list";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { InvalidObjectValidator } from "../protocols/validation/invalid-object-validator";
import { MissingObjectValidator } from "../protocols/validation/missing-object-validator";
import { CpfAlreadyExistsValidator } from "../protocols/validation/user/cpf-already-exists-validator";
import { EmailAlreadyExistsValidator } from "../protocols/validation/user/email-already-exists-validator";
import { PhoneAlreadyExistsValidator } from "../protocols/validation/user/phone-already-exists-validator";
import { ObejectError } from "../protocols/validation/obeject-error";
export class UserController implements ControllerCreate, ControllerList {
    constructor(
        private readonly createUser: CreateUser,
        private readonly phoneAlreadyExists: PhoneAlreadyExistsValidator,
        private readonly emailAlreadyExists: EmailAlreadyExistsValidator,
        private readonly cpfAlreadyExists: CpfAlreadyExistsValidator,
        private readonly missingObjectValidator: MissingObjectValidator,
        private readonly invalidObjectValidator: InvalidObjectValidator
    ){}

    async create(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const {name, cpf, email, password, phone, birth} = httpRequest.body;
            
            this.missingObjectValidator.isValid({name, cpf, email, password, phone,birth});
            this.invalidObjectValidator.isValid({name, cpf, email, password, phone, birth})
            
            const cpfExists = await this.cpfAlreadyExists.cpfExists(cpf);
            const emailExists = await this.emailAlreadyExists.emailExists(email);
            const phoneExists = await this.phoneAlreadyExists.phoneExists(phone);
            
            concatErrors([cpfExists, emailExists, phoneExists]);
            
            await this.createUser.create({name,cpf,email,password,phone,birth});
            
            return created('');
        } catch (error) {
            if(Array(error.body).indexOf) return error;

            return serverError(error);
        }
    }

    list(httpRequest: HttpRequest): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}

const concatErrors = (object: boolean[]) => {
    let error:ObejectError = {
        statusCode: 400,
        body: {
            code: 400,
            errors: []
        }
    }

    object.map((item, index) => {
        if(item) {
        switch(index) {
                case 0:
                    error.body.errors.push('Cpf already exits');
                break;
                case 1:
                    error.body.errors.push('Email already exists');
                break;
                case 2:
                    error.body.errors.push('Phone already exists');
                break;
            }
        }
    })

    if(error.body.errors.length > 0) throw error
}

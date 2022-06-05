import { Logar } from "../../../domain/usecases/login/logar";

export class DbLogin implements Logar {
    logar(): string {
        return 'Success'
    }
}
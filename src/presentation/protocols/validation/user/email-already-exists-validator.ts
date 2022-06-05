export interface EmailAlreadyExistsValidator {
    emailExists(email:string):Promise<boolean>
}
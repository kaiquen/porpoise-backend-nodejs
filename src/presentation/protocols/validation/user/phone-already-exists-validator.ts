export interface PhoneAlreadyExistsValidator {
    phoneExists(phone:string):Promise<boolean>
}
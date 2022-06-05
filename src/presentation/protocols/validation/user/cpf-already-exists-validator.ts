export interface CpfAlreadyExistsValidator {
    cpfExists(cpf:string):Promise<boolean>
}
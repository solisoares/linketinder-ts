import { Validator } from "./UserValidator"
import { ValidationError } from "./ValidationError"

export class ApplicantValidator extends Validator {
    private static cpfPattern: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/
    private static agePattern: RegExp = /^\d{1,3}$/

    static checkCpf(cpf: string): boolean {
        if (cpf.match(ApplicantValidator.cpfPattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The CPF is not valid.")
        }
    }

    static checkAge(age: string): boolean {
        if (age.match(ApplicantValidator.agePattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The age is not valid.")
        }
    }

    static checkAll(name: string, 
                    email: string, 
                    country: string, 
                    state: string, 
                    cep: string, 
                    cpf: string, 
                    age: string) { 
        return super.checkAll(name, email, country, state, cep) 
            && ApplicantValidator.checkCpf(cpf) 
            && ApplicantValidator.checkAge(age)
    }
}

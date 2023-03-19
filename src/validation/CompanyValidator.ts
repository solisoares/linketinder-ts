import { Validator } from "./UserValidator"
import { ValidationError } from "./ValidationError"

export class CompanyValidator extends Validator {
    private static cnpjPattern: RegExp = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}$/

    static checkCnpj(cnpj: string): boolean {
        if (cnpj.match(CompanyValidator.cnpjPattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The CNPJ is not valid.")
        }
    }

    static checkAll(name: string,
                    email: string,
                    country: string,
                    state: string,
                    cep: string,
                    cnpj: string) {
        return super.checkAll(name, email, country, state, cep)
            && CompanyValidator.checkCnpj(cnpj)
    }
}
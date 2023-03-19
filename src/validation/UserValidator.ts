import { ValidationError } from "./ValidationError"

export abstract class Validator {
    private static namePattern: RegExp = /^[a-z0-9 ,.'-]+$/i
    private static emailPattern: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    private static countryPattern: RegExp = /^[a-zA-Z\s]+$/
    private static statePattern: RegExp = /^[a-zA-Z\s]+$/
    private static cepPattern: RegExp = /^\d{2}\.?\d{3}\-?\d{3}$/

    static checkName(name: string): boolean {
        if (name.match(Validator.namePattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The name you provide is not valid.")
        }
    }

    static checkEmail(email: string): boolean {
        if (email.match(Validator.emailPattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The email is not valid.")
        }
    }

    static checkCountry(country: string): boolean {
        if (country.match(Validator.countryPattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The country name is not valid.")
        }
    }

    static checkState(state: string): boolean {
        if (state.match(Validator.statePattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The state name is not valid.")
        }
    }

    static checkCep(cep: string): boolean {
        if (cep.match(Validator.cepPattern)) {
            return true
        } else {
            throw new ValidationError("Sorry. The CEP is not valid.")
        }
    }

    static checkAll(name: string, 
                    email: string, 
                    country: string, 
                    state: string, 
                    cep: string,
                    ...childArgs: string[]) {
        return Validator.checkName(name)
            && Validator.checkEmail(email)
            && Validator.checkCountry(country)
            && Validator.checkState(state)
            && Validator.checkCep(cep)
    }
}



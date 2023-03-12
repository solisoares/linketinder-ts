import { User } from "./User"

class Applicant extends User {
    cpf: number  // brazilian social security number
    age: number

    constructor(name: string, email: string, 
                country: string, state: string, 
                cep: number, description: string, 
                cpf: number, age: number, 
                skills: Array<string>) {
        super(name, email, country, state, cep, description, skills)
        this.cpf = cpf
        this.age = age
    }


}

export { Applicant }

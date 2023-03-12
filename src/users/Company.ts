import { User } from "./User"

class Company extends User {
    cnpj  // brazilian employer identification number

    constructor(name: string, email: string, 
                country: string, state: string, 
                cep: number, description: string, 
                cnpj: number, skills: Array<string>) {
        super(name, email, country, state, cep, description, skills)
        this.cnpj = cnpj
    }

    
}

export { Company }

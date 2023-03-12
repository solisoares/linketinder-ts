abstract class User {
    name: string
    email: string
    country: string
    state: string
    cep: number  // Brazilian postal code abbreviation
    description: string
    skills: Array<string>

    constructor(name: string, email: string,
        country: string, state: string,
        cep: number, description: string,
        skills: Array<string>) {
        this.name = name
        this.email = email
        this.country = country
        this.state = state
        this.cep = cep
        this.description = description
        this.skills = skills
    }
}

export { User }

import { UserList } from "./UserList"
import { Applicant } from "./Applicant"

class ApplicantList extends UserList {
    public stringifyJSON(): string {
        return JSON.stringify(this)
    }

    public parseJSON(json: any): any {
        this.users = []
        let users: any = JSON.parse(json).users
        let user: any
        for (user of users) {
            this.users.push(new Applicant(user.name, user.email, user.country, user.state, Number(user.cep), user.description, Number(user.cpf), Number(user.age), user.skills))
        }
        return this.users
    }
}

export { ApplicantList }

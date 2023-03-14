import { Company } from "./Company"
import { UserList } from "./UserList"

class CompanyList extends UserList {
    public stringifyJSON(): string {
        return JSON.stringify(this)
    }

    public parseJSON(json: any): any {
        this.users = []
        let users: any = JSON.parse(json).users
        let user: any
        for (user of users) {
            this.users.push(new Company(user.name, user.email, user.country, user.state, Number(user.cep), user.description, Number(user.cnpj), user.skills))
        }
        return this.users
    }
}

export { CompanyList }

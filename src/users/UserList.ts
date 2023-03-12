import { User } from "./User"

abstract class UserList {
    users: Array<User> = []

    public getAll(): Array<User> {
        return this.users
    }

    public count(): number {
        return this.users.length
    }

    public add(user: User): void {
        this.users.push(user)
    }

    public remove(user: User): void {
        let filteredUsers = []
        filteredUsers = this.users.filter(currentUser => currentUser != user)
        this.users = filteredUsers
    }

    public get(name: string): User {
        let user: User | null = null

        this.users.forEach((currentUser: User) => {
            if (currentUser.name == name)
                user = currentUser
        })

        if (!user)
            throw new Error("The User is not present")

        return user
    }

    public getBySkill(skill: string): Array<User> {
        let usersBySkill: Array<User> = []

        this.users.forEach((currentUser: User) => {
            if (currentUser.skills.includes(skill)) {
                usersBySkill.push(currentUser)
            }
        })

        if (!usersBySkill)
            throw new Error("There are no users with this skill")

        return usersBySkill
    }
}

export { UserList }

export class User {
    public readonly id?: string
    public readonly name: string
    public readonly email: string
    public readonly password?: string

    constructor(user: {
        id?: string
        name: string
        email: string
        password: string
    }) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.password = user.password
    }
}

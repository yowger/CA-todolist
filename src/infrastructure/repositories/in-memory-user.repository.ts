import { UserRepository } from "../../domain/repositories/user-repository.repository"
import { User } from "../../domain/entities/user.entities"

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = []

    async create(user: User): Promise<User> {
        const id = (this.users.length + 1).toString()

        const newUser = new User({
            id,
            name: user.name,
            email: user.email,
            password: user.password,
        })

        this.users.push(newUser)

        console.log("🚀 ~ InMemoryUserRepository ~ users:", this.users)
        return newUser
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((u) => u.email === email)
    }

    async findById(id: string): Promise<User | null> {
        console.log("users: ", this.users)
        return this.users.find((u) => u.id === id) || null
    }

    async update(user: User): Promise<User> {
        const index = this.users.findIndex((u) => u.id === user.id)

        if (index === -1) {
            throw new Error("User not found")
        }

        this.users[index] = user

        return user
    }

    async delete(id: string): Promise<boolean> {
        const index = this.users.findIndex((u) => u.id === id)

        if (index === -1) {
            return false
        }

        this.users.splice(index, 1)

        return true
    }
}

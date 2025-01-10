import { UserRepository } from "../../application/interfaces/UserRepository"
import { User } from "../../domain/entities/user.entities"

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = []

    async create(user: User): Promise<User> {
        this.users.push(user)

        return user
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null
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

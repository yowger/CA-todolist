import { UserRepository } from "@domain/repositories/user-repository.repository"
import { User } from "@domain/entities/user.entities"

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = []

    async create(user: Omit<User, "id">): Promise<User> {
        const id = (this.users.length + 1).toString()

        const newUser = new User({
            id,
            name: user.name,
            email: user.email,
            password: user.password,
        })

        this.users.push(newUser)

        return newUser
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find((u) => u.email === email) || null
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find((u) => u.id === id) || null
    }

    async update(
        id: string,
        userData: Partial<Omit<User, "id">>
    ): Promise<User> | null {
        const index = this.users.findIndex((user) => user.id === id)
        if (index === -1) return null

        this.users[index] = { ...this.users[index], ...userData }
        return this.users[index]
    }

    async delete(id: string): Promise<void> {
        this.users = this.users.filter((user) => user.id !== id)
    }
}

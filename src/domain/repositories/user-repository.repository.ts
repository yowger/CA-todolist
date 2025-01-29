import { User } from "@domain/entities/user.entities"

export interface UserRepository {
    create(user: Omit<User, "id">): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
    update(id: string, user: Partial<Omit<User, "id">>): Promise<User> | null
    delete(id: string): Promise<void>
}

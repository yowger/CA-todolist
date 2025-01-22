import { User } from "@domain/entities/user.entities"

export interface UserRepository {
    create(user: User): Promise<User>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    update(user: User): Promise<User>
    delete(id: string): Promise<boolean>
}

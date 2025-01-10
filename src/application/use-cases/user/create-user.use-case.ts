import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"

interface CreateUserDTO {
    name: string
    email: string
}

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: CreateUserDTO): Promise<User> {
        const user = {
            id: new Date().toISOString(),
            ...data,
        }

        return this.userRepository.create(user)
    }
}

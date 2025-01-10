import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"

interface UpdateUserDTO {
    id: string
    name?: string
    email?: string
}

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: UpdateUserDTO): Promise<User> {
        const user = await this.userRepository.findById(data.id)

        if (!user) {
            throw new Error("User not found")
        }

        const updatedUser: User = {
            ...user,
            ...data,
        }

        return this.userRepository.update(updatedUser)
    }
}

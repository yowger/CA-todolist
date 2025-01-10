import { inject, injectable } from "inversify"
import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"
import DEPENDENCY_KEYS from "../../../infrastructure/constants/dependency-keys.constants"

interface UpdateUserDTO {
    id: string
    name?: string
    email?: string
}

@injectable()
export class UpdateUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository
    ) {}

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

import { inject, injectable } from "inversify"
import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../../domain/repositories/user-repository.repository"
import DEPENDENCY_KEYS from "../../../infrastructure/constants/dependency-keys.constants"
import { UpdateUserDTO } from "../../dto/user.dto"

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

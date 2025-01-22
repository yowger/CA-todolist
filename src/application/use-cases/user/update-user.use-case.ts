import { inject, injectable } from "inversify"

import { UpdateUserDTO } from "@app/dto/user.dto"

import { User } from "@/domain/entities/user.entities"
import { UserRepository } from "@/domain/repositories/user-repository.repository"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

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

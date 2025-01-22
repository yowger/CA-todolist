import { inject, injectable } from "inversify"

import { LoginDTO } from "@app/dto/auth.dto"

import { User } from "@domain/entities/user.entities"
import { UserRepository } from "@domain/repositories/user-repository.repository"
import { PasswordService } from "@domain/services/password.service"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

@injectable()
export class LoginUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository,
        @inject(DEPENDENCY_KEYS.PasswordService)
        private passwordService: PasswordService
    ) {}

    async execute(data: LoginDTO): Promise<User> {
        const existingUser = await this.userRepository.findByEmail(data.email)

        if (!existingUser) {
            throw new Error("user not found")
        }

        const isPasswordMatch = await this.passwordService.verifyPassword(
            data.password,
            existingUser.password
        )

        if (!isPasswordMatch) {
            throw new Error("Invalid credentials")
        }

        // access & refresh token logic

        return existingUser
    }
}

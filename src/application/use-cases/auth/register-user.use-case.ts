import { inject, injectable } from "inversify"

import { RegisterUserDTO } from "@app/dto/auth.dto"

import { User } from "@domain/entities/user.entities"
import { UserRepository } from "@domain/repositories/user-repository.repository"
import { EmailProviderService } from "@domain/services/email-provider.service"
import { PasswordService } from "@domain/services/password.service"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

@injectable()
export class RegisterUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.EmailProviderService)
        private emailProviderService: EmailProviderService,
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository,
        @inject(DEPENDENCY_KEYS.PasswordService)
        private passwordService: PasswordService
    ) {}

    async execute(data: RegisterUserDTO): Promise<User> {
        const existingUser = await this.userRepository.findByEmail(data.email)

        if (existingUser) {
            throw new Error("Email is already in use")
        }

        const hashedPassword = await this.passwordService.hashPassword(
            data.password
        )

        const user = new User({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        })

        // side effect events
        await this.emailProviderService.sendEmail(
            user.email,
            "Welcome",
            "Welcome to our app"
        )

        return this.userRepository.create(user)
    }
}

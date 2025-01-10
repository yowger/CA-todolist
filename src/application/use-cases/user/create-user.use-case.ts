import { inject, injectable } from "inversify"
import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"
import DEPENDENCY_KEYS from "../../../infrastructure/constants/dependency-keys.constants"

interface CreateUserDTO {
    name: string
    email: string
}

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository
    ) {}

    async execute(data: CreateUserDTO): Promise<User> {
        const user = {
            id: new Date().toISOString(),
            ...data,
        }

        return this.userRepository.create(user)
    }
}

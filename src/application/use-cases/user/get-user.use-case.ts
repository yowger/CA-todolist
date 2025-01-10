import { inject, injectable } from "inversify"
import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"
import DEPENDENCY_KEYS from "../../../infrastructure/constants/dependency-keys.constants"

@injectable()
export class GetUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository
    ) {}

    async execute(id: string): Promise<User | null> {
        return this.userRepository.findById(id)
    }
}

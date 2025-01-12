import { inject, injectable } from "inversify"
import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../../domain/repositories/user-repository.repository"
import DEPENDENCY_KEYS from "../../../shared/constants/dependency-keys.constants"

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

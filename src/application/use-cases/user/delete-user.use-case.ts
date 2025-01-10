import { inject, injectable } from "inversify"
import { UserRepository } from "../../interfaces/UserRepository"
import DEPENDENCY_KEYS from "../../../infrastructure/constants/dependency-keys.constants"

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject(DEPENDENCY_KEYS.UserRepository)
        private userRepository: UserRepository
    ) {}

    async execute(id: string): Promise<boolean> {
        return this.userRepository.delete(id)
    }
}

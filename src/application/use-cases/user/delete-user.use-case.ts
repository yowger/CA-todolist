import { UserRepository } from "../../interfaces/UserRepository"

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string): Promise<boolean> {
        return this.userRepository.delete(id)
    }
}

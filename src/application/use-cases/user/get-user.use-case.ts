import { User } from "../../../domain/entities/user.entities"
import { UserRepository } from "../../interfaces/UserRepository"

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string): Promise<User | null> {
        return this.userRepository.findById(id)
    }
}

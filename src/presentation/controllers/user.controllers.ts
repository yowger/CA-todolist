import { Request, Response } from "express"
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case"
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "../../application/use-cases/user/update-user.use-case"

export class UserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase,
        private deleteUserUseCase: DeleteUserUseCase,
        private updateUserUseCase: UpdateUserUseCase
    ) {}

    async createUser(req: Request, res: Response) {
        const user = await this.createUserUseCase.execute(req.body)

        return res.status(201).json(user)
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = await this.getUserUseCase.execute(req.params.id)

            return res.status(200).json(user)
        } catch (error) {
            return res.status(404).json({ message: "User not found" })
        }
    }

    async updateUser(req: Request, res: Response) {
        const user = await this.updateUserUseCase.execute(req.body)

        return res.status(200).json(user)
    }

    async deleteUser(req: Request, res: Response) {
        await this.deleteUserUseCase.execute(req.params.id)

        return res.status(200).json({ message: "User deleted" })
    }
}

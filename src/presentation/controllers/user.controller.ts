import { Request, Response } from "express"
import { inject, injectable } from "inversify"

import { DeleteUserUseCase } from "@app/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "@app/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "@app/use-cases/user/update-user.use-case"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

@injectable()
export class UserController {
    constructor(
        @inject(DEPENDENCY_KEYS.GetUserUseCase)
        private getUser: GetUserUseCase,
        @inject(DEPENDENCY_KEYS.DeleteUserUseCase)
        private deleteUser: DeleteUserUseCase,
        @inject(DEPENDENCY_KEYS.UpdateUserUseCase)
        private updateUser: UpdateUserUseCase
    ) {}

    async getUserHandler(req: Request, res: Response) {
        const user = await this.getUser.execute(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(200).json(user)
    }

    async updateUserHandler(req: Request, res: Response) {
        // get id from token when implement auth
        const user = await this.updateUser.execute(req.params.id, req.body)

        return res.status(200).json(user)
    }

    async deleteUserHandler(req: Request, res: Response) {
        await this.deleteUser.execute(req.params.id)

        return res.status(200).json({ message: "User deleted" })
    }
}

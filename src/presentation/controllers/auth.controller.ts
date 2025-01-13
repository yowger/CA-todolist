import { Request, Response } from "express"
import { inject, injectable } from "inversify"
import DEPENDENCY_KEYS from "../../shared/constants/dependency-keys.constants"
import { RegisterUserUseCase } from "../../application/use-cases/auth/register-user.use-case"

@injectable()
export class AuthController {
    constructor(
        @inject(DEPENDENCY_KEYS.LoginUserUseCase)
        private loginUser: RegisterUserUseCase,
        @inject(DEPENDENCY_KEYS.RegisterUserUseCase)
        private registerUser: RegisterUserUseCase
    ) {}

    loginUserHandler = (req: Request, res: Response) => {
        const user = this.loginUser.execute(req.body)

        res.status(200).json(user)
    }

    async registerUserHandler(req: Request, res: Response) {
        const user = await this.registerUser.execute(req.body)

        res.status(201).json(user)
    }
}

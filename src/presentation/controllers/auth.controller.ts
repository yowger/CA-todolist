import { Request, Response } from "express"
import { inject, injectable } from "inversify"
import DEPENDENCY_KEYS from "../../shared/constants/dependency-keys.constants"
import { RegisterUserUseCase } from "../../application/use-cases/auth/register-user.use-case"
import { plainToInstance } from "class-transformer"
import {
    RegisterUserDTO,
    UserResponseDTO,
} from "../../application/dto/auth.dto"
import { validateOrReject } from "class-validator"

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
        try {
            const registerUserDTO = plainToInstance(RegisterUserDTO, req.body)
            await validateOrReject(registerUserDTO)

            const user = await this.registerUser.execute(req.body)

            res.status(201).json(new UserResponseDTO(user))
        } catch (error) {
            console.log("register error: ", error)
            res.status(500).json({ message: "Register error" })
        }
    }
}

// todo: central error handling

import { plainToInstance } from "class-transformer"
import { validateOrReject } from "class-validator"
import { Request, Response } from "express"
import { inject, injectable } from "inversify"

import { RegisterUserUseCase } from "@app/use-cases/auth/register-user.use-case"
import { RegisterUserDTO, UserResponseDTO } from "@app/dto/auth.dto"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

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

            const user = await this.registerUser.execute(registerUserDTO)

            res.status(201).json(new UserResponseDTO(user))
        } catch (error) {
            console.log("register error: ", error)
            res.status(500).json({ message: "Register error" })
        }
    }
}

// todo: central error handling

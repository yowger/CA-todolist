import { Container } from "inversify"

import { DeleteUserUseCase } from "@app/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "@app/use-cases/user/get-user.use-case"
import { LoginUserUseCase } from "@app/use-cases/auth/login-user.use-case"
import { UpdateUserUseCase } from "@app/use-cases/user/update-user.use-case"
import { RegisterUserUseCase } from "@app/use-cases/auth/register-user.use-case"

import { EmailProviderService } from "@domain/services/email-provider.service"
import { UserRepository } from "@/domain/repositories/user-repository.repository"
import { PasswordService } from "@domain/services/password.service"

import { InMemoryUserRepository } from "@infra/repositories/in-memory-user.repository"
import { NodeMailerEmailService } from "@infra/services/email.service"
import { BcryptPasswordService } from "@infra/services/password.service"

import { AuthController } from "@pres/controllers/auth.controller"
import { UserController } from "@pres/controllers/user.controller"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

const container = new Container()

container
    .bind<UserRepository>(DEPENDENCY_KEYS.UserRepository)
    .to(InMemoryUserRepository)
    .inSingletonScope()

container
    .bind<EmailProviderService>(DEPENDENCY_KEYS.EmailProviderService)
    .to(NodeMailerEmailService)
    .inSingletonScope()

container
    .bind<PasswordService>(DEPENDENCY_KEYS.PasswordService)
    .to(BcryptPasswordService)
    .inSingletonScope()

container
    .bind<GetUserUseCase>(DEPENDENCY_KEYS.GetUserUseCase)
    .to(GetUserUseCase)
    .inSingletonScope()
container
    .bind<UpdateUserUseCase>(DEPENDENCY_KEYS.UpdateUserUseCase)
    .to(UpdateUserUseCase)
    .inSingletonScope()
container
    .bind<DeleteUserUseCase>(DEPENDENCY_KEYS.DeleteUserUseCase)
    .to(DeleteUserUseCase)
    .inSingletonScope()

container
    .bind<LoginUserUseCase>(DEPENDENCY_KEYS.LoginUserUseCase)
    .to(LoginUserUseCase)
    .inSingletonScope()
container
    .bind<RegisterUserUseCase>(DEPENDENCY_KEYS.RegisterUserUseCase)
    .to(RegisterUserUseCase)
    .inSingletonScope()

container
    .bind<UserController>(DEPENDENCY_KEYS.UserController)
    .to(UserController)
container
    .bind<AuthController>(DEPENDENCY_KEYS.AuthController)
    .to(AuthController)

export default container

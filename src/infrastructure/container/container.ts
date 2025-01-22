import { Container } from "inversify"
import { UserRepository } from "../../domain/repositories/user-repository.repository"
import { InMemoryUserRepository } from "../repositories/in-memory-user.repository"
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "../../application/use-cases/user/update-user.use-case"
import { UserController } from "../../presentation/controllers/user.controller"
import DEPENDENCY_KEYS from "../../shared/constants/dependency-keys.constants"
import { RegisterUserUseCase } from "../../application/use-cases/auth/register-user.use-case"
import { AuthController } from "../../presentation/controllers/auth.controller"
import { EmailProviderService } from "../../domain/services/email-provider.service"
import { NodeMailerEmailService } from "../services/email.service"
import { PasswordService } from "../../domain/services/password.service"
import { BcryptPasswordService } from "../services/password.service"
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.use-case"

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

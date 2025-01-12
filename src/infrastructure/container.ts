import { Container } from "inversify"
import { UserRepository } from "../domain/repositories/user-repository.repository"
import { InMemoryUserRepository } from "./repositories/in-memory-user.repository"
import { DeleteUserUseCase } from "../application/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "../application/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "../application/use-cases/user/update-user.use-case"
import { UserController } from "../presentation/controllers/user.controllers"
import DEPENDENCY_KEYS from "../shared/constants/dependency-keys.constants"
import { RegisterUserUseCase } from "../application/use-cases/auth/register-user.use-case"

const container = new Container()

container
    .bind<UserRepository>(DEPENDENCY_KEYS.UserRepository)
    .to(InMemoryUserRepository)

container
    .bind<RegisterUserUseCase>(DEPENDENCY_KEYS.RegisterUserUseCase)
    .to(RegisterUserUseCase)
container
    .bind<GetUserUseCase>(DEPENDENCY_KEYS.GetUserUseCase)
    .to(GetUserUseCase)
container
    .bind<UpdateUserUseCase>(DEPENDENCY_KEYS.UpdateUserUseCase)
    .to(UpdateUserUseCase)
container
    .bind<DeleteUserUseCase>(DEPENDENCY_KEYS.DeleteUserUseCase)
    .to(DeleteUserUseCase)

container
    .bind<UserController>(DEPENDENCY_KEYS.UserController)
    .to(UserController)

export default container

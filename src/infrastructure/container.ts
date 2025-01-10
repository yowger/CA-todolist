import { Container } from "inversify"
import { UserRepository } from "../application/interfaces/UserRepository"
import { InMemoryUserRepository } from "./database/in-memory-user.repository"
import { CreateUserUseCase } from "../application/use-cases/user/create-user.use-case"
import { DeleteUserUseCase } from "../application/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "../application/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "../application/use-cases/user/update-user.use-case"
import { UserController } from "../presentation/controllers/user.controllers"
import DEPENDENCY_KEYS from "./constants/dependency-keys.constants"

const container = new Container()

container
    .bind<UserRepository>(DEPENDENCY_KEYS.UserRepository)
    .to(InMemoryUserRepository)

container
    .bind<CreateUserUseCase>(DEPENDENCY_KEYS.CreateUserUseCase)
    .to(CreateUserUseCase)
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

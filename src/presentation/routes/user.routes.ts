import express from "express"
import { InMemoryUserRepository } from "../../infrastructure/database/in-memory-user.repository"
import { UserController } from "../controllers/user.controllers"
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case"
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "../../application/use-cases/user/update-user.use-case"
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case"

const router = express.Router()

const userRepository = new InMemoryUserRepository()
const userController = new UserController(
    new CreateUserUseCase(userRepository),
    new GetUserUseCase(userRepository),
    new DeleteUserUseCase(userRepository),
    new UpdateUserUseCase(userRepository)
)

router.post("/", userController.createUser.bind(userController))
router.get("/:id", userController.getUser.bind(userController))
router.put("/:id", userController.updateUser.bind(userController))
router.delete("/:id", userController.deleteUser.bind(userController))

export default router

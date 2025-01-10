import { UserController } from "../controllers/user.controllers"
import container from "../../infrastructure/container"
import express from "express"
import DEPENDENCY_KEYS from "../../infrastructure/constants/dependency-keys.constants"

const router = express.Router()

const userController = container.get<UserController>(
    DEPENDENCY_KEYS.UserController
)

router.post("/", userController.createUser.bind(userController))
router.get("/:id", userController.getUser.bind(userController))
router.put("/:id", userController.updateUser.bind(userController))
router.delete("/:id", userController.deleteUser.bind(userController))

export default router

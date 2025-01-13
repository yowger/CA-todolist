import container from "../../infrastructure/container"
import express from "express"
import DEPENDENCY_KEYS from "../../shared/constants/dependency-keys.constants"
import { AuthController } from "../controllers/auth.controller"

const router = express.Router()

const authController = container.get<AuthController>(
    DEPENDENCY_KEYS.AuthController
)

router.post("/", authController.registerUserHandler.bind(authController))

export default router

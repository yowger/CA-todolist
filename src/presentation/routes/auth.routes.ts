import express from "express"

import container from "@infra/container/container"

import { AuthController } from "@pres/controllers/auth.controller"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

const router = express.Router()

const authController = container.get<AuthController>(
    DEPENDENCY_KEYS.AuthController
)

router.post("/login", authController.loginUserHandler.bind(authController))
router.post(
    "/register",
    authController.registerUserHandler.bind(authController)
)

export default router

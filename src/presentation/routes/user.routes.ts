import express from "express"

import container from "@infra/container/container"

import { UserController } from "@pres/controllers/user.controller"

import DEPENDENCY_KEYS from "@/shared/constants/dependency-keys.constants"

const router = express.Router()

const userController = container.get<UserController>(
    DEPENDENCY_KEYS.UserController
)

router.get("/:id", userController.getUserHandler.bind(userController))
router.put("/:id", userController.updateUserHandler.bind(userController))
router.delete("/:id", userController.deleteUserHandler.bind(userController))

export default router

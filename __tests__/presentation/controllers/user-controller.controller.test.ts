import { Request, Response } from "express"

import { DeleteUserUseCase } from "@app/use-cases/user/delete-user.use-case"
import { GetUserUseCase } from "@app/use-cases/user/get-user.use-case"
import { UpdateUserUseCase } from "@app/use-cases/user/update-user.use-case"

import { UserController } from "@pres/controllers/user.controller"

describe("userController", () => {
    let userController: UserController
    let mockGetUserUseCase: jest.Mocked<GetUserUseCase>
    let mockGetDeleteUserUseCase: jest.Mocked<DeleteUserUseCase>
    let mockUpdateUserUseCase: jest.Mocked<UpdateUserUseCase>
    let mockReq: Partial<Request>
    let mockRes: Partial<Response>

    beforeEach(() => {
        mockGetUserUseCase = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<GetUserUseCase>
        mockGetDeleteUserUseCase = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<DeleteUserUseCase>
        mockUpdateUserUseCase = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<UpdateUserUseCase>

        userController = new UserController(
            mockGetUserUseCase,
            mockGetDeleteUserUseCase,
            mockUpdateUserUseCase
        )

        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
    })

    describe("getUserHandler", () => {
        beforeEach(() => {
            mockReq = {
                params: { id: "1" },
            }
        })

        it("should return 200 and user when the user exists", async () => {
            const mockUser = {
                id: "1",
                name: "John",
                email: "johnDoe@email",
            }

            mockGetUserUseCase.execute.mockResolvedValue(mockUser)

            await userController.getUserHandler(
                mockReq as Request,
                mockRes as Response
            )

            expect(mockGetUserUseCase.execute).toHaveBeenCalledWith("1")
            expect(mockRes.status).toHaveBeenCalledWith(200)
            expect(mockRes.json).toHaveBeenCalledWith(mockUser)
        })
    })

    describe("updateUserHandler", () => {
        beforeEach(() => {
            mockReq = {
                body: {
                    id: "1",
                    name: "Sue",
                    email: "sue@email.com",
                },
            }
        })

        it("should return 200 if user is updated", async () => {
            const mockUpdatedUser = {
                id: "1",
                name: "Sue",
                email: "johnDoe@email",
            }

            mockUpdateUserUseCase.execute.mockResolvedValue(mockUpdatedUser)

            await userController.updateUserHandler(
                mockReq as Request,
                mockRes as Response
            )

            expect(mockUpdateUserUseCase.execute).toHaveBeenCalledWith(
                mockReq.body
            )
            expect(mockRes.status).toHaveBeenCalledWith(200)
            expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedUser)
        })
    })
})

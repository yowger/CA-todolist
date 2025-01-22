import { GetUserUseCase } from "@app/use-cases/user/get-user.use-case"

import { UserRepository } from "@domain/repositories/user-repository.repository"

describe("GetUserUseCase", () => {
    const mockUser = {
        id: "1",
        name: "John",
        email: "johnDoe@email",
    }

    let getUserUseCase: GetUserUseCase
    let mockUserRepository: jest.Mocked<UserRepository>

    beforeEach(() => {
        mockUserRepository = {
            findById: jest.fn(),
        } as unknown as jest.Mocked<UserRepository>

        getUserUseCase = new GetUserUseCase(mockUserRepository)
    })

    it("should return a user when user exists", async () => {
        mockUserRepository.findById.mockResolvedValue(mockUser)

        const result = await getUserUseCase.execute(mockUser.id)

        expect(mockUserRepository.findById).toHaveBeenCalledWith(mockUser.id)
        expect(result).toEqual(mockUser)
    })

    it("should return null when the user does not exist", async () => {
        mockUserRepository.findById.mockResolvedValue(null)

        const result = await getUserUseCase.execute("1")

        expect(mockUserRepository.findById).toHaveBeenCalledWith("1")
        expect(result).toBeNull()
    })
})

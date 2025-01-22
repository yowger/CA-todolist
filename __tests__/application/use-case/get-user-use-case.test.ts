import { GetUserUseCase } from "../../../src/application/use-cases/user/get-user.use-case"
import { UserRepository } from "../../../src/domain/repositories/user-repository.repository"

describe("GetUserUseCase", () => {
    let getUserUseCase: GetUserUseCase
    let mockUserRepository: jest.Mocked<UserRepository>

    const correspondingUser = {
        id: "1",
        name: "John",
        email: "johnDoe@email",
    }

    beforeEach(() => {
        mockUserRepository = {
            findById: jest.fn(),
        } as unknown as jest.Mocked<UserRepository>

        getUserUseCase = new GetUserUseCase(mockUserRepository)
    })

    it("should return a user when user exists", async () => {
        mockUserRepository.findById.mockResolvedValue(correspondingUser)

        const result = await getUserUseCase.execute(correspondingUser.id)

        expect(mockUserRepository.findById).toHaveBeenCalledWith(
            correspondingUser.id
        )
        expect(result).toEqual(correspondingUser)
    })

    it("should return null when the user does not exist", async () => {
        mockUserRepository.findById.mockResolvedValue(null)

        const result = await getUserUseCase.execute("1")

        expect(mockUserRepository.findById).toHaveBeenCalledWith("1")
        expect(result).toBeNull()
    })
})

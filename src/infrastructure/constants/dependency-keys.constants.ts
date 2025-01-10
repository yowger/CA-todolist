const DEPENDENCY_KEYS = {
    UserRepository: Symbol.for("UserRepository"),
    CreateUserUseCase: Symbol.for("CreateUserUseCase"),
    GetUserUseCase: Symbol.for("GetUserUseCase"),
    UpdateUserUseCase: Symbol.for("UpdateUserUseCase"),
    DeleteUserUseCase: Symbol.for("DeleteUserUseCase"),
    UserController: Symbol.for("UserController"),
}

export default DEPENDENCY_KEYS

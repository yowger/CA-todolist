const DEPENDENCY_KEYS = {
    UserRepository: Symbol.for("UserRepository"),
    RegisterUserUseCase: Symbol.for("RegisterUserUseCase"),
    GetUserUseCase: Symbol.for("GetUserUseCase"),
    UpdateUserUseCase: Symbol.for("UpdateUserUseCase"),
    DeleteUserUseCase: Symbol.for("DeleteUserUseCase"),
    AuthController: Symbol.for("AuthController"),
    UserController: Symbol.for("UserController"),
    EmailProviderService: Symbol.for("EmailProviderService"),
    PasswordService: Symbol.for("PasswordService"),
}

export default DEPENDENCY_KEYS

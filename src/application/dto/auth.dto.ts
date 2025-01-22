import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class RegisterUserDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string

    @IsEmail()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    readonly password: string

    constructor(partialUser: Partial<RegisterUserDTO>) {
        Object.assign(this, partialUser)
    }
}

export class UserResponseDTO {
    name: string
    email: string

    constructor(user: any) {
        this.name = user.name
        this.email = user.email
    }
}

export interface LoginDTO {
    email: string
    password: string
}

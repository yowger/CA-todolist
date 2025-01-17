import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class RegisterUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsEmail()
    email: string
    @IsString()
    @IsNotEmpty()
    password: string

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

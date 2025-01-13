import { PasswordService } from "../../domain/services/password.service"

export class BcryptPasswordService implements PasswordService {
    hashPassword(password: string): Promise<string> {
        return Promise.resolve(password)
    }

    verifyPassword(password: string, hash: string): Promise<boolean> {
        return Promise.resolve(password === hash)
    }
}

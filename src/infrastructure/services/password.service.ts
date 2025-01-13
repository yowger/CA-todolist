import { PasswordService } from "../../domain/services/password.service"
import bcrypt from "bcrypt"

export class BcryptPasswordService implements PasswordService {
    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }

    verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword)
    }
}

import { EmailProvider } from "../../domain/services/email-provider.service"

export class NodeMailerEmailService implements EmailProvider {
    sendEmail(to: string, subject: string, body: string): Promise<void> {
        return Promise.resolve()
    }
}

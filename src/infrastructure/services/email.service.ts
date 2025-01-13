import { EmailProviderService } from "../../domain/services/email-provider.service"

export class NodeMailerEmailService implements EmailProviderService {
    sendEmail(to: string, subject: string, body: string): Promise<void> {
        return Promise.resolve()
    }
}

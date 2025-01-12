export interface EmailProviderService {
    sendEmail(to: string, subject: string, body: string): Promise<void>
}

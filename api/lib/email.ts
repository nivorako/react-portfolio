import { Resend } from "resend";

/**
 * Send an email using Resend.
 *
 * @param {object} data - Email data
 * @param {string} data.from - From email address
 * @param {string} data.to - To email address
 * @param {string} data.subject - Email subject
 * @param {string} data.text - Email text
 * @param {string} data.html - Email HTML
 * @param {string} data.replyTo - Reply to email address
 * @returns {Promise<object>} - Email result
 * @throws {Error} - If Resend API key is not configured or if there is an error sending the email
 */
export async function sendEmail(data: {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
    replyTo: string;
}) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key is not configured");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data: result, error } = await resend.emails.send({
            from: data.from,
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html,
            replyTo: data.replyTo,
        });

        if (error) {
            console.error("Resend API Error:", error);
            throw new Error(error.message || "Failed to send email");
        }

        return { success: true, data: result };
    } catch (error) {
        console.error("Error sending email:", error);
        const errorMessage =
            error instanceof Error ? error.message : "Failed to send email";
        throw new Error(errorMessage);
    }
}

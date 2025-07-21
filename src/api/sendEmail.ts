import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

export async function sendEmail(data: {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Resend API key is not configured');
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
      console.error('Resend API Error:', error);
      throw new Error(error.message || 'Failed to send email');
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    throw new Error(errorMessage);
  }
}

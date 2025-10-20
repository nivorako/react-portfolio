import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendEmail } from './lib/email.js';

/**
 * Handles a Vercel API request to send an email.
 * Allows POST requests from the specified frontend URL (or any URL if no frontend URL is specified).
 * Returns a 405 error if the request method is not POST.
 * Returns a 400 error if the request body is missing required fields (firstName, email, subject, message).
 * Returns a 500 error if there is an error sending the email.
 *
 * @param {VercelRequest} request - Vercel request object
 * @param {VercelResponse} response - Vercel response object
 */
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const origin = request.headers.origin as string | undefined;
  const allowedOrigin = process.env.FRONTEND_URL || origin || '*';

  response.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  response.setHeader('Vary', 'Origin');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (request.method === 'OPTIONS') {
    return response.status(204).send('');
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { firstName, email, subject, message } = request.body;

    if (!firstName || !email || !subject || !message) {
      return response.status(400).json({ message: 'Missing required fields' });
    }

    const emailData = {
      // Use env with safe defaults for Resend test mode
      from: process.env.FROM_ADDRESS || 'onboarding@resend.dev',
      to: process.env.CONTACT_TO || 'nivo.rakoto@yahoo.fr',
      subject: `New message from ${firstName}: ${subject}`,
      replyTo: email,
      text: message,
      html: `<strong>From:</strong> ${firstName} <br/> <strong>Email:</strong> ${email} <br/> <strong>Message:</strong><p>${message}</p>`,
    };
 
    await sendEmail(emailData);

    return response.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error in API handler:', error);
    return response.status(500).json({ message: error.message || 'A server error has occurred' });
  }
}


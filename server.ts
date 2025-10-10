import express from 'express';
import cors from 'cors';
import { sendEmail } from './src/lib/email';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://new-portfolio-4bsv.vercel.app',
  process.env.FRONTEND_URL // Add your production frontend URL from .env
].filter(Boolean); // Filter out undefined values

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Route pour l'envoi d'email
  app.post('/api/send-email', async (req, res) => {
    try {
      const { from, to, subject, text, html, replyTo } = req.body;
      
      if (!from || !to || !subject || !text) {
        return res.status(400).json({ 
          success: false, 
          error: 'Tous les champs sont requis' 
        });
      }

      const resolvedFrom = process.env.FROM_ADDRESS || 'onboarding@resend.dev';
      const resolvedTo = process.env.CONTACT_TO || 'nivo.rakoto@yahoo.fr';
      console.log('[POST /api/send-email] Using From/To:', { from: resolvedFrom, to: resolvedTo });

      const result = await sendEmail({
      from: resolvedFrom,
      to: resolvedTo,
      subject,
      text,
      html: html || text,
      replyTo: replyTo || from
      });

    res.status(200).json(result);
  } catch (error) {
    console.error('Erreur serveur:', error);
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: errorMessage,
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
    });
  }
});

// Alias pour correspondre au chemin de la fonction Vercel et du frontend
  app.post('/api/sendEmail', async (req, res) => {
    try {
      const { firstName, email, subject, message } = req.body;

    if (!firstName || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

      const resolvedFrom = process.env.FROM_ADDRESS || 'onboarding@resend.dev';
      const resolvedTo = process.env.CONTACT_TO || 'nivo.rakoto@yahoo.fr';
      console.log('[POST /api/sendEmail] Using From/To:', { from: resolvedFrom, to: resolvedTo });

      const emailData = {
      from: resolvedFrom,
      to: resolvedTo,
      subject: `New message from ${firstName}: ${subject}`,
      replyTo: email,
      text: message,
      html: `<strong>From:</strong> ${firstName} <br/> <strong>Email:</strong> ${email} <br/> <strong>Message:</strong><p>${message}</p>`,
      };

    const result = await sendEmail(emailData);

    return res.status(200).json({ success: true, data: result?.data });
  } catch (error) {
    console.error('Erreur serveur:', error);
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: errorMessage,
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
    });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

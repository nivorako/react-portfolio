import express from 'express';
import cors from 'cors';
import { sendEmail } from './src/api/sendEmail';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Add your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Handle preflight requests
app.options('*', cors(corsOptions));

// Route pour l'envoi d'email
app.post('/api/send-email', async (req, res) => {
  // Set CORS headers for the response
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { from, to, subject, text, html, replyTo } = req.body;
    
    if (!from || !to || !subject || !text) {
      return res.status(400).json({ 
        success: false, 
        error: 'Tous les champs sont requis' 
      });
    }

    const result = await sendEmail({
      from: 'onboarding@resend.dev',
      to,
      subject,
      text,
      html: html || text,
      replyTo: replyTo || from
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Erreur serveur:', error);
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ 
      success: false, 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: errorMessage,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

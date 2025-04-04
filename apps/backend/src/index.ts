import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3002;

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://editai.app', 'https://www.editai.app']  // Production domains
    : ['http://localhost:3000'],                        // Development domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'],    // Allowed headers
  credentials: true                                     // Allow credentials
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'editai-backend' });
});

// Basic API endpoint
app.get('/api/v1/status', (req: Request, res: Response) => {
  res.json({
    status: 'operational',
    version: '1.0.0',
    serviceName: 'editai-video-processor',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
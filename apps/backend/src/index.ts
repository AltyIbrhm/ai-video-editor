import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

export const app = express();
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
  res.json({
    status: 'ok',
    service: 'editai-backend',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Basic API endpoint
app.get('/api/v1/status', (req: Request, res: Response) => {
  res.json({
    status: 'operational',
    version: '1.0.2',
    serviceName: 'editai-video-processor',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Only start the server if we're not in a test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
} 
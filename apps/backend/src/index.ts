import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;

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
    serviceName: 'editai-video-processor'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
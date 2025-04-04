import request from 'supertest';
import { app } from '../index';

describe('Health Check Endpoints', () => {
  it('should return ok status for /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      status: 'ok',
      service: 'editai-backend'
    });
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('environment');
  });

  it('should return status info for /api/v1/status', async () => {
    const response = await request(app).get('/api/v1/status');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'operational');
    // expect(response.body).toHaveProperty('version', '1.0.3');
    expect(response.body).toHaveProperty('serviceName', 'editai-backend');
    expect(response.body).toHaveProperty('environment');
    expect(response.body).toHaveProperty('timestamp');
  });
}); 
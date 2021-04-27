import request from 'supertest';
import { app } from '../app';

describe('Test indexController', () => {
  it('Request / should return Hey, my name is FileServer!', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Hey, my name is FileServer');
  });
});

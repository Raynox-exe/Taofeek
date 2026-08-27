const request = require('supertest');
const app = require('../server');

describe('GET /api/products', () => {
  it('responds with JSON array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

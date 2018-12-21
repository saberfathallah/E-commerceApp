import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';

describe('POST /login', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when succes login user', async () => {
    const body = {
      mail: 'saber@fat.fr',
      password: 'saber',
    };

    const response = await request(app.listen())
      .post('/login')
      .send(body);
    expect(response.status).toBe(200);
  });

  it('returns 400 when bad params', async () => {
    const body = {
      mail: 'saber@fat.fr',
      password: 555,
    };

    const response = await request(app.listen())
      .post('/login')
      .send(body);
    expect(response.status).toBe(400);
  });

  it('returns 401 when bad user', async () => {
    const body = {
      mail: 'saber@fat.fr',
      password: 'badpassword',
    };

    const response = await request(app.listen())
      .post('/login')
      .send(body);
    expect(response.status).toBe(401);
  });
});

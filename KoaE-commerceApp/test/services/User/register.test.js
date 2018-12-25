import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';

describe('POST /register', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when succes register user', async () => {
    const body = {
      data: {
        firstName: 'saber',
        lastName: 'fathallah',
        age: 27,
        type: 'admin',
        adress: ' eljem 5160',
        mail: 'saber@fat.fr',
        password: 'saber',
      },
    };

    const response = await request(app.listen())
      .post('/register')
      .send(body);

    expect(response.status).toBe(200);
  });

  it('returns 400 when bad params', async () => {
    const body = {
      data: {
        firstName: 'saber',
        lastName: 'fathallah',
        age: '27',
        type: 'admin',
        adress: ' eljem 5160',
        mail: 'saber@fat.fr',
        password: 'saber',
      },
    };
    const response = await request(app.listen())
      .post('/register')
      .send(body);

    expect(response.status).toBe(400);
  });
});

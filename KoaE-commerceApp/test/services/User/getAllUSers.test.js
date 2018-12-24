import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';

describe('GET /users', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when succes get all users', async () => {
    const response = await request(app.listen())
      .get('/users');
    expect(response.status).toBe(200);
  });
});

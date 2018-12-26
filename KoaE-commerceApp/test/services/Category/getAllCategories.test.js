import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';

describe('GET /categories', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when success get users', async () => {
    const response = await request(app.listen())
      .get('/categories');

    expect(response.status).toBe(200);
  });
});

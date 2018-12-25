import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';

describe('GET /categories', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when success get users', async () => {
    const userid = '5c1d0b0797494d2beccd64eb';
    const response = await request(app.listen())
      .get('/categories')
      .set({ userid });

    expect(response.status).toBe(200);
  });

  it('returns 422 when missing userid', async () => {
    const response = await request(app.listen())
      .get('/categories');
    expect(response.status).toBe(422);
  });
});

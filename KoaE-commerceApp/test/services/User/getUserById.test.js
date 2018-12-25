import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';
import User from '../../../src/db/models/user';

describe('GET /getUserByID', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  it('returns 200 when succes get user', async () => {
    await User.create({
      _id: '5b052c2d65955f397496b780',
      firstName: 'firstName',
      lastName: 'lastName',
      age: 25,
      type: 'superAdmin',
      adress: 'adress',
      mail: 'mail@test.fr',
      password: 'password',
    });

    const userId = '5b052c2d65955f397496b780';
    const userid = '5c1d0b0797494d2beccd64eb';
    const response = await request(app.listen())
      .get(`/users/${userId}`)
      .set({ userid });
    expect(response.status).toBe(200);
  });

  it('returns 422 when userid is missing', async () => {
    await User.create({
      _id: '5b052c2d65955f397496b789',
      firstName: 'firstName',
      lastName: 'lastName',
      age: 25,
      type: 'superAdmin',
      adress: 'adress',
      mail: 'mail@test.fr',
      password: 'password',
    });

    const userId = '5b052c2d65955f397496b788';

    const response = await request(app.listen())
      .get(`/users/${userId}`);
    expect(response.status).toBe(422);
  });

  it('returns 401 when id is invalid', async () => {
    await User.create({
      _id: '5b052c2d65955f397496b789',
      firstName: 'firstName',
      lastName: 'lastName',
      age: 25,
      type: 'superAdmin',
      adress: 'adress',
      mail: 'mail@test.fr',
      password: 'password',
    });

    const userId = '5b052c2d65955f397496b788';
    const userid = '5c1d0b0797494d2beccd64eb';

    const response = await request(app.listen())
      .get(`/users/${userId}`)
      .set({ userid });

    expect(response.status).toBe(401);
  });
});

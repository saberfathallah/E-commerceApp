import request from 'supertest';
import app from '../../../src/app';
import dbHelpers from '../../helpers/dbHelpers';
import Category from '../../../src/db/models/category';

describe('GET /getCategoryByID', () => {
  beforeAll(dbHelpers.beforeAll);
  beforeEach(dbHelpers.beforeEach);
  afterAll(dbHelpers.afterAll);

  //   it('returns 200 when succes get Category', async () => {
  //     await Category.create({
  //       _id: '5c221aec25dcb70368017980',
  //       name: 'categoryTest',
  //       level: 1,
  //     });

  //     const categoryId = '5c221aec25dcb70368017980';
  //     const userid = '5c1d0b0797494d2beccd64eb';
  //     const response = await request(app.listen())
  //       .get(`/categries/${categoryId}`)
  //       .set({ userid });
  //     expect(response.status).toBe(200);
  //   });

  it('returns 422 when userid is missing', async () => {
    await Category.create({
      _id: '5b052c2d65955f397496b780',
      name: 'categoryTest',
      level: 1,
    });

    const categoryId = '5b052c2d65955f397496b788';
    const response = await request(app.listen())
      .get(`/categories/${categoryId}`);

    expect(response.status).toBe(422);
  });

  it('returns 401 when params are invalid', async () => {
    await Category.create({
      _id: '5b052c2d65955f397496b780',
      name: 'categoryTest',
      level: '22',
    });

    const categoryId = '5b052c2d65955f397496b788';
    const userid = '5c1d0b0797494d2beccd64eb';

    const response = await request(app.listen())
      .get(`/categories/${categoryId}`)
      .set({ userid });

    expect(response.status).toBe(401);
  });
});

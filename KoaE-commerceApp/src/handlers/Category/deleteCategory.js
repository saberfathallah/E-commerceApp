import Category from '../../db/models/category';
import Product from '../../db/models/product';
import validateUserId from '../../utils/validateUserId';
import deleteProductsByCategory from '../../utils/deleteProductsByCategory';

async function deleteCategory(ctx) {
  validateUserId(ctx);
  const { categoryId } = ctx.request.body;
  try {
    const category = await Category.findOne({ _id: categoryId });
    if (!category) {
      ctx.status = 401;
    } else {
      const subCategories = await Category.find({ parentId: categoryId });
      if (subCategories.length !== 0) {
        // eslint-disable-next-line no-underscore-dangle
        Promise.all(subCategories.map(cat => deleteProductsByCategory(cat._id)));
      }
      await Product.deleteMany({ categoryId });
      await Category.deleteMany({ parentId: categoryId });
      await Category.deleteOne({ _id: categoryId });
      ctx.status = 200;
    }
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default deleteCategory;

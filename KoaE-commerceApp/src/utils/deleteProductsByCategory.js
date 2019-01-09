import Product from '../db/models/product';

async function deleteProductsByCategory(categoryId) {
  try {
    await Product.deleteMany({ categoryId });
  } catch (err) {
    console.log('err', err);
  }
}

export default deleteProductsByCategory;

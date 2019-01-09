import fetch from 'node-fetch';

async function deleteCategoryMicroService(categoryId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/categories`;
  const data = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ categoryId }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function deleteCategory(categoryId, userid) {
  const result = await deleteCategoryMicroService(categoryId, userid);
  if (result.status !== 200) {
    return { error: 'error delete category ' };
  }
  return { success: 'success deleted category' };
}

export default deleteCategory;

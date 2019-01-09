import Favorite from '../../db/models/favorite';

export async function addProductToListFavorite(data) {
  try {
    const favorite = await Favorite.create(data)
    return favorite;
  } catch (error) {
    console.log('error add', error)
    return error;
    }
};
import Favorite from '../../db/models/favorite';
import validateUserId from '../../utils/validateUserId';

async function getFavoriteList(req, res) {
  validateUserId(req, res);
  try {
    const listFavorite = await Favorite.find({ userId: req.headers.userid });
    res.status(200).json(listFavorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default getFavoriteList;

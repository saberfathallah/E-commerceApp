import express from 'express';
import addProductToListFavorite from '../../services/favorites/addProductToListFavorite';
import verifyParams from '../../utils/verifyParams';

const routesFavorite = express.Router();
routesFavorite.post('/add', async (req, res) => {
  const data = req.body;
  verifyParams(res, data);
  addProductToListFavorite(data).then((result) => {
    const msg = 'Insert successfully!';
    return res.status(200).json({ message: msg, data: result });
  }).catch(error => res.status(400).json({ error }));
  return true;
});

export default routesFavorite;

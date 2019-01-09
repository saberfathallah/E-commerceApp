import express from 'express';
import { favoriteHandlers } from '../handlers';

const routesFavorite = express.Router();
routesFavorite.post('/', async (req, res) => favoriteHandlers.addProductToListFavorite(req, res));
routesFavorite.get('/', async (req, res) => favoriteHandlers.getFavoriteList(req, res));
routesFavorite.delete('/', async (req, res) => favoriteHandlers.deleteFavorite(req, res));
export default routesFavorite;

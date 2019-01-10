import express from 'express';
import { cartHandlers } from '../handlers';

const routesCart = express.Router();
routesCart.post('/', async (req, res) => cartHandlers.addProductToCart(req, res));
routesCart.get('/', async (req, res) => cartHandlers.currentCart(req, res));
routesCart.delete('/', async (req, res) => cartHandlers.deleteCart(req, res));
export default routesCart;

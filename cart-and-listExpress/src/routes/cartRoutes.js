import express from 'express';
import { cartHandlers } from '../handlers';

const routesCart = express.Router();
routesCart.post('/', async (req, res) => cartHandlers.addProductToCart(req, res));
export default routesCart;

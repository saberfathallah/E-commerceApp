import express from 'express';
import { orderHandlers } from '../handlers';

const routesOrder = express.Router();
routesOrder.post('/', async (req, res) => orderHandlers.createOrder(req, res));
routesOrder.get('/', async (req, res) => orderHandlers.getAllOrders(req, res));
export default routesOrder;

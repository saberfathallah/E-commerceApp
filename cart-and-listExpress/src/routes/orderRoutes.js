import express from 'express';
import { orderHandlers } from '../handlers';

const routesOrder = express.Router();
routesOrder.post('/', async (req, res) => orderHandlers.createOrder(req, res));
routesOrder.get('/', async (req, res) => orderHandlers.getAllOrders(req, res));
routesOrder.get('/:orderId', async (req, res) => orderHandlers.getOrderById(req, res));
routesOrder.get('/billsEdit/:orderId', async (req, res) => orderHandlers.billsEdit(req, res));
export default routesOrder;

import express from 'express';
import { statisticsHanlers } from '../handlers';

const routesStatistics = express.Router();
routesStatistics.get('/topUserCommandes', async (req, res) => statisticsHanlers.topUserCommandes(req, res));
export default routesStatistics;

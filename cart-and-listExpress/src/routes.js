import routesFavorite from './routes/favoritesRoutes';
import routesCart from './routes/cartRoutes';
import routesOrder from './routes/orderRoutes';
import routesStatistics from './routes/statisticsRoutes';

export default (app) => {
  app.use('/favorites', routesFavorite);
  app.use('/cart', routesCart);
  app.use('/orders', routesOrder);
  app.use('/statistics', routesStatistics);
};

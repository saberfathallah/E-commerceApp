import routesFavorite from './routes/favoritesRoutes';
import routesCart from './routes/cartRoutes';
import routesOrder from './routes/orderRoutes';

export default (app) => {
  app.use('/favorites', routesFavorite);
  app.use('/cart', routesCart);
  app.use('/orders', routesOrder);
};

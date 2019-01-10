import routesFavorite from './routes/favoritesRoutes';
import routesCart from './routes/cartRoutes';

export default (app) => {
  app.use('/favorites', routesFavorite);
  app.use('/cart', routesCart);
};

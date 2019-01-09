import routesFavorite from './routes/favorites/favoritesRoutes';

export default (app) => {
  app.use('/favorites', routesFavorite);
};

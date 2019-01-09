import routesFavorite from './routes/favoritesRoutes';

export default (app) => {
  app.use('/favorites', routesFavorite);
};

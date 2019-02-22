import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import Route from 'koa-route';
import { userHandlers, categoryHandlers, productHandlers } from './handlers';

const app = new Koa();

app.use(bodyParser());

app.use(koaJsonError({
  postFormat: err => console.log(`error:${err}`),
}));

app.use(Route.post('/register', userHandlers.register));
app.use(Route.post('/login', userHandlers.login));
app.use(Route.get('/users', userHandlers.getAllUsers));
app.use(Route.get('/users/:userId', userHandlers.getUserById));
app.use(Route.delete('/users', userHandlers.deleteUser));
app.use(Route.get('/clients', userHandlers.getAllClients));
app.use(Route.post('/sendInvitation', userHandlers.sendInvitation));
app.use(Route.get('/getAllInvitation', userHandlers.getAllInvitation));
app.use(Route.get('/getListOfFriends', userHandlers.getListOfFriends));
app.use(Route.delete('/annulateInvitation', userHandlers.annulateInvitation));
app.use(Route.delete('/refuseInvitation', userHandlers.refuseInvitation));
app.use(Route.post('/acceptInvitation', userHandlers.acceptInvitation));
app.use(Route.get('/getListOfClientsInvited', userHandlers.getListOfClientsInvited));

app.use(Route.post('/categories', categoryHandlers.addCategory));
app.use(Route.get('/categories', categoryHandlers.getAllCategories));
app.use(Route.get('/categories/:categoryId', categoryHandlers.getCategoryById));
app.use(Route.get('/allCategories/:categoryId', categoryHandlers.getCategoriesByParentId));
app.use(Route.delete('/categories', categoryHandlers.deleteCategory));
app.use(Route.put('/categories/:categoryId', categoryHandlers.updateCategory));

app.use(Route.post('/products', productHandlers.addProduct));
app.use(Route.get('/products', productHandlers.getAllProducts));
app.use(Route.delete('/products', productHandlers.deleteProduct));
app.use(Route.get('/products/:productId', productHandlers.getProductById));
app.use(Route.put('/products/:productId', productHandlers.updateProduct));
app.use(Route.get('/productsByCategory/:categoryId', productHandlers.getProductsByCategoryId));
app.use(Route.put('/products/topSales/:productId', productHandlers.modifyTopSales));
app.use(Route.put('/rating/:productId', productHandlers.modifyRatingProduct));
app.use(Route.get('/getTopSales', productHandlers.getTopSales));

app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

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

app.use(Route.post('/categories', categoryHandlers.addCategory));
app.use(Route.get('/categories', categoryHandlers.getAllCategories));
app.use(Route.get('/categories/:categoryId', categoryHandlers.getCategoryById));
app.use(Route.get('/allCategories/:categoryId', categoryHandlers.getCategoriesByParentId));

app.use(Route.post('/products', productHandlers.addProduct));
app.use(Route.get('/products', productHandlers.getAllProducts));
app.use(Route.delete('/products', productHandlers.deleteProduct));
app.use(Route.get('/products/:productId', productHandlers.getProductById));
app.use(Route.put('/products/:productId', productHandlers.updateProduct));
app.use(Route.get('/productsByCategory/:productId', productHandlers.getProductsByCategoryId));

app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

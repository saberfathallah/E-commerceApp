import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import Route from 'koa-route';
import { userHandlers, categoryHandlers } from './handlers';

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

app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import Route from 'koa-route';
import userHandlers from './handlers';

const app = new Koa();

app.use(bodyParser());

app.use(koaJsonError({
  postFormat: err => console.log(`error:${err}`),
}));

app.use(Route.post('/register', userHandlers.register));
app.use(Route.post('/login', userHandlers.login));


app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import Route from 'koa-route';
import register from './handlers/User/register';

const app = new Koa();

app.use(bodyParser());

app.use(koaJsonError({
  postFormat: err => console.log(`error:${err}`),
}));

app.use(Route.post('/register', register));


app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

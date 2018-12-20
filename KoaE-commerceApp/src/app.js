import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';
import Route from 'koa-route';
import register from './handlers/User/register';

const app = new Koa();

app.use(bodyParser());

app.use(koaJsonError({
  /* Remove stack trace from http errors */
  postFormat: (err, obj) => omit(obj, 'stack'),
}));

app.use(Route.post('/register', register));


app.on('error', (err) => {
    console.log(`server error ${err}`);
});
  
export default app;
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaJsonError from 'koa-json-error';

const app = new Koa();

app.use(bodyParser());

app.use(koaJsonError({
  /* Remove stack trace from http errors */
  postFormat: (err, obj) => omit(obj, 'stack'),
}));

app.on('error', (err) => {
    console.log(`server error ${err}`);
});
  
export default app;
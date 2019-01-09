import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;

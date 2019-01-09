import dotenv from 'dotenv';
import db from './db/index';
import app from './app';

dotenv.config();
const PORT = process.env.APPLICATION_PORT;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
  db.initialize();
});

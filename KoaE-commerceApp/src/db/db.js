import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function initializeDb() {
  mongoose.connection
    .on('error', (error) => console.log(`error: ${error}`))
    .on('close', () => console.log('mongoDB closed'))
    .once('open', () => console.log('mongoDB connected'));
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}

function disconnectDb() {
    mongoose.disconnect();
  }
  
  export default {
    initialize: initializeDb,
    disconnect: disconnectDb,
  };
  
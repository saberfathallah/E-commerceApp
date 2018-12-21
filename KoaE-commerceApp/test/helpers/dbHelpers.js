import mongoose from 'mongoose';

const { name } = require('../../package.json');

global.serviceName = name;

mongoose.Promise = global.Promise;

function beforeEach(done) {
  mongoose.connection.dropDatabase(done);
}

function beforeAll(done) {
  mongoose.connect('mongodb://localhost:27017/e-commerceDb-TEST', done);
}

function afterAll(done) {
  mongoose.disconnect(done);
}

export default {
  beforeAll,
  afterAll,
  beforeEach,
};

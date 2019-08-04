const mongoose = require('mongoose');
require('dotenv').config();

// mocha hook, executa uma vez antes de começar os testes
before(done => {
  // Connection to mongodb
  mongoose.connect(String(process.env.MONGO_CONNECTION), {
    useNewUrlParser: true,
    useFindAndModify: false
  });

  mongoose.connection
    .once('open', () => {
      console.log('Connection up, server ready to use.');
      done();
    })
    .on('error', err => {
      console.log('Connetion error');
    });
});

// Drop the characters collection before each test
beforeEach(done => {
  // drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});

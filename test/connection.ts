import mongoose from 'mongoose';
require('dotenv').config();

// Connection to mongodb
mongoose.connect(String(process.env.MONGO_CONNECTION), {
  useNewUrlParser: true
});

mongoose.connection
  .once('open', () => {
    console.log('Connection up, server ready to use.');
  })
  .on('error', err => {
    console.log('Connetion error');
  });

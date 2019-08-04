const assert = require('assert');
const MarioChar = require('../model/mariochar');

describe('Finding tests', function() {
  let char;

  beforeEach(done => {
    char = new MarioChar({ name: 'Mario', weight: 50 });

    char.save().then(function() {
      done();
    });
  });

  it('Finds one record from the database', done => {
    MarioChar.findOne({ name: 'Mario' }).then(result => {
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds one record by id from the database', done => {
    MarioChar.findOne({ _id: char._id }).then(result => {
      assert(result._id.equals(char._id));
      done();
    });
  });
});

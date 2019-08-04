const assert = require('assert');
const MarioChar = require('../model/mariochar');

describe('Removing tests', function() {
  let char;

  beforeEach(done => {
    char = new MarioChar({ name: 'Mario', weight: 50 });

    char.save().then(function() {
      done();
    });
  });

  it('Update a record from database', done => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then(result => {
          assert(result.name === 'Luigi');
          done();
        });
      }
    );
  });

  it('Increment weights by 2', done => {
    MarioChar.update({}, { $inc: { weight: 2 } }).then(() => {
      MarioChar.findOne({ name: 'Mario' }).then(result => {
        assert(result.weight === 52);
        done();
      });
    });
  });
});

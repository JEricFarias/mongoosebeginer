const assert = require('assert');
const MarioChar = require('../model/mariochar');

// discribe tests
describe('Saving records', () => {
  // create tests
  it('Saves a record to the database', done => {
    const char = new MarioChar({ name: 'Mario', weight: 50 });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});

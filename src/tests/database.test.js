
const test = require('tape');
const app = require('../app');
const functions = require('../model/queries/notes.js');

test('get notes', (t) => {
  functions.getNotes(2, (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      var actual = res[0];
      var expected = {
        id: 2,
        content: 'you have nice haircut',
        user_id: 2 };
      t.deepEqual(actual, expected, 'should return an object with you have nice haircut for Ahmed95 ');
      t.end();
    }
  });
});

test('add notes', (t) => {
  functions.addNote(2, 'new note for test', (err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      functions.getNotes(2, (newErr, newRes) => {
        if (newErr) {
          console.log(newErr);
        } else {
          var actual = newRes[newRes.length - 1].content;
          t.deepEqual(actual, 'new note for test', 'should return an object with testtestestes for Ahmed95 ');
          t.end();
        }
      });
    }
  });
});

test.onFinish(() => process.exit(0));

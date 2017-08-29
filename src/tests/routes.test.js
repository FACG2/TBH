const test = require('tape');
const request = require('supertest');
const app = require('./../server');


test('Should be able to get a note by him id', t => {
  const users = [1, 2, 3, 4];
  users.forEach((user, index) => {
    request(app)
      .get(`/notes/${user}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.same(res.statusCode, 200, 'Status code is 200');
        t.error(err, 'No error');
        // t.same(res.body[0].firstname, name, `Name is ${name} as expected`);
        if (users.length - 1 === index) {
          t.end();
        }
      });
  });
});
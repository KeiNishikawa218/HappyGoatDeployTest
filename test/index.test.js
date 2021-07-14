const request = require('supertest');
const app = require('../app');

// ConnectionPoolが発生するが、mochaにexit(--exit)オプションを付けると解消される
describe("GET /", function () {   
    it("welcomes the user", function (done) {
        request(app)
            .get("/")
            .expect(200, done);
    });
});

describe("GET /new", function () {
    it("you can write a letter", function (done) {
        request(app)
            .get("/new")
            .expect(200, done);
    });
});



//SQLをテストするときは関数に切り出す？
const request = require('supertest');
const sinon = require('sinon');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

const connection = require('../lib/mysql_module.js');

// ConnectionPoolが発生するが、mochaにexit(--exit)オプションを付けると解消される
describe("GET /", function () {   
    it("welcomes the user", function (done) {
        request(app)
            .get("/")
            .expect(200, done);
    });
});

describe("GET /letters/new", function () {
    it("you can write a letter", function (done) {
        request(app)
            .get("/letters/new")
            .expect(200, done);
    });
});

describe("GET /letters/1", function () {   
    it("you can see a letter", function (done) {
        request(app)
            .get("/letters/1")
            .expect(200, done);
    });
});

describe("Establish SQL Connection", function () {
    it("connect to SQL server", function (done) {
        connection.sql_statment('SELECT * FROM letters')
            .then(result => {
                console.log(result[0]);
                expect(result[0]['id']).to.match(/\d+/);
            }).then(done, done);
    });
});

            

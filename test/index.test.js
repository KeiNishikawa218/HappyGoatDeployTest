const request = require('supertest');
const sinon = require('sinon');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

const connection = require('../lib/mysql_module.js');

// ConnectionPoolが発生するが、mochaにexit(--exit)オプションを付けると解消される
describe("GET /", () =>  {   
    it("welcomes the user", done => {
        request(app)
            .get("/")
            .expect(200, done);
    });
});

describe("GET /letters/new", () => {
    it("you can write a letter", done =>  {
        request(app)
            .get("/letters/new")
            .expect(200, done);
    });
});

describe("GET /letters/1", () => {   
    it("you can see a letter", done =>  {
        request(app)
            .get("/letters/1")
            .expect(200, done);
    });
});

describe("Establish SQL Connection", () => {
    it("connect to SQL server", done =>  {
        connection.sql_statment('SELECT * FROM letters')
            .then(result => {
                expect(result[0]['id']).to.match(/\d+/);
            }).then(done, done);
    });
});

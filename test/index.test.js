var request = require('supertest')
    , app = require('../app');

// TODO:indexをテストする場合はプログラムが終わらない
// SQLが原因だと思うので調べる

// describe("GET /", function () {
//     it("welcomes the user", function (done) {
//         request(app).get("/")
//             .expect(200, done)
//     })
// })

describe("GET /new", function () {
    it("welcomes the user", function (done) {
        request(app).get("/new")
            .expect(200, done)
    })

})
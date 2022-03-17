"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var server = require("../app");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
describe("check user data", function () {
    it("get user", function (done) {
        chai
            .request(server)
            .get("/user")
            .end((err, response) => {
            expect(response.status).to.be.equal(200).expect("Content-Type", /json/);
            done();
        });
    });
});
//# sourceMappingURL=test.user.spec.js.map
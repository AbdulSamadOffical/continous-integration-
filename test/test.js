const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Continous integration", (done) => {
    request(app).get("/").expect("Continous integration", done);
  });
});

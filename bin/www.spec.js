const request = require("supertest");

const server = require("../app");

describe("GET /", () => {
  it("should return 200 OK", async function() {
    await request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("API up and running", async () => {
    await request(server)
      .get("/")
      .then(res => {
        expect(res.body).toEqual({
          Server: "Hi, I'm your Server.  Can I start you off with a drink?"
        });
      });
  });

  it("API up and running with JSON", async () => {
    await request(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});

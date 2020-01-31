const request = require("supertest");
const app = require("../../app");

describe("Jokes route", () => {
  it("should return 401 error", async () => {
    await request(app)
      .get("/api/jokes")
      .then(res => {
        expect(res.status).toBe(401);
      });
  });

  it("should return JSON", async () => {
    await request(app)
      .get("/api/jokes")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});

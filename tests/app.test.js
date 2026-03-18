const app = require("../index");
const request = require("supertest");

test("GET / should return message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("CI/CD Pipeline Working 🚀");
});

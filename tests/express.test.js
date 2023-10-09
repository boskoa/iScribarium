const supertest = require("supertest");
const app = require("../app");

describe("Testing the root path", () => {
  test("Correct status code", async () => {
    const response = await supertest(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Testing the testRouter", () => {
  test("Correct response data", async () => {
    const response = await supertest(app).get("/api/test");
    expect(response.text).toContain("HAI MARK");
  });
});

describe("Testing the articles router", () => {
  test("Returns an article", async () => {
    const response = await supertest(app).get("/api/articles");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].title).toBeDefined();
  });
});

describe("Testing the authors router", () => {
  test("Returns an author", async () => {
    const response = await supertest(app).get("/api/authors");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].username).toBeDefined();
  });
});

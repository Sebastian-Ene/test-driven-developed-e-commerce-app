const request = require("supertest");
const app = require("../src/app");

describe("/products", () => {
  it("should return products json", async () => {
    const res = await request(app).get("/api/products");
    expect(res.body).toBe("<h1>Hello world!</h1>");
  });
  it("should have status 200", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
  });
});

describe("/products/productId", () => {
  it("should return products json", async () => {
    const res = await request(app).get("/api/products");
    expect(res.body).toBe("<h1>Hello world!</h1>");
  });
  it("should have status 200", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
  });
});

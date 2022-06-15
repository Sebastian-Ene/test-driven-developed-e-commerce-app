const request = require("supertest");
const app = require("../src/app");

describe("/ end point", () => {
    it("should have status 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
    });
    it("should return <h1>Hello world!</h1>", async () => {
        const res = await request(app).get("/");
        expect(res.text).toBe("<h1>Hello world!</h1>");
    });
});

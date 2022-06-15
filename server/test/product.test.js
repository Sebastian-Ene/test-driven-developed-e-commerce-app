const request = require("supertest");
const app = require("../src/app");

describe("/courses", () => {
    it("should return courses json", async () => {
        const res = await request(app).get("/api/courses");
        expect(res.body).toBe("<h1>Hello world!</h1>");
    });
    it("should have status 200", async () => {
        const res = await request(app).get("/api/courses");
        expect(res.statusCode).toEqual(200);
    });
});

describe("/courses/courseId", () => {
    it("should return courses json", async () => {
        const res = await request(app).get("/api/courses");
        expect(res.body).toBe("<h1>Hello world!</h1>");
    });
    it("should have status 200", async () => {
        const res = await request(app).get("/api/courses");
        expect(res.statusCode).toEqual(200);
    });
});

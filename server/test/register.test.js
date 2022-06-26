const request = require("supertest");
const app = require("../src/app");

describe("Positive Register /api/user/register ", () => {
    it("should have status 201", async () => {
        const res = await request(app)
            .post("/api/user/register")
            .send({
                email: `${Math.random().toFixed(5)}@mii.imgag.com`,
                password: "pass",
                name: "Jest",
            });
        expect(res.statusCode).toEqual(201);
    });
    it("should return email match with init email", async () => {
        email = `${Math.random().toFixed(5)}@mii.imgag.com`;
        const res = await request(app).post("/api/user/register").send({
            email: email,
            password: "pass",
            name: "Jest",
        });
        expect(res.body.email).toEqual(email);
    });
    it("should return name = to init name", async () => {
        email = `${Math.random().toFixed(5)}@mii.imgag.com`;
        const res = await request(app).post("/api/user/register").send({
            email: email,
            password: "pass",
            name: "Jest",
        });

        expect(res.body.name).toEqual("Jest");
    });
    it("should return a jwt", async () => {
        email = `${Math.random().toFixed(5)}@mii.imgag.com`;
        const res = await request(app).post("/api/user/register").send({
            email: email,
            password: "pass",
            name: "Jest",
        });
        expect(res.body.accessToken).not.toBe(undefined);
        expect(res.body.accessToken).not.toBe(null);
        expect(res.body.accessToken).not.toBe("");
    });
});

const request = require("supertest");
const app = require("../src/app");
const dbpool = require("../src/db/dbpool");

describe("Positive Sign In /api/user/signin ", () => {
    it("should have status 200", async () => {
        const res = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        expect(res.statusCode).toEqual(200);
    });
    it("should return isPassMatch: true", async () => {
        const res = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        expect(res.body.isPassMatch).toEqual(true);
    });
    it("should return name = to name from db", async () => {
        const email = "sebi@mii.imgag.com";
        const res = await request(app).post("/api/user/signin").send({
            email: email,
            password: "pass",
        });
        const db_name = await dbpool.query(
            `SELECT username FROM users WHERE email = '${email}'`
        );
        expect(res.body.name).toEqual(db_name.rows[0].username);
    });
    it("should return a jwt", async () => {
        const res = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        expect(res.body.accessToken).not.toBe(undefined);
        expect(res.body.accessToken).not.toBe(null);
        expect(res.body.accessToken).not.toBe("");
    });
});

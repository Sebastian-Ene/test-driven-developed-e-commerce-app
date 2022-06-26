const request = require("supertest");
const app = require("../src/app");
const dbpool = require("../src/db/dbpool");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../src/utils/secrets").jwtSecret;

describe("Positive Orders /api/user/orders ", () => {
    it("should have status 200", async () => {
        const jwtres = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        const jwt = jwtres.body.accessToken;
        const res = await request(app)
            .get("/api/user/orders")
            .set("Authorization", `Bearer ${jwt}`);
        expect(res.statusCode).toEqual(200);
    });
    it("should return orders from DB", async () => {
        const jwtres = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        const jwtoken = jwtres.body.accessToken;
        const tokenData = jwt.verify(jwtoken, jwtSecret);
        const res = await request(app)
            .get("/api/user/orders")
            .set("Authorization", `Bearer ${jwt}`);
        dbOrders = dbpool.query(
            `SELECT * FROM orders join courses using(course_id) WHERE user_id=${tokenData.id}`
        );
        expect(res.body.orders).toEqual(dbOrders.rows);
    });
});

describe("Negative Orders /api/user/orders ", () => {
    it("should have status 401 for bad token", async () => {
        const jwt = "badToken";
        const res = await request(app)
            .get("/api/user/orders")
            .set("Authorization", `Bearer ${jwt}`);
        expect(res.statusCode).toEqual(401);
    });
    it("should have status 401 if missing token", async () => {
        const res = await request(app).get("/api/user/orders");
        expect(res.statusCode).toEqual(401);
    });
});

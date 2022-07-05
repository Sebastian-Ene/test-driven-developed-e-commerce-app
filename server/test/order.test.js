const request = require("supertest");
const app = require("../src/app");

describe("Positive Buy Order /api/user/order ", () => {
    it("should have status 201", async () => {
        const jwtres = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        const jwt = jwtres.body.accessToken;
        const res = await request(app)
            .post("/api/user/order")
            .set("Authorization", `Bearer ${jwt}`)
            .send({
                course_id: 1,
                payment_completed: true,
            });
        expect(res.statusCode).toEqual(201);
    });
    it("should return orders from DB", async () => {
        const jwtres = await request(app).post("/api/user/signin").send({
            email: "sebi@mii.imgag.com",
            password: "pass",
        });
        const jwtoken = jwtres.body.accessToken;
        const res = await request(app)
            .post("/api/user/order")
            .set("Authorization", `Bearer ${jwtoken}`)
            .send({
                course_id: 1,
                payment_completed: true,
            });

        expect(res.body).toEqual({ status: "success" });
    });
});

describe("Negative Orders /api/user/orders ", () => {
    it("should have status 401 for bad token", async () => {
        const jwt = "badToken";
        const res = await request(app)
            .post("/api/user/order")
            .set("Authorization", `Bearer ${jwt}`);
        expect(res.statusCode).toEqual(401);
    });
    it("should have status 401 if missing token", async () => {
        const res = await request(app).post("/api/user/order");
        expect(res.statusCode).toEqual(401);
    });
});

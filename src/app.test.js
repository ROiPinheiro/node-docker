import request from "supertest";
import { app } from "./app.js";

describe("Route tests", () => {
  test("should return 200 on request root", (done) => {
    request(app).get("/").expect(200, done);
  });
});

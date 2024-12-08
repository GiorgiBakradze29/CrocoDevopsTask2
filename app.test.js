const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, CI/CD with Docker!");
});

describe("GET /", () => {
  it("responds with Hello, CI/CD with Docker!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, CI/CD with Docker!");
    expect(response.statusCode).toBe(200);
  });
});

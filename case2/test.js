const test = require("node:test");
const assert = require("node:assert");

test("the weather API should return the current weather", async (t) => {
  const fastify = require("fastify")({ logger: true });
  const route = require("./route");

  fastify.register(route);

  const response = await fastify.inject({
    method: "GET",
    url: "/?city=Seattle",
  });

  // use the assert module to verify the server's response
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"],
    "application/json; charset=utf-8"
  );
  assert.strictEqual(response.payload, '{"weather":"Rainy"}');

  fastify.close();
});

test("the weather API should return the current weather but dont call the real API because its expensive", async (t) => {
  const fastify = require("fastify")({ logger: false });
  const route = require("./route");

  fastify.register(route);

  const config = require("./config");
  config.WEATHER_API_URL = "https://api.example.com/FAKE-WEATHER-API";

  const response = await fastify.inject({
    method: "GET",
    url: "/?city=Seattle",
  });

  // use the assert module to verify the server's response
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"],
    "application/json; charset=utf-8"
  );
  assert.strictEqual(response.payload, '{"weather":"Rainy"}');

  fastify.close();
});

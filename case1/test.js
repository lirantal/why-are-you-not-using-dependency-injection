const test = require("node:test");
const assert = require("node:assert");

test("the users route should return a list of users", async (t) => {
  const fastify = require("fastify")({ logger: true });
  const route = require("./route");

  fastify.register(route);

  const response = await fastify.inject({
    method: "GET",
    url: "/?location=London",
  });

  // use the assert module to verify the server's response
  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.headers["content-type"],
    "application/json; charset=utf-8"
  );
  assert.strictEqual(
    response.payload,
    '[{"name":"John","location":"London"},{"name":"Fred","location":"London"}]'
  );

  fastify.close();
});

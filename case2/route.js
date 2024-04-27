const { getWeather } = require("./service");

async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    const city = request.query.city;
    const weather = await getWeather({ city });
    return reply.send({ weather });
  });
}

module.exports = routes;

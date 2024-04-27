const { getUsersLocation } = require("./service");

async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    const location = request.query.location;
    const users = await getUsersLocation({ location });
    return reply.send(users);
  });
}

module.exports = routes;

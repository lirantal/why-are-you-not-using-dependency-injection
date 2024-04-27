const fastify = require("fastify")({ logger: true });
const route = require("./route");

fastify.register(route);

fastify.listen({ host: "localhost", port: 4000 }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});

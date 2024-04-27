const config = require("./config");
const fastify = require("fastify")({ logger: true });
const route = require("./route");

fastify.register(route);

fastify.listen({ host: "localhost", port: config.PORT }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});

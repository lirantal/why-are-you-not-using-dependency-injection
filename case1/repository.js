const db = require("./db")();

module.exports.findByLocation = async ({ location }) => {
  const users = await db.users.find();
  const usersInLocation = users.filter((user) => user.location === location);
  return usersInLocation;
};

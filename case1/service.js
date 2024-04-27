const UserRepository = require("./repository");

module.exports.getUsersLocation = async ({ location }) => {
  const users = await UserRepository.findByLocation({ location });
  return users;
};

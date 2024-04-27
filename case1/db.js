function db() {
  return {
    users: {
      find: () => {
        return [
          {
            name: "John",
            location: "London",
          },
          {
            name: "Jane",
            location: "Paris",
          },
          {
            name: "Fred",
            location: "London",
          },
        ];
      },
    },
  };
}

module.exports = db;

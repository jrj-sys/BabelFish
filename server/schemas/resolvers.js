const { User } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find({});
    }
  },
  Mutation: {
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    }
  }
};

module.exports = resolvers;


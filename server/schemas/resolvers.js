const { User, Conversation, Message } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find({});
    },
    // get all convos
    conversations: async () => {
      return Conversation.find({});
    },
    // get all messages
    messages: async () => {
      return Message.find({});
    }
  },
  Mutation: {
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    addConversation: async (parent, args) => {
      const conversation = await Conversation.create(args);
      return conversation
    },
    addMessage: async (parent, args) => {
      const message = await Message.create(args);
      return message;
    }
  }
};

module.exports = resolvers;


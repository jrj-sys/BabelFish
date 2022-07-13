const { User, Conversation, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // logged in User data
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('')
          .populate('contacts')
          .populate('conversations')

        return userData
      }
      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find({})
        .populate('contacts')
    },
    // get user by username
    user: async (_, { username }) => {
      return User.findOne({ username })
    },
    // get all convos
    conversations: async () => {
      return Conversation.find({})
    },
    // get all messages
    messages: async () => {
      return Message.find({});
    }
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      // if no user found, throw Error instead of ending server connection
      if (!user) {
        throw new AuthenticationError('Incorrect credentials.');
      }

      const correctPw = await user.isCorrectPassword(password);
      // if pw incorrect, throw Error instead of ending server connection
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials.');
      }

      const token = signToken(user)

      return { token, user }
    },
    // add a user
    addUser: async (_, args) => {
      const user = await User.create(args);
      // sign jwt token on creation
      const token = signToken(user);

      return { token, user }
    },
    startConversation: async (_, args, context) => {
      const conversation = await Conversation.create({ args });

      return conversation;
    },
    addMessage: async (_, args) => {
      const message = await Message.create(args);

      return message;
    }
  }
};

module.exports = resolvers;


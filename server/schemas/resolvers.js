const { User, Conversation, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // logged in User data
    me: async (parent, args, context) => {
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials.');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials.');
      }

      const token = signToken(user)

      return { token, user } 
    },
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // sign jwt token on creation
      const token = signToken(user);

      return { token, user }
    },
    startConversation: async (parent, args, context) => {
      if (context.user) {
      const conversation = await Conversation.create(...args)

      return conversation
      }
    },
    addMessage: async (parent, args) => {
      const message = await Message.create(args);
      return message;
    }
  }
};

module.exports = resolvers;


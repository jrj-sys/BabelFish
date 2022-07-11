const { User, Conversation, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //show the login User
    // me: async (parent, args, context) => {
    //   const userData = await User.findOne({ _id: context.user._id })
    //     .select('')
    //     .populate('contacts')
    //     .populate('conversations')
    // },

    // get all users
    users: async () => {
      return User.find({});
    },

    // get all convos
    conversations: async () => {
      return Conversation.find({});
    },

    // get all messages (might not need this since its pulled from conversation)
    messages: async () => {
      return Message.find({});
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user)

      return { token, user } 
    },
    // add a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    addConversation: async (parent, { members, receiver, sender }, context) => {

      //needs to be edited to get the receiverId

      const conversation = await Conversation.create(
        { _id: context.user._id },
        { $push: { members: [sender, receiver] } },
        { new: true }
      ).populate('members')

      return conversation
    },

    addMessage: async (parent, args) => {
      const message = await Message.create(args);
      return message;
    }
  }
};

module.exports = resolvers;


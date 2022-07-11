const { User, Conversation, Message } = require('../models');

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
    login: {},
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


const { Schema, model } = require('mongoose');
const { User } = require('./User')

const ConversationSchema = new Schema(
  {
    hostId: {
      type: String,
      ref: 'User'
    },
    guestId: {
      type: String,
      ref: 'User'
    },
    messages: [
      {
        type: String,
        ref: 'Message'
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

const Conversation = model('Conversation', ConversationSchema);

module.exports = Conversation;
const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
  {
    conversationId: {
      type: String,
      ref: 'Conversation'
    },
    senderId: {
      type: String,
      ref: 'User'
    },
    messageText: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

const Message = model('Message', MessageSchema);

module.exports = Message;
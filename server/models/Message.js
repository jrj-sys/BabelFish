const { Schema, model } = require('mongoose');
const { User } = require('./User')

const MessageSchema = new Schema(
  {
    conversationId: {
      type: String,
      ref: 'User'
    },
    sender: {
      type: String
    },
    text: {
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
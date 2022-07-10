const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema(
  {
    members: [
      {
        type: String,
        ref: 'User'
      }
    ],
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
const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema(
  {
    members: {
      type: Array,
      required: true
    },
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
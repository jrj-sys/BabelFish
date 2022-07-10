const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
  {
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
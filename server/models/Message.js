const { Schema, model, Types } = require('mongoose');

const MessageSchema = new Schema(
  {
    // sender that references User 
    user: {
      type: Schema.Types.ObjectId,
      references: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Message = model('Message', MessageSchema);

module.exports = Message;
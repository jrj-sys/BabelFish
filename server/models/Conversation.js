const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    messageId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    messageBody: {
      type: String,
      required: true,
      trim: true
    },
    writtenBy: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

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
    messages: [MessageSchema]
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
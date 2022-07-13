const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    preferredLang: {
      type: String,
      required: true,
      default: 'en'
    },
    profilePic: {
      type: String,
      // default pic for no picture associated
      default: 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'
    },
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    conversations: [
      {
        type: String,
        ref: 'Conversation'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// password middleware
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
})

userSchema.methods.isCorrectPassword = async function (pw) {
  return bcrypt.compare(pw, this.password);
}

// virtual for contact list
userSchema.virtual('contactCount').get(function () {
  return this.contacts.length;
});

const User = model('User', userSchema);

module.exports = User;
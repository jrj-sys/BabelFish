const { Schema, model } = require('mongoose');

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
      // match: [[/.+@.+\..+/, 
      // `Must match an email address! 
      // ¡Debe coincidir con una dirección de correo electrónico!
      // Doit correspondre à une adresse e-mail !
      // 必须匹配电子邮件地址!`]]
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    preferredLang: {
      type: String,
      required: true,
      // must match format en-US or en
      // match: [[/^[a-z]{2}-[A-Z]{2}$/, 'Must match a valid language code.']]
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
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// virtual for contact list
userSchema.virtual('contactCount').get(function() {
  return this.contacts.length;
});

const User = model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [6, 'Name must be between 6 and 16 characters'],
    maxlength: [16, 'Name must be between 6 and 16 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: emailRegex
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be between 8 and 16 characters'],
    maxlength: [16, 'Password must be between 8 and 16 characters']
  }
})

UserSchema.pre('save', function (next) {
  var user = this

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  // hash the password
  var hash = bcrypt.hashSync(user.password, 10)

  // Override the cleartext password with the hashed one
  user.password = hash
  next()
})

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

UserSchema.options.toJSON = {
  transform: function (doc, ret, options) {
    delete ret.password
    return ret
  }
}

module.exports = mongoose.model('User', UserSchema)

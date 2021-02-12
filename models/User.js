const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    periodDuration: String,
    cycleDuration: String,
    Data: Object,
    Location: String,
    name: String
})

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
module.exports = mongoose.model('User', userSchema);
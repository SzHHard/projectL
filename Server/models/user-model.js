const {Schema, model} = require('mongoose');

const UserSchema = new Schema( {
    profileName: {type: String, max: 18, required: true, unique: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})

module.exports = model('User', UserSchema);
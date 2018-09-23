const mongoose = require('mongoose');

const {Schema} = mongoose;

let User = null;

try {
    const UserSchema = new Schema({
        key: String,
        name: String,
        email: String,
    });
    User = mongoose.model('User', UserSchema)
} catch (e) {
    User = mongoose.model('User')
}

module.exports = User;
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

const User = model('User', UserSchema);

//export the user model
module.exports = User;
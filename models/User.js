const { Schema, model, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({

    userName: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [
        {
            type: SchemaTypes.ObjectId,
            //the ref tells which documents to search to find the right comments.
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: SchemaTypes.ObjectId,
            //the ref tells which documents to search to find the right comments.
            ref: "User",
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const User = model('User', UserSchema);

//export the user model
module.exports = User;
const { Schema, model, SchemaTypes } = require('mongoose');

const UserSchema = new Schema({

    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
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

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    // return this.friends.reduce((total, friend) => total + friend + 1, 0);
    return this.friends.length;
  });
// create the User model using the UserSchema
const User = model('User', UserSchema);

//export the user model
module.exports = User;
const { Schema, model, SchemaTypes } = require('mongoose');
const { stringify } = require('querystring');

const ThoughtSchema = new Schema({
    writtenBy: {
        type: String
    },
    thoughtBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});
const Thought = model('Thought', ThoughtSchema);

//export the user model
module.exports = User;
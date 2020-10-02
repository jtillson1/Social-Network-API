const { Schema, model, Types } = require("mongoose");
const moment = require("moment");


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: [1, 'Thoughts need to be between 1 and 250 characters'],
      maxlength: [250, 'Thoughts need to be between 1 and 250 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  }
);

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion w comment _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: [280, 'No more than 280 characters']
      },
        username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
ThoughtSchema.virtual('reactionCount').get(function() {
    // return this.reactions.reduce((total, reaction) => total + comment.replies.length + 1, 0);
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
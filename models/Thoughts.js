

//MAIN CODE (integrate reaction schema)
const mongoose = require('mongoose');

//NEED CODE TO ADD thoughtSchema
/*
const thoughtSchema = require('../schemas/ThoughtSchema');
const Thought = mongoose.model('Thought', thoughtSchema);
*/
// REACTION schema
const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
});

// THOUGHT schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

// VIRTUAL field `reactionCount`
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// CREATE the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;


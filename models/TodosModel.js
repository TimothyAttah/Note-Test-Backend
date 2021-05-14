const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;
const TodosSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true
  },
  isComplete: Boolean,
  date: {
    type: Date,
    default: new Date()
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
});

mongoose.model( 'Todos', TodosSchema );
const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;
const TodosSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true
  },
  isComplete: Boolean
}, { timestamps: true } );

mongoose.model( 'Todos', TodosSchema );
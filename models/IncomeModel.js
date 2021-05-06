const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;

const IncomeSchema = new mongoose.Schema( {
  item: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, { timestamps: true } );

mongoose.model( 'Income', IncomeSchema );
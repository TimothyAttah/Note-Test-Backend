const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;

const NotesSchema = new mongoose.Schema( {
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: [ { type: ObjectId, ref: 'User' } ],
  comments: [ {
    text: String,
    postedBy: { type: ObjectId, ref: 'User'}
  }],
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, { timestamps: true } );

mongoose.model( 'Notes', NotesSchema );

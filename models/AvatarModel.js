const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;

const AvatarSchema = new mongoose.Schema( {
  avatar: {
    type: String,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, { timestamps: true } );

mongoose.model( 'Avatar', AvatarSchema );

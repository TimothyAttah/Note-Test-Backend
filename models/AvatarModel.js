const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;

const AvatarSchema = new mongoose.Schema( {
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/timothycloud/image/upload/v1621547457/130-1300217_user-icon-member-icon-png-transparent-png_m7qu9s.png'
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
}, { timestamps: true } );

mongoose.model( 'Avatar', AvatarSchema );

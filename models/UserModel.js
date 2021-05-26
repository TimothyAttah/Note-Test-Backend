const mongoose = require( 'mongoose' );
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema( {
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/timothycloud/image/upload/v1621547457/130-1300217_user-icon-member-icon-png-transparent-png_m7qu9s.png'
  },
  followers: [{type: ObjectId, ref: 'User'}],
  following: [{type: ObjectId, ref: 'User'}],
}, { timestamps: true, } )

mongoose.model( 'User', UserSchema );
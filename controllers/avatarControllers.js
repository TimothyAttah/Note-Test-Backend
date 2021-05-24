const mongoose = require( 'mongoose' );
const Avatar = mongoose.model( 'Avatar' );
const cloudinary = require( '../utils/cloudinary' );
const upload = require( '../utils/multer' );


exports.uploadAvatar = async ( req, res ) => {
  const {avatar} = req.body;
  try {
    // await upload.single('avatar')
    // const results = await cloudinary.uploader.upload( req.file.path )
    req.user.password = undefined
    const newUploads = await new Avatar( {
      avatar,
      postedBy: req.user
    } ).populate( 'postedBy', '-password' )
    await newUploads.save();
    res.status(200).json({message: 'Image upload successfully.',  newUploads})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
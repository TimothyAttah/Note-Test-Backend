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
    res.status(200).json({message: 'Image uploaded successfully.',  newUploads})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.getAllUploadsAvatar = async ( req, res ) => {
  try {
    const results = await Avatar.find()
      .populate( 'postedBy', '-password' )
    res.status(200).json({message: 'All uploads avatar',  results})
  } catch (error) {
      return res.status(500).json({error: error.message})
  }
}

module.exports.getMyUploadsAvatars = async ( req, res ) => {
  try {
    const myAvatars = await Avatar.find( { postedBy: req.user._id } )
      .populate( 'postedBy', '-password' )
    res.status( 200 ).json( { message: 'All User Avatars', myAvatars} );
  } catch (error) {
    return res.status(500).json({error: error})
  }
}
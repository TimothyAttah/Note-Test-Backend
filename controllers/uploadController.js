const cloudinary = require( 'cloudinary' );
const key = require( '../config/key' )
 const mongoose = require( 'mongoose' );
const Avatar = mongoose.model( 'Avatar' );

const fs = require( 'fs' )


cloudinary.config( {
  cloud_name: key.cloudinaryCloudName,
  api_key: key.cloudinaryApiKey,
  api_secret: key.cloudinaryApiSecret
} );

const uploadController = {
  uploadAvatar: async ( req, res ) => {
    const avatarData = req.body;
  const { avatar } = avatarData;
    try {
    //    req.user.password = undefined
    //    const newUploads = await new Avatar( {
      //      avatar,
      //   postedBy: req.user
      // } ).populate( 'postedBy', '-password' )
      const file = req.files.file;
     await cloudinary.v2.uploader.upload( file.tempFilePath, {
        folder: 'note3sixty', width: 150, height: 150, crop: 'fill'
      }, async ( err, result ) => {
        if ( err ) throw err;
        removeTmp( file.tempFilePath )
       console.log( { result } )
        // await newUploads.save();
        res.json({message: 'Image uploaded successfully', url: result.secure_url,})
      })
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  }
}

const removeTmp = ( path ) => {
  fs.unlink( path, err => {
    if (err) throw err
  })
}


module.exports = uploadController;
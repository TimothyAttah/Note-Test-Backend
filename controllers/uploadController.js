const cloudinary = require( 'cloudinary' );
 const key = require('../config/key')
// const upload = require( '../utils/multer' );

const fs = require( 'fs' )


cloudinary.config( {
  cloud_name: key.cloudinaryCloudName,
  api_key: key.cloudinaryApiKey,
  api_secret: key.cloudinaryApiSecret
} );

const uploadController = {
  uploadAvatar: async ( req, res ) => {
    try {
      const file = req.files.file;
      cloudinary.v2.uploader.upload( file.tempFilePath, {
        folder: 'note3sixty', width: 150, height: 150, crop: 'fill'
      }, async ( err, result ) => {
        if ( err ) throw err;
        removeTmp( file.tempFilePath )
        console.log( { result } )
        res.json({message: 'Image uploaded successfully', url: result.secure_url})
      })
      // const results = await cloudinary.uploader.upload( req.file.path )
      // res.status(200).json({message: 'Image upload successfully.', results})
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
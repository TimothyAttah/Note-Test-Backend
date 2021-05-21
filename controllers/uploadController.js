const cloudinary = require( '../utils/cloudinary' );
const upload = require( '../utils/multer' );


const uploadController = {
  uploadAvatar: async ( req, res ) => {
    try {
      const results = await cloudinary.uploader.upload( req.file.path )
      res.status(200).json({message: 'Image upload successfully.', results})
    } catch (err) {
      return res.status(500).json({error: err.message})
    }
  }
}

module.exports = uploadController;
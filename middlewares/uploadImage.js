const fs = require( 'fs' );

const uploadImage = async ( req, res, next ) => {
  try {
    if ( !req.files || Object.keys( req.files ).length === 0 )
      return res.status( 400 ).json( { error: 'No files were uploaded.' } );
    const file = req.files.file
    if ( file.size > 1024 * 1024 ) {
      removeTmp( file.tempFilePath )
      return res.status( 400 ).json( { error: 'Size too large' } );
    } //1mb
    next();
  } catch (err) {
    return res.status(500).json({error: err.message})
  }
}

const removeTmp = ( path ) => {
  fs.unlink( path, err => {
    if (err) throw err
  })
}

module.exports = uploadImage;
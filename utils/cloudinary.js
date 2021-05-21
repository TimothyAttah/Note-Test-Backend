const cloudinary = require( 'cloudinary' ).v2;
const key = require( '../config/key' );

cloudinary.config( {
  cloud_name: key.cloudinaryCloudName,
  api_key: key.cloudinaryApiKey,
  api_secret: key.cloudinaryApiSecret
} );

module.exports = cloudinary;

const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const uploadImage = require( '../middlewares/uploadImage' );
const uploadController = require( '../controllers/uploadController' );

router.post('/upload_avatar', uploadImage, uploadController.uploadAvatar)

module.exports = router;
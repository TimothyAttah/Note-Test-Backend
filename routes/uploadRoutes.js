const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const uploadImage = require( '../middlewares/uploadImage' );
const uploadController = require( '../controllers/uploadController' );
const cloudinary = require( '../utils/cloudinary' );
const upload = require( '../utils/multer' );


router.post('/upload_avatar', upload.single('file'), uploadController.uploadAvatar)

module.exports = router;
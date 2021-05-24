const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
// const upload = require( '../utils/multer' );
const {
  uploadAvatar
} = require( '../controllers/avatarControllers' );

router.post( '/upload_avatar', auth, uploadAvatar );

module.exports = router;

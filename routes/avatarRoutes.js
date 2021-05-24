const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
// const upload = require( '../utils/multer' );
const {
  uploadAvatar, getAllUploadsAvatar, getMyUploadsAvatars
} = require( '../controllers/avatarControllers' );

router.post( '/upload_avatar', auth, uploadAvatar );

router.get( '/all_uploads', getAllUploadsAvatar );

router.get( '/:id/my_avatars', auth, getMyUploadsAvatars );

module.exports = router;

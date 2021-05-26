const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
// const upload = require( '../utils/multer' );
const {
  uploadAvatar, getAllUploadsAvatar, getMyUploadsAvatars, uploadImage, getImages
} = require( '../controllers/avatarControllers' );

router.post( '/upload_avatar', auth, uploadAvatar );

router.post( '/', uploadImage );

router.get( '/all_uploads', getAllUploadsAvatar );

router.get( '/:id/my_avatars', auth, getMyUploadsAvatars );

router.get( '/images', getImages );

module.exports = router;

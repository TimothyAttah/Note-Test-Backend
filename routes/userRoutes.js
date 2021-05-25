const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  getUser, followUsers, unfollowUsers, updateAvatar
} = require( '../controllers/usersController' );
 
router.get( '/:id/user', auth, getUser );

router.put( '/follow', auth, followUsers );

router.put( '/unfollow', auth, unfollowUsers );

router.put( '/update_image', auth, updateAvatar );

module.exports = router;
const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  getUser, followUsers, unfollowUsers
} = require( '../controllers/usersController' );
 
router.get( '/:id/user', auth, getUser );

router.put( '/follow', auth, followUsers );

router.put( '/unfollow', auth, unfollowUsers );

module.exports = router;
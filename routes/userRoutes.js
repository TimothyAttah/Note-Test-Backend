const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  getUser
} = require( '../controllers/usersController' );
 
router.get( '/:id/user', auth, getUser );

module.exports = router;
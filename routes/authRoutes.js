const express = require( 'express' )
const router = express.Router();
const {
  signupUser, signinUser, getUsers
} = require( '../controllers/authController' );

router.get( '/', getUsers );

router.post( '/signup', signupUser );

router.post( '/signin', signinUser );


module.exports = router;
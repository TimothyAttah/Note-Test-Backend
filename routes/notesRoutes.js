const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  notesCreate
} = require( '../controllers/notesController' );

router.post( '/create', auth, notesCreate );


module.exports = router;
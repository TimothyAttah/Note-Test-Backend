const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  notesCreate, allNotes, myNotes
} = require( '../controllers/notesController' );

router.post( '/create', auth, notesCreate );

router.get( '/', auth, allNotes );

router.get( '/:id/note', auth, myNotes );


module.exports = router;
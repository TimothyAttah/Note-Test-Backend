const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  notesCreate, allNotes, myNotes, noteDelete, notesEdit
} = require( '../controllers/notesController' );

router.post( '/create', auth, notesCreate );

router.get( '/', auth, allNotes );

router.get( '/user/note', auth, myNotes );

router.delete( '/:noteId/delete', auth, noteDelete );

router.put( '/:noteId/edit', auth, notesEdit );


module.exports = router;

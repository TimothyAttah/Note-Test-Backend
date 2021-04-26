const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  notesCreate, allNotes, myNotes, noteDelete, notesEdit, like, unlike
} = require( '../controllers/notesController' );

router.post( '/create', auth, notesCreate );

router.get( '/', allNotes );

router.get( '/user/note', auth, myNotes );

router.delete( '/:noteId/delete', auth, noteDelete );

router.put( '/:noteId/edit', auth, notesEdit );

router.put( '/like', auth, like );

router.put( '/unlike', auth, like );


module.exports = router;

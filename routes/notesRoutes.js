const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  notesCreate, allNotes, myNotes, noteDelete, notesEdit, likeNote, unlikeNote, notesComments, allFriendsNotes
} = require( '../controllers/notesController' );

router.post( '/create', auth, notesCreate );

router.get( '/', allNotes );

router.get( '/user/note', auth, myNotes );

router.get( '/friends/notes', auth, allFriendsNotes );

router.delete( '/:noteId/delete', auth, noteDelete );

router.put( '/:noteId/edit', auth, notesEdit );

router.put( '/like', auth, likeNote );

router.put( '/unlike', auth, unlikeNote );

router.put( '/comments', auth, notesComments );


module.exports = router;

const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  createTodos, getAllTodos
} = require( '../controllers/todosController' );

router.post( '/create', auth, createTodos );

router.get( '/', getAllTodos );

module.exports = router;
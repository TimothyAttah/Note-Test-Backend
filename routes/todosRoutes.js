const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  createTodos, getAllTodos, myTodos
} = require( '../controllers/todosController' );

router.post( '/create', auth, createTodos );

router.get( '/', getAllTodos );

router.get( '/users/todo', auth, myTodos );

module.exports = router;
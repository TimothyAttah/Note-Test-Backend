const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  createTodos, getAllTodos, myTodos, deleteTodos
} = require( '../controllers/todosController' );

router.post( '/create', auth, createTodos );

router.get( '/', getAllTodos );

router.get( '/users/todo', auth, myTodos );

router.delete( '/:todosId/delete', auth, deleteTodos );

module.exports = router;
const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  createTodos, getAllTodos, myTodos, deleteTodos, editTodos, editIsComplete
} = require( '../controllers/todosController' );

router.post( '/create', auth, createTodos );

router.get( '/', getAllTodos );

router.get( '/users/todo', auth, myTodos );

router.delete( '/:todosId/delete', auth, deleteTodos );

router.put( '/:todosId/edit', auth, editTodos );

router.patch( '/:todosId/edit', auth, editIsComplete );

module.exports = router;
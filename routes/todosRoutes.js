const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  createTodos
} = require( '../controllers/todosController' );

router.post( '/create', auth, createTodos );

module.exports = router;
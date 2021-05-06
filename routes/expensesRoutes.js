const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addExpenses
} = require( '../controllers/expensesController' );

router.post( '/add', auth, addExpenses );

module.exports = router;
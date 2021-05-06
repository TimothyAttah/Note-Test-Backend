const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addExpenses, getAllExpenses
} = require( '../controllers/expensesController' );

router.post( '/add', auth, addExpenses );

router.get( '/', getAllExpenses );

module.exports = router;
const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addExpenses, getAllExpenses, getUserExpenses
} = require( '../controllers/expensesController' );

router.post( '/add', auth, addExpenses );

router.get( '/', getAllExpenses );

router.get( '/user/expenses', auth, getUserExpenses );

module.exports = router;
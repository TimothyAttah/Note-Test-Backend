const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addIncome, getAllIncomes, myIncomes
} = require( '../controllers/incomeController' );

router.post( '/add', auth, addIncome );

router.get( '/', getAllIncomes );

router.get( '/user/incomes', auth, myIncomes );

module.exports = router;
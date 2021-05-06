const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addIncome, getAllIncomes
} = require( '../controllers/incomeController' );

router.post( '/add', auth, addIncome );

router.get( '/', getAllIncomes );

module.exports = router;
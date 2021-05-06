const router = require( 'express' ).Router();
const auth = require( '../middlewares/auth' );
const {
  addIncome
} = require( '../controllers/incomeController' );

router.post( '/add', auth, addIncome );

module.exports = router;
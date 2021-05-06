const mongoose = require( 'mongoose' );
const Expenses = mongoose.model( 'Expenses' );

module.exports.addExpenses = async ( req, res ) => {
  const expensesData = req.body;
  const { item, value } = expensesData;
  try {
    if ( !item || !value )
      return res.status( 404 ).json( { error: 'Please enter your item and value' } );
    req.user.password = undefined
    const newExpenses = await new Expenses( {
      item,
      value,
      postedBy: req.user
    } )
      .populate( 'postedBy', '-password' )
    await newExpenses.save();
    res.status( 200 ).json( { message: 'New expenses added', newExpenses } );
  } catch (error) {
    return res.status(500).json({error: error})
  }
}
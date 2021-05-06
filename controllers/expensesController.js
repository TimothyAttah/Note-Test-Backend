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

module.exports.getAllExpenses = async ( req, res ) => {
  try {
    const allExpenses = await Expenses.find().populate( 'postedBy', '-password' )
    res.status( 200 ).json( { message: 'All Expenses', allExpenses } );
  } catch (error) {
    return res.status(500).json({error: error})
  }
}

module.exports.getUserExpenses = async ( req, res ) => {
  try {
    const expenses = await Expenses.find( { postedBy: req.user._id } )
      .populate( 'postedBy', '-password' )
    res.status( 200 ).json( { message: 'All User Expenses', expenses } );
  } catch (error) {
    return res.status(500).json({error: error})
  }
}

module.exports.deleteExpenses = async ( req, res ) => {
  try {
    await Expenses.findOne( { _id: req.params.expensesId } )
      .populate( 'postedBy', '_id' )
      .exec( async ( err, expenses ) => {
        if ( err && !expenses ) {
          return res.status( 404 ).json( { error: err.message})
        }
        if ( expenses.postedBy._id.toString() === req.user._id.toString() ) {
          const deletedExpenses = expenses.remove();
          res.status( 200 ).json( { message: 'Expenses deleted successfully', deletedExpenses } );
        }
    })
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}
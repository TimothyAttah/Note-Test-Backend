const mongoose = require( 'mongoose' );
const Incomes = mongoose.model( 'Incomes' )
const User = mongoose.model( 'User' );

module.exports.addIncome = async ( req, res ) => {
  const incomeData = req.body;
  const { item, value } = incomeData;
  try {
    if ( !item || !value )
      return res.status( 404 ).json( { error: 'Please enter an item and value' } );
    req.user.password = undefined;
    const newIncome = await new Incomes( {
      item,
      value,
      postedBy: req.user
   }).populate('postedBy', '-password')
    await newIncome.save()
    res.status( 200 ).json( { message: 'Income Added', newIncome } );
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.getAllIncomes = async ( req, res ) => {
  try {
    const allIncomes = await Incomes.find().populate( 'postedBy', '-password' )
     res.status( 200 ).json( { message: 'All Users Income', allIncomes } );
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.myIncomes = async ( req, res ) => {
  try {
    const incomes = await Incomes.find( { postedBy: req.user._id } )
      .populate( 'postedBy', '-password' );
     res.status( 200 ).json( incomes );
  } catch (error) {
    return res.status( 500 ).json( { error: error } ); 
  }
}
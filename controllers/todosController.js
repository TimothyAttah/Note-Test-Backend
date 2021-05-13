const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );
const Todos = mongoose.model( 'Todos' );

exports.createTodos = async ( req, res ) => {
  const todosData = req.body;
  const { name , isComplete} = todosData;
  try {
    if ( !name )
      return status(400).json({error: 'Please enter name of todo'})
    req.user.password = undefined;
    const todos = await new Todos( {
      name,
      isComplete,
      postedBy: req.user
    } )
    await ( await todos.save() ).populate( 'postedBy', '-password' )
    res.status(200).json({message: 'New todo added...', todos})
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

exports.getAllTodos = async ( req, res ) => {
  try {
    const todos = await Todos.find().populate( 'postedBy', '-password' );
    res.status(200).json({message: 'All todos...', todos})
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

exports.myTodos = async ( req, res ) => {
  try {
    const todos = await Todos.find( { postedBy: req.user._id } )
      .populate( 'postedBy', '-password' );
    res.status(200).json({message: 'My todos!!!', todos})
  } catch ( error ) {
    return res.status( 500 ).json( { error: error } );
  }
}
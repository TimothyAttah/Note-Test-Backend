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
    const todos = await Todos.find().sort({date: -1}).populate( 'postedBy', '-password' );
    res.status(200).json({message: 'All todos...', todos})
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

exports.myTodos = async ( req, res ) => {
  try {
    const todos = await Todos.find( { postedBy: req.user._id } ).sort({date: -1})
      .populate( 'postedBy', '-password' );
    res.status(200).json({message: 'My todos!!!', todos})
  } catch ( error ) {
    return res.status( 500 ).json( { error: error } );
  }
}

exports.deleteTodos = async ( req, res ) => {
  try {
  await Todos.findOne( { _id: req.params.todosId } )
      .populate( 'postedBy', '-password' )
      .exec( async ( err, todo ) => {
        if ( err , !todo ) {
          return res.status(404).json({error: err.message})
        }
        if ( todo.postedBy._id.toString() === req.user._id.toString() ) {
          const deletedTodo = await todo.remove();
          res.status(200).json({message: 'Todo deleted', deletedTodo})
        }
      })
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

// exports.deleteTodos = async ( req, res ) => {
//   try {
//     const deletedTodo = await Todos.findByIdAndDelete( req.params.todosId )
//     res.status(200).json({message: 'Todo deleted', deletedTodo})
//   } catch (error) {
//     return res.status( 500 ).json( { error: error } );
//   }
// }

// exports.editTodos = async ( req, res ) => {
//   try {
//      const todosData = req.body;
//     const { name, isComplete } = todosData;
//     const todos = await Todos.findById( req.params.todosId )
//     if ( !todos )
//       return res.status( 404 ).json( { error: 'Todos not found...' } )
//    const updatedTodos =  Todos.findByIdAndUpdate( req.params.todosId, {
//       name,
//       isComplete
//    }, { new: true } );
//     res.status( 200 ).json( { message: 'Todos edited successfully', updatedTodos } )
//   } catch (error) {
//     return res.status( 500 ).json( { error: error } );
//   }
// }



exports.editTodos = async ( req, res ) => {
  try {
    const todosData = req.body;
    const { name, isComplete } = todosData;
    await Todos.findOne( { _id: req.params.todosId } )
      .populate( 'postedBy', '-password' )
      .exec( async ( err, todo ) => {
        if ( err, !todo ) {
          return res.status( 404 ).json( { error: err.message } )
        }
        if ( todo.postedBy._id.toString() === req.user._id.toString() ) {
           req.user.password = undefined;
          const updatedTodos = await Todos.findByIdAndUpdate( req.params.todosId, {
            name,
            isComplete,
            postedBy: req.user
          }, { new: true } );
          res.status( 200 ).json( { message: 'Todos edited successfully', updatedTodos } )
        }
      } );
  
  } catch ( error ) {
    return res.status( 500 ).json( { error: error } );
  };
};

exports.editIsComplete = async ( req, res ) => {
  try {
    const todos = await Todos.findById( req.params.todosId );
    if ( !todos )
      return res.status( 404 ).json( { error: 'Todos not found...' } )
    const updatedTodos = await Todos.findByIdAndUpdate( req.params.todosId, {
      isComplete: !todos.isComplete
   }, {new: true} )
     res.status( 200 ).json( { message: 'Todos status changed...', updatedTodos } )
    
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}
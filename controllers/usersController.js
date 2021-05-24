const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );
const Notes = mongoose.model( 'Notes' );
const Incomes = mongoose.model( 'Incomes' );
const Expenses = mongoose.model( 'Expenses' );
const Todos = mongoose.model( 'Todos' );
const Avatar = mongoose.model('Avatar')

module.exports.getUser = async ( req, res ) => {
  try {
    const user = await User.findOne( { _id: req.params.id } ).select( '-password' )
    if ( user ) {
      await Notes.find( { postedBy: req.params.id } )
        .populate( 'postedBy', '-password' )
        .exec( async ( err, posts ) => {
          if ( err ) {
            return res.status( 404 ).json( { error: err.message } )
          }
          await Incomes.find( { postedBy: req.params.id } )
            .populate( 'postedBy', '-password' )
            .exec( async ( err, incomes ) => {
              if ( err ) {
                
                return res.status( 404 ).json( { error: err.message } )
              }
              await Expenses.find( { postedBy: req.params.id } )
                .populate( 'postedBy', '-password' )
                .exec( async ( err, expenses ) => {
                  if ( err ) {
                    return res.status( 404 ).json( { error: err.message } )
                  }
                  await Todos.find( { postedBy: req.params.id } )
                    .populate( 'postedBy', '-password' )
                    .exec( async ( err, todos ) => {
                      if ( err ) {
                        return res.status( 404 ).json( { error: err.message } );
                      }
                      await Avatar.find( { postedBy: req.params.id } )
                        .populate( 'postedBy', '-password' )
                        .exec( async ( err, avatar ) => {
                          if ( err ) {
                            return res.status( 404 ).json( { error: err.message } );
                          }
                          res.status( 200 ).json( { message: 'Single user profile', user, posts, incomes, expenses, todos, avatar } )
                        } );
                    } );
                } );
            } );
        } );
    }
  } catch ( error ) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.followUsers = async ( req, res ) => {
  try {
    User.findByIdAndUpdate( req.body.followId, {
     $push: {followers: req.user._id}
    }, { new: true }, ( err, result ) => {
      if ( err ) {
        return res.status( 404 ).json( { error: err.message } );
      }
      User.findByIdAndUpdate( req.user._id, {
        $push: {following: req.body.followId}
      }, { new: true } ).select( '-password' ).then( results => {
          res.status(200).json({message: 'You are following', results})
      })  
   })
  } catch (error) {
     return res.status( 500 ).json( { error: error.message } );
  }
}

module.exports.unfollowUsers = async ( req, res ) => {
   try {
    User.findByIdAndUpdate( req.body.unfollowId, {
     $pull:{followers:req.user._id}
    }, { new: true }, ( err, result ) => {
      if ( err ) {
        return res.status( 404 ).json( { error: err.message } );
      }
      User.findByIdAndUpdate( req.user._id, {
        $pull: {following: req.body.unfollowId}
      }, { new: true } ).select( '-password' ).then( results => {
          res.status(200).json({message: 'You are unFollowing', results})
      })  
   })
  } catch (error) {
     return res.status( 500 ).json( { error: error.message } );
  }
}
// try {
//   await User.findByIdAndUpdate( req.body.unfollowId, {
//     $pull: {followers: req.user._id}
//   }, {
//     new: true
//   }, ( async ( err, result ) => {
//     if ( err ) {
//       res.status(404).json({error: err.message})
//     }
//     const results = await User.findByIdAndUpdate( req.user._id, {
//       $pull: {following: req.body.unfollowId}
//     }, {new: true} ).select('-password')
//     res.status( 200 ).json( { message: 'You unfollow this user', results } );
//   }) )
// } catch (error) {
//    return res.status( 500 ).json( { error: error } );
// }
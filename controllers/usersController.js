const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );
const Notes = mongoose.model( 'Notes' );

module.exports.getUser = async ( req, res ) => {
  try {
    const user = await User.findOne( { _id: req.params.id } ).select( '-password' )
    if ( user ) {
       await Notes.find( { postedBy: req.params.id } )
        .populate( 'postedBy', '-password' )
        .exec( async ( err, result ) => {
          if ( err ) {
          return res.status(404).json({error: err.message})
          }
          res.status(200).json({message: 'Single user profile', user, result})
      })
    }
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.followUsers = async ( req, res ) => {
  try {
    await User.findByIdAndUpdate( req.body.followId, {
      $addToSet: {followers: req.user._id}
    },
      { new: true },
      ( async ( err, result ) => {
        if ( err ) {
        return  res.status(404).json({error: err.message})
        }
      const results = await  User.findByIdAndUpdate( req.user._id, {
          $addToSet: {following: req.body.followId}
        }, { new: true } ).select('-password')
        res.status( 200 ).json( { message: 'You followed this user', results } );
      })
    )
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.unfollowUsers = async ( req, res ) => {
  try {
    await User.findByIdAndUpdate( req.body.unfollowId, {
      $pull: {followers: req.user._id}
    }, {
      new: true
    }, ( async ( err, result ) => {
      if ( err ) {
        res.status(404).json({error: err.message})
      }
      const results = await User.findByIdAndUpdate( req.user._id, {
        $pull: {following: req.body.unfollowId}
      }, {new: true} ).select('-password')
      res.status( 200 ).json( { message: 'You unfollow this user', results } );
    }) )
  } catch (error) {
     return res.status( 500 ).json( { error: error } );
  }
}
const mongoose = require( 'mongoose' );
const Notes = mongoose.model( 'Notes' );

module.exports.notesCreate = async ( req, res ) => {
  const notesData = req.body;
  const { title, content } = notesData;
  try {
    if ( !title || !content )
      return res.status( 404 ).json( { error: 'Please enter your title and content ' } );
    req.user.password = undefined;
    const note = await new Notes( {
      title,
      content,
      postedBy: req.user
    } )
    await note.save();
    res.status( 200 ).json( { message: 'Note created successfully', note } );
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.allNotes = async ( req, res ) => {
  try {
    const notes = await Notes.find()
      .populate( 'postedBy', '-password' )
    res.status(200).json(notes)
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}

module.exports.myNotes = async ( req, res ) => {
  try {
    const notes = await Notes.find({postedBy: req.user._id})
      .populate( 'postedBy', '-password' )
    res.status(200).json(notes)
  } catch (error) {
    return res.status( 500 ).json( { error: error } );
  }
}
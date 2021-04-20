const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );

const User = mongoose.model( 'User' );

module.exports.signupUser = async ( req, res ) => {
  const userData = req.body;
  const { firstName, lastName, email, password } =userData;
  if ( !firstName || !lastName || !email || !password )
    return res.status( 404 ).json( { error: 'Please fill in all fields' } );
  const users = await User.findOne( { email } )
  if (users) return res.status(404).json({error: 'User with that email already exists'})
  const hashedPassword = await bcrypt.hash( password, 12 );
  try {
    const fullName = { firstName, lastName };
    const users = await new User( {
      firstName,
      lastName,
      fullName,
      email,
      password: hashedPassword
    })
    await users.save()
    res.status(200).json({message: 'User successfully signed up.', users})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}
const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const key = require( '../config/key' );

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
    users.password = undefined;
    res.status(200).json({message: 'User successfully signed up.', users})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports.signinUser = async ( req, res ) => {
  const userData = req.body;
  const { email, password } = userData;
  try {
    if ( !email || !password )
      return res.status( 404 ).json( { error: 'Please enter email or password' } );
    const users = await User.findOne( { email } )
    if ( !users )
      return res.status( 404 ).json( { error: 'User with that email does not exists' } );
    const confirmPassword = await bcrypt.compare( password, users.password )
    if ( !confirmPassword )
      return res.status( 404 ).json( { error: 'Incorrect password' } );
    const token = jwt.sign( { _id: users._id }, key.jwtSecret );
    users.password = undefined;
    res.status( 200 ).json( { message: 'User successfully signed in', token, results: users } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

module.exports.getUsers = async ( req, res ) => {
  try {
    const savedUsers = await User.find()
    res.status( 200 ).json( { message: 'All users', savedUsers } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

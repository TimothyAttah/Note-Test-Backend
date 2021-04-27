const express = require( 'express' );
const cors = require( 'cors' );
const dotenv = require( 'dotenv' )
dotenv.config({path: './config/key'})

require( './models/UserModel' );
require( './models/NoteModel' );

const app = express();

const connectDB = require( './config/db' );
connectDB();

app.use( express.json() );
app.use( cors() );

app.use( '/users', require( './routes/authRoutes' ) );
app.use( '/notes', require( './routes/notesRoutes' ) );
app.use('/auth', require('./routes/userRoutes'))


const PORT = process.env.PORT || 8080;


if ( process.env.NODE_ENV === 'production' ) {
  app.use( express.static( 'client/build' ) );

  const path = require( 'path' );
  
  app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
  } );
}

app.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` ) );
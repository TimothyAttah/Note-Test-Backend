const express = require( 'express' );
const cors = require( 'cors' );
const dotenv = require( 'dotenv' )
dotenv.config({path: './config/key'})

require( './models/UserModel' );

const app = express();

const connectDB = require( './config/db' );
connectDB();

app.use( express.json() );
app.use( cors() );

app.get( '/', ( req, res ) => {
  res.send( 'Hello mighty worlds' )
} );

app.use( '/api/user', require( './routes/authRoutes' ) );


const PORT = process.env.PORT || 8080;

// if ( process.env.NODE_ENV === 'production' ) {
//   app.use( express.static( path.join( __dirname, 'client/build' ) ) );
  
//   app.get( '*', ( req, res ) => {
//     // res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html'))
//     res.sendFile(path.join(__dirname, '/client/build/index.html', 'index.html'));
//   })
// }

app.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` ) );
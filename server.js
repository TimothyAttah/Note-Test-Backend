const express = require( 'express' );
const cors = require( 'cors' );


const app = express();

app.use( express() );
app.use( cors() );

app.get( '/', ( req, res ) => {
  res.send( 'Hello mighty world' )
} );


const PORT = process.env.PORT || 8080;

// if ( process.env.NODE_ENV === 'production' ) {
//   app.use( express.static( path.join( __dirname, 'client/build' ) ) );
  
//   app.get( '*', ( req, res ) => {
//     // res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html'))
//     res.sendFile(path.join(__dirname, '/client/build/index.html', 'index.html'));
//   })
// }

app.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` ) );
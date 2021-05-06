const express = require( 'express' );
const cors = require( 'cors' );
const dotenv = require( 'dotenv' )
dotenv.config({path: './config/key'})

require( './models/UserModel' );
require( './models/NoteModel' );
require( './models/IncomeModel' );
require( './models/ExpensesModel' );

const app = express();

const connectDB = require( './config/db' );
connectDB();

app.use( express.json() );
app.use( cors() );

app.use( '/users', require( './routes/authRoutes' ) );
app.use( '/notes', require( './routes/notesRoutes' ) );
app.use( '/auth/users', require( './routes/userRoutes' ) );
app.use( '/incomes', require( './routes/incomeRoutes' ) );
app.use( '/expenses', require( './routes/expensesRoutes' ) );


const PORT = process.env.PORT || 8080;


if ( process.env.NODE_ENV === 'production' ) {
  app.use( express.static( 'client/build' ) );

  const path = require( 'path' );
  
  app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
  } );
}

app.listen( PORT, () => console.log( `Server is running on port: ${ PORT }` ) );
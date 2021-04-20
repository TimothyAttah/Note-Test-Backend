const mongoose = require( 'mongoose' );
const key = require( '../config/key' );

const connectDB = async () => {
 try {
    const mongoDB = await mongoose.connect( key.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    } )
   console.log(`MongoDB connected on host: ${mongoDB.connection.host}`);
 } catch (error) {
   console.log(error);
 }
}

module.exports = connectDB;

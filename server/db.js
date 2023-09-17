import mongoose from 'mongoose';
require('dotenv').config();

const mongoURI = process.env.MONGODBURI;
const pemPath = process.env.PEM_PATH;

const connectDb = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Using existing database connection');
    return;
  }
  
  mongoose.connect(mongoURI, {
    sslValidate: true,
    tlsCertificateKeyFile: pemPath, // Read the PEM certificate file
    authMechanism: 'MONGODB-X509', // Specify X.509 authentication mechanism
    authSource: '$external'
  })  
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB', error);
    });
};

export default connectDb;

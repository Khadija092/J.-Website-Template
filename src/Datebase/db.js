const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost:27017/mydatabase';

mongoose
  .connect(uri) // No need for `useNewUrlParser` or `useUnifiedTopology`
  .then(() => console.log('Mongoose connected'))
  .catch((err) => console.error('Connection error:', err));

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.k5srszg.mongodb.net/mernapp?retryWrites=true&w=majority`, (error) => {
  if (error) {
    console.log('Error connecting to MongoDB:', error);
  } else {
    console.log('Connected to MongoDB');
  }
});
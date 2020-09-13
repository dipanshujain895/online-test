const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const dbConnect = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middlewares/error');

//Load Environment Vars
dotenv.config({ path: './config/config.env' });

//Establish connection to DB
dbConnect();

//Route Files
const questions = require('./routes/questions');
const schools = require('./routes/schools');
const users = require('./routes/users');


const app = express();

//Body Parser
app.use(express.json());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Mount Routes

app.use('/api/v1/users', users);
app.use('/api/v1/questions', questions);
app.use('/api/v1/schools', schools);

//Custom error handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}.red`);
  server.close(() => process.exit(1));
})

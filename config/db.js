const mongoose = require('mongoose')
const colors = require('colors')
const dbConnect = async() => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB is now connected successfully| ${conn.connection.host}`.cyan.bold.underline);
}

module.exports = dbConnect;

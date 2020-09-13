const mongoose = require('mongoose');
const { validateEmail } = require('../utils/validatiors'); 

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Please limit questions to less than 50 characters']
  },
  slug: {
    type: String
  },
  bio: {
    type: String,
    required: [true, 'Please add a bio'],
    maxlength: [500, 'Please limit questions to less than 500 characters']
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: [true, 'Please provide the School']
  },
  standard: {
    type: String,
    required: [true, 'Please add your class/standard']
  },
  section: {
    type: String,
    required: [true, 'Please provide the right answer']
  },
  phone: {
    type: String,
    required: [true, 'Please provide a Phone number'],
    maxlength: [10, 'Please limit phone to 10 digits']
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    validate: [validateEmail, "Please provide a valid email address"]
  },
  favSubject: {
    type: [String],
    enum: ['Physics', 'Mathematics', 'Chemistry', 'English', 'Sanskrit']
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Student', StudentSchema);

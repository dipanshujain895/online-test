const mongoose = require('mongoose');
const { validateEmail } = require('../utils/validatiors');
const SchoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [true, "Please provide a School Name"],
    unique: true,
    trim: true,
    maxlength: [60, 'Please limit School Name to less than 60 characters']
  },
  schoolBranch: {
    state: {
      type: String,
      required: [true, "Please provide State"],
      trim: true
    },
    city: {
      type: String,
      required: [true, "Please provide City"],
      trim: true
    },
    region: {
      type: String,
      required: [true, "Please provide Region for the school"],
      trim: true
    },
    address: {
      type: String,
      required: [true, "Please provide Address of the school"],
      trim: true
    }
  },
  schoolContact: {
    email: {
      type: String,
      required: [true, "Please provide contact email"],
      validate: [validateEmail, "Please provide a valid email address"],
      trim: true
    },
    phone: {
      type: String,
      required: [true, "Please provide contact phone"],
      trim: true,
      maxlength: [10, "Please limit phone number to 10 digits"]
    }
  },
  schoolImage: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('School', SchoolSchema);

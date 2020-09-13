const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Please provide decription'],
    unique: true,
    maxlength: [300, 'Please limit questions to less than 300 characters']
  },
  options: {
    type: [String],
    required: [true, 'Please provide options']
  },
  mark: {
    type: Number,
    required: [true, 'Please provide the Marks for this question']
  },
  correctAnswer: {
    type: String,
    required: [true, 'Please provide the right answer']
  },
  totalAnswered: {
    type: Number
  },
})

module.exports = mongoose.model('Question', QuestionSchema);

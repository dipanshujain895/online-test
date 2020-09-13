const mongoose = require('mongoose');
const QuestionSchema = require('../models/Question');
const TestSchema = new mongoose.Schema({

	title: {
		type: String,
		required: [true, "Please provide a Test Title"]
	},
	standard: {
		type: String,
		required: [true, 'Please add your class/standard']
	},
	questions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Question'
	}],
	totalMarks: {
		type: Number,
		required: [true, 'Please add Total Marks for the Test']
	},
	addedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Teacher',
		required: [true, 'Please provide TeacherId for the submitted Test']
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	// questions: {
	//     type: [ mongoose.Schema.Types.ObjectId ],
	//     default: undefined
	// }
})

module.exports = mongoose.model('Test', TestSchema);

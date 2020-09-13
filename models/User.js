const mongoose = require('mongoose');
const { validateEmail } = require('../utils/validatiors');
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		required: [true, 'Please provide an email address'],
		validate: [validateEmail, "Please provide a valid email address"],

	},
	password: {
		type: String,
		required: [true, 'Please provide a valid password'],
	},
	userType: {
		type: String,
		required: [true, 'Please provide a valid the type of user(Teacher/Student)'],
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

module.exports = mongoose.model('User', UserSchema);
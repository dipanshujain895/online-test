const mongoose = require('mongoose');
const { validateEmail } = require('../utils/validatiors');

const TeacherSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide Name for the Teacher"],
		trim: true,
		maxlength: [30, "Please limit Teacher Name to less than 30 charachters"]
	},
	slug: {
		type: String
	},
	bio: {
		type: String,
		required: [true, 'Please add a bio'],
		maxlength: [500, 'Please limit questions to less than 500 characters']
	},
	phone: {
		type: String,
		required: [true, 'Please add a phone number'],
		maxlength: [10, "Please limit phone to 10 digits only"],
	},
	email: {
		type: String,
		required: [true, "Please provide Email of the Teacher"],
		validate: [validateEmail, "Please provide a valid email address"],
		trim: true
	},
	photo: {
		type: String,
		default: 'no-teacher-photo.jpg'
	},
	schoolId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'School',
		required: [true, "Please provide School Id"]
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, "Please provide UserId of Teacher"]
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

module.exports = mongoose.model('Teacher', TeacherSchema);

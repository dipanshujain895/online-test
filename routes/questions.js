const express = require('express');
const { getQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questions_controller');
const router = express.Router();

router
	.route('/')
	.get(getQuestions)
	.post(createQuestion)

router
	.route('/:id')
	.get(getQuestion)
	.put(updateQuestion)
	.delete(deleteQuestion)

module.exports = router;

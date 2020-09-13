const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middlewares/async');
const Question = require('../models/Question');

// @desc      Fetch all questions
// @route     GET /api/v1/questions
// @access    public
exports.getQuestions = asyncHandler(async (req, res, next) => {

  const questions = await Question.find();
  if (!questions)
    return next(new ErrorResponse(`No Questions Found`, 404));

  res.status(200).json({ success: true, data: questions, count: questions.length })
})

// @desc      Fetch single question
// @route     GET /api/v1/questions/:id
// @access    public
exports.getQuestion = asyncHandler(async (req, res, next) => {

  const question = await Question.findById(req.params.id);
  if (!question)
    return next(new ErrorResponse(`Question not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: question });
})

// @desc      Create question
// @route     POST /api/v1/questions
// @access    private
exports.createQuestion = asyncHandler(async (req, res, next) => {
  const question = await Question.create(req.body);

  res.status(201).json({
    success: true,
    data: question
  })
})

// @desc      Update questions
// @route     PUT /api/v1/questions/:id
// @access    private
exports.updateQuestion = asyncHandler(async (req, res, next) => {

  const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!question)
    return next(new ErrorResponse(`Question not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: question })
})

// @desc      Delete question
// @route     DELETE /api/v1/questions/:id
// @access    private
exports.deleteQuestion = asyncHandler(async (req, res, next) => {

  const question = await Question.findByIdAndDelete(req.params.id);
  if (!question)
    return next(new ErrorResponse(`Question not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: question })
})

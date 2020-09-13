const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/User');

// @desc      Fetch all users
// @route     GET /api/v1/users
// @access    private

exports.getUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();
	if(!users) {
		return next(new ErrorResponse('No Users Found!!', 404));
	}

	res.status(200).json({success: true, data: users, count: users.length});
})

// @desc      Fetch single user
// @route     GET /api/v1/users:id
// @access    public
exports.getUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	if(!user) {
		return next(new ErrorResponse(`User Not Found with id: ${req.params.id}`, 404))
	}
	res.status(200).json({ success: true, data: user });
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    private
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user
  });
});

// @desc      Update users
// @route     PUT /api/v1/users/:id
// @access    private
exports.updateUser = asyncHandler(async (req, res, next) => {

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!user)
    return next(new ErrorResponse(`User not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: user });
});

// @desc      Delete user
// @route     DELETE /api/v1/users/:id
// @access    private
exports.deleteUser = asyncHandler(async (req, res, next) => {

  const user = await User.findByIdAndDelete(req.params.id);
  if (!user)
    return next(new ErrorResponse(`User not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: user });
});

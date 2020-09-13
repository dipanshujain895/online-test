const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middlewares/async');
const School = require('../models/School');

// @desc      Fetch all schools
// @route     GET /api/v1/schools
// @access    private

exports.getSchools = asyncHandler(async (req, res, next) => {
	const schools = await School.find();
	if(!schools) {
		return next(new ErrorResponse('No Schools Found!!', 404));
	}

	res.status(200).json({success: true, data: schools, count: schools.length});
})

// @desc      Fetch single school
// @route     GET /api/v1/schools:id
// @access    public
exports.getSchool = asyncHandler(async (req, res, next) => {
	const school = await School.findById(req.params.id);
	if(!school) {
		return next(new ErrorResponse(`School Not Found with id: ${req.params.id}`, 404))
	}
	res.status(200).json({ success: true, data: school });
});

// @desc      Create school
// @route     POST /api/v1/schools
// @access    private
exports.createSchool = asyncHandler(async (req, res, next) => {
  const school = await School.create(req.body);

  res.status(201).json({
    success: true,
    data: school
  });
});

// @desc      Update schools
// @route     PUT /api/v1/schools/:id
// @access    private
exports.updateSchool = asyncHandler(async (req, res, next) => {

  const school = await School.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!school)
    return next(new ErrorResponse(`School not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: school });
});

// @desc      Delete school
// @route     DELETE /api/v1/schools/:id
// @access    private
exports.deleteSchool = asyncHandler(async (req, res, next) => {

  const school = await School.findByIdAndDelete(req.params.id);
  if (!school)
    return next(new ErrorResponse(`School not found with id: ${req.params.id}`, 404));

  res.status(200).json({ success: true, data: school });
});

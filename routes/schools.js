const express = require('express');
const router = express.Router();
const { getSchools, createSchool, getSchool, updateSchool, deleteSchool } = require('../controllers/schools_controller');
router
	.route('/')
	.get(getSchools)
	.post(createSchool)

router
	.route('/:id')
	.get(getSchool)
	.put(updateSchool)
	.delete(deleteSchool)

module.exports = router

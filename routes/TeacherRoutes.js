const express = require('express');

const router = express.Router();

const teacherController = require('../controllers/TeacherController');

router.post('/login', teacherController.postLogin);



module.exports = router;
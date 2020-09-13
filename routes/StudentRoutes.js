const express = require('express');

const router = express.Router();

const studentController = require('../controllers/StudentController');

// router.post('/create', studentController);
// router.get('/view', studentController.viewDetails);
router.post('/login',studentController.postLogin);

// router.get('/dashboard', studentController.getDashboard);

router.get('/test', studentController.getTest);

router.post('/submit-test', studentController.submitTest);



module.exports = router;
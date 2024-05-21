const express = require('express');
const { createFeedback, getFeedbacks } = require('../Controllers/feedbackController');

const router = express.Router();

router.post('/feedbacks', createFeedback);
router.get('/feedbacks', getFeedbacks);

module.exports = router;

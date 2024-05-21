const db = require('../Models');
const Feedback = db.Feedback;
const { successResponse, errorResponse } = require('../Config/response');

const createFeedback = async (req, res) => {
    try {
        const { eventId, userId, rating, comment } = req.body;
        const feedback = await Feedback.create({ eventId, userId, rating, comment });
        successResponse(res, feedback, 'Feedback created successfully');
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        successResponse(res, feedbacks);
    } catch (error) {
        errorResponse(res, error.message);
    }
};

module.exports = { createFeedback, getFeedbacks };

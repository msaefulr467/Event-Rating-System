const successResponse = (res, data, message = 'Success') => {
    return res.status(200).json({
        status: 'success',
        message: message,
        data: data
    });
};

const errorResponse = (res, message = 'Error', status = 400) => {
    return res.status(status).json({
        status: 'error',
        message: message
    });
};

module.exports = { successResponse, errorResponse };

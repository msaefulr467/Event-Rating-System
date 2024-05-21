const db = require('../Models');
const User = db.User;
const { hashPassword, comparePassword } = require('../Config/bcrypt');
const generateToken = require('../Config/generateToken');
const { successResponse, errorResponse } = require('../Config/response');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ username, password: hashedPassword });
        successResponse(res, user, 'User created successfully');
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return errorResponse(res, 'User not found', 404);
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return errorResponse(res, 'Invalid password', 401);
        }

        const token = generateToken(user);
        successResponse(res, { user, token }, 'User logged in successfully');
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        successResponse(res, users);
    } catch (error) {
        errorResponse(res, error.message);
    }
};

module.exports = { createUser, loginUser, getUsers };

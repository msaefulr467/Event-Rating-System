const express = require('express');
const { createUser, loginUser, getUsers } = require('../Controllers/userController');

const router = express.Router();

router.post('/users', createUser);
router.post('/users/login', loginUser);
router.get('/users', getUsers);

module.exports = router;

const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

router.route('/').get(userController.listConfirmed);

module.exports = router;
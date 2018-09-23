const express = require('express');
const profileController = require('./profile.controller');

const router = express.Router();

router.route('/').get(profileController.listConfirmed);

module.exports = router;
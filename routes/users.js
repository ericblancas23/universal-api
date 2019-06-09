const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/register', userController.create);
router.post('/authentication', userController.authenticate);

module.exports = router;
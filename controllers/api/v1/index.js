const express = require('express');
const router = express.Router();
const healthCheckController = require('./healthCheck');
const usersController = require('./users/controller');
const posts = require('./posts');

router.use('/healthcheck', healthCheckController.healthCheck);
router.use('/signin', usersController.signin);
router.use('/signup', usersController.signup);
router.use('/signout', usersController.signout);
router.use('/posts', posts);

module.exports = router;
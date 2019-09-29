const express = require('express');
const router = express.Router();
const postsController = require('./controller');

router.route('/').post(postsController.createPost);
router.route('/:id').get(postsController.getPost);
router.route('/:id').put(postsController.updatePost);
router.route('/:id').delete(postsController.deletePost);
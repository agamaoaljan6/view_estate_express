const express = require('express');
const rootRouter = require('./routes/root');
const app = express();
const router = express.Router();


// router.route('/').post('/signin', usersController);

app.listen(3000, 'localhost')
const express = require('express');
const app = express();

app.listen(3000, 'localhost', () => {
    console.log(`listening to http://localhost:3000`)
})
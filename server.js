const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json({"practice": "You're doing a great job!"});
});

app.listen(3000, () => {console.log('Server is working')});
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
;


const PORT = 3001;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(require('./routes/apiroutes'));
app.use(require('./routes/htmlroutes'));

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});
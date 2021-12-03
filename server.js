const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.mongodb_uri || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
});
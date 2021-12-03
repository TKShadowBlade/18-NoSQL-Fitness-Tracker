const db = require ('../models');

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    app.get('/api/workouts/range', ({}, res) => {
        db.workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    app.post('/api/workouts/', (req, res) => {
        db.workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
}
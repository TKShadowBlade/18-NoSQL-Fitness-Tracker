const router = require ('express').Router();
const Workout = require ('../models').Workout;

router.get('/workouts', (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
router.get('/workouts/range', (req, res) => {
    Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then((dbWorkout) => {
             res.json(dbWorkout);
         })
        .catch(err => {
             res.status(400).json(err);
         });
    });

router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
            { _id: req.params.id }, { exercises: req.body }
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
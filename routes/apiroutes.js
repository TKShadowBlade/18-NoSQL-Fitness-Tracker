const router = require ('express').Router();
const Workout = require ('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });
    });
        
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkouts) => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
             res.json(dbWorkout);
         })
        .catch(err => {
             res.json(err);
         });
    });

router.put('/api/workouts/:id', ({ body, params }, req, res) => {
    Workout.findByIdAndUpdate(
        params.id,
            { $push: { exercises: req.body } },
            // runValidators check to see if new exercises meet schema requirements
            { new: true, runValidators: true }
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
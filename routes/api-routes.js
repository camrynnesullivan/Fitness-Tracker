const Workout = require("..models/workout.js");
//THINK CRUD

// //create workout post
// app.post("/workout", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) =>
//       db.Library.findOneAndUpdate(
//         {},
//         { $push: { workout: _id } },
//         { new: true }
//       )
//     )
//     .then((dbLibrary) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //add workout put
// app.put("/workout", ({ body }, res) => {
//   db.Workout.update(body)
//     .then(({ _id }) =>
//       db.Library.findOneAndUpdate(
//         {},
//         { $push: { workout: _id } },
//         { new: true }
//       )
//     )
//     .then((dbLibrary) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// //retrieve workouts? get
// app.get("/workout", (req, res) => {
//   db.Workout.find({})
//     //populate properties in the book array
//     //populate("librarians")- chain populates with models
//     .populate("workouts")
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
